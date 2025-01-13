import { promises as fs } from 'fs';
import https from 'https';
import path from 'path';

const version = '4.8.69';
const workerUrl = `https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`;
const outputPath = path.join(process.cwd(), 'public', 'pdf.worker.js');

async function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(outputPath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });

      file.on('error', (err) => {
        fs.unlink(outputPath);
        reject(err);
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    console.log('Downloading PDF.js worker...');
    await downloadFile(workerUrl, outputPath);
    console.log('PDF.js worker downloaded successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main(); 