import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidV4 } from 'uuid';
import { CreatePutSignedUrlDto } from './dto/create-put-signed-url.dto';
import { ConfigService } from '@nestjs/config';
import { CreateGetSignedUrlDto } from './dto/create-get-signed-url.dto';

@Injectable()
export class SignerService {
  private s3: AWS.S3;
  constructor(private readonly configService: ConfigService) {
    this.s3 = new AWS.S3({
      accessKeyId: configService.get('ACCESS_KEY'),
      secretAccessKey: configService.get('SECRET_KEY'),
      region: configService.get('REGION'),
      signatureVersion: 'v4',
    });
  }
  async generatePutSignedUrl(data: CreatePutSignedUrlDto) {
    const fileName = uuidV4() + '.' + data.fileType;
    const signedUrl = this.s3.getSignedUrl('putObject', {
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: fileName,
      Expires: 10 * 60,
    });
    return {
      fileName,
      signedUrl,
    };
  }

  async generateGetSignedUrl(data: CreateGetSignedUrlDto) {
    const fileName = data.fileName;
    const signedUrl = this.s3.getSignedUrl('getObject', {
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: fileName,
      Expires: 10 * 60,
    });
    return {
      fileName,
      signedUrl,
    };
  }
}
