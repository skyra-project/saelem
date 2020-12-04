import { REDIS_DATABASE, REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from '#root/config';
import Redis from 'ioredis';
import { RedisClientEvents } from './RedisTypes';

const redisClient = new Redis({
	db: REDIS_DATABASE,
	host: REDIS_HOST,
	password: REDIS_PASSWORD,
	port: REDIS_PORT
});

redisClient.on(RedisClientEvents.Error, console.error);

export { redisClient };
