import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto'
import { writeFileSync } from 'fs';


@Injectable()
export class UploadServiceService {
    async uploadFile(file: Express.Multer.File) {
        const filename = `${randomUUID()}.pdf`;
        const path = `./uploads/${filename}`;
      
        writeFileSync(path, file.buffer);
      
        return { message: 'Arquivo salvo localmente', path };
      }
}
