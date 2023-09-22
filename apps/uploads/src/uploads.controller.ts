import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';
import { GetPutSignedUrlDto } from './dto/put-signed-url.dto';
import { CreateUploadDocumentDto } from './dto/create-upload-documents.dto';
import { GetGetSignedUrlDto } from './dto/get-signed-url.dto';

@Controller()
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('/put-signed')
  @UseGuards(JwtAuthGuard)
  async getPutSignedUrl(@Body() body: GetPutSignedUrlDto) {
    return this.uploadsService.getPutSignedUrl(body.file_type);
  }

  @Post('/get-signed')
  @UseGuards(JwtAuthGuard)
  async getGetSignedUrl(@Body() body: GetGetSignedUrlDto) {
    return this.uploadsService.getGetSignedUrl(body.fileName);
  }

  @Get('/my-documents')
  @UseGuards(JwtAuthGuard)
  async getAllMyDocuments(@CurrentUser() user: UserDto) {
    return this.uploadsService.getAllDocumentsOfUser(user._id);
  }

  @Post('/upload')
  @UseGuards(JwtAuthGuard)
  async createUploadData(
    @Body() data: CreateUploadDocumentDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.uploadsService.createUploadDocuments(data, user._id);
  }
}
