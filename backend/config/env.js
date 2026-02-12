import dotnev from "dotenv";
dotnev.config();

export const MONGODB_URL = process.env.MONGODB_URL;
export const SECRET_KEY = process.env.SECRET_KEY;
export const SMTP_PASS = process.env.SMTP_PASS;
export const SMTP_EMAIL = process.env.SMTP_EMAIL;
export const FRONTEND_URL = process.env.FRONTEND_URL;
