import { Module } from '@nestjs/common';
import { SignerController } from './signer.controller';
import { SignerService } from './signer.service';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@app/common';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        ACCESS_KEY: Joi.string().required(),
        SECRET_KEY: Joi.string().required(),
        BUCKET_NAME: Joi.string().required(),
        REGION: Joi.string().required(),
      }),
    }),
  ],
  controllers: [SignerController],
  providers: [SignerService],
})
export class SignerModule {}
