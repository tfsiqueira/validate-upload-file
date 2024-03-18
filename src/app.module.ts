import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UploadFilesModule } from './upload-files/upload-files.module.js';

@Module({
  imports: [UploadFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
