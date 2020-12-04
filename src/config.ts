export const REDIS_DATABASE = Number(process.env.SAELEM_REDIS_DATABASE) || 0;
export const REDIS_HOST = process.env.SAELEM_REDIS_HOST || 'localhost';
export const REDIS_PASSWORD = process.env.SAELEM_REDIS_PASSWORD || 'redis';
export const REDIS_PORT = Number(process.env.SAELEM_REDIS_PORT) || 8287;
