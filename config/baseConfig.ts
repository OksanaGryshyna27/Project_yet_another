import { config as dotenvConfig } from "dotenv";
import { join } from 'path';

dotenvConfig({ path: join(process.cwd(), '.env') });

export const BASE_URL: string = process.env.BASE_URL ?? 'https://practicesoftwaretesting.com';
export const API_BASE_URL: string = process.env.API_BASE_URL ?? 'https://api.practicesoftwaretesting.com';

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }

  return value;
}

export const USER_EMAIL: string = requireEnv('USER_EMAIL');
export const USER_PASSWORD: string = requireEnv('USER_PASSWORD');