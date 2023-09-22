import { Inject, Injectable } from '@nestjs/common';
import { UploadsRepository } from './uploads.repository';
import { SIGNER_SERVICE } from '@app/common';
import { map } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUploadDocumentDto } from './dto/create-upload-documents.dto';

@Injectable()
export class UploadsService {
  constructor(
    private readonly uploadsRepository: UploadsRepository,
    @Inject(SIGNER_SERVICE) private readonly signerService: ClientProxy,
  ) {}
  async getPutSignedUrl(file_type: string) {
    return this.signerService
      .send('generate_put_signed_url', {
        fileType: file_type,
      })
      .pipe(
        map((res) => {
          return res;
        }),
      );
  }

  async getGetSignedUrl(fileName: string) {
    return this.signerService
      .send('generate_get_signed_url', {
        fileName: fileName,
      })
      .pipe(
        map((res) => {
          return res;
        }),
      );
  }

  async createUploadDocuments(data: CreateUploadDocumentDto, user_id: string) {
    return this.uploadsRepository.create({
      ...data,
      user_id,
    });
  }

  async getAllDocumentsOfUser(user_id: string) {
    return this.uploadsRepository.find({
      user_id,
    });
  }
}
