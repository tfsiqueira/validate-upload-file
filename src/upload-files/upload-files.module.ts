import { Module } from '@nestjs/common';
import { UploadController } from './upload-controller/upload-controller.controller.js';
import { UploadServiceService } from './upload-service/upload-service.service.js';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      limits: { fileSize: 10 * 1024 * 1024 }, // Definir tamanho máx do arquivo e.g 10 mb
    }),
  ],
  controllers: [UploadController],
  providers: [UploadServiceService]
})
export class UploadFilesModule {}
