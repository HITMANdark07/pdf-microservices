import { IsString } from 'class-validator';

export class GetGetSignedUrlDto {
  @IsString()
  fileName: string;
}
