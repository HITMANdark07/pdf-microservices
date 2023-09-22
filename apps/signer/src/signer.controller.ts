import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignerService } from './signer.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePutSignedUrlDto } from './dto/create-put-signed-url.dto';
import { CreateGetSignedUrlDto } from './dto/create-get-signed-url.dto';

@Controller()
export class SignerController {
  constructor(private readonly signerService: SignerService) {}

  @MessagePattern('generate_put_signed_url')
  @UsePipes(new ValidationPipe())
  async generatePutSignedUrl(@Payload() data: CreatePutSignedUrlDto) {
    return this.signerService.generatePutSignedUrl(data);
  }

  @MessagePattern('generate_get_signed_url')
  @UsePipes(new ValidationPipe())
  async generateGetSignedUrl(@Payload() data: CreateGetSignedUrlDto) {
    return this.signerService.generateGetSignedUrl(data);
  }
}
