import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname+'/../../../.env.local' });

export const db = {
  NAME: process.env.DB_NAME,
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASS,
}