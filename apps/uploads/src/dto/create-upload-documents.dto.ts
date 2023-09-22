import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUploadDocumentDto {
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  location: string;
}
