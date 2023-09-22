import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePutSignedUrlDto {
  @IsString()
  @IsNotEmpty()
  fileType: string;
}
