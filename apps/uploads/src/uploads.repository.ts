import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UploadDocument } from './models/uploads.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UploadsRepository extends AbstractRepository<UploadDocument> {
  protected readonly logger = new Logger(UploadsRepository.name);

  constructor(
    @InjectModel(UploadDocument.name) userModel: Model<UploadDocument>,
  ) {
    super(userModel);
  }
}
