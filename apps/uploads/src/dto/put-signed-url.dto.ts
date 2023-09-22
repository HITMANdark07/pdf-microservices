import { IsString } from 'class-validator';

export class GetPutSignedUrlDto {
  @IsString()
  file_type: string;
}
