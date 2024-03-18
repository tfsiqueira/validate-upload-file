import { fileTypeFromBuffer } from 'file-type';

export async function validatePDF(file) {
  const fileType = await fileTypeFromBuffer(file.buffer);
  if (fileType?.mime !== 'application/pdf') {
    throw new Error('O arquivo não é um PDF.');
  }
  // Processamento adicional para um arquivo validado como PDF
}