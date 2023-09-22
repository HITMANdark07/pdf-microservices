import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UploadDocument extends AbstractDocument {
  @Prop()
  fileName: string;

  @Prop()
  location: string;

  @Prop()
  user_id: string;
}

export const UploadSchema = SchemaFactory.createForClass(UploadDocument);
