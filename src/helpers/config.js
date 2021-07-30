import dotenv from 'dotenv';
dotenv.config();

export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/rveapi'
}