import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4000,
    mongodbURL: process.env.MONGODB_URI || "mongodb+srv://user:api12345@cluster0.pcisi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    accessKeyId: process.env.accessKeyId || 'AKIAVHJK4GQ6BBLS6M62',
    secretAccessKey: process.env.secretAccessKey || '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'
}