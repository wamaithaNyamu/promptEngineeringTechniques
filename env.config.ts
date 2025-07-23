// load environment variables
import dotenv from 'dotenv';
dotenv.config();
export const geminiAPIKey = process.env.GEMINI_API_KEY ||  (() => { throw new Error('GEMINI_API_KEY is not defined in the .env file') })();