import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGetSignedUrlDto {
  @IsString()
  @IsNotEmpty()
  fileName: string;
}
