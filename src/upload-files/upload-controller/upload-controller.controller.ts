import { BadRequestException, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadServiceService } from '../upload-service/upload-service.service.js';
import { validatePDF } from '../../utils/validate-pdf.utils.js';

@Controller('uploads')
export class UploadController {
  constructor(private readonly uploadService: UploadServiceService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      await validatePDF(file.buffer);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
    const uploadResult = await this.uploadService.uploadFile(file);
    return { url: uploadResult.path };
  }
}