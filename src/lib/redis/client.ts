import { REDIS_DATABASE, REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from '@root/config';
import redis from 'redis';
import { promisify } from 'util';
import { RedisClientEvents } from './RedisTypes';

const redisClient = redis.createClient({
	db: REDIS_DATABASE,
	host: REDIS_HOST,
	password: REDIS_PASSWORD,
	port: REDIS_PORT
});

redisClient.on(RedisClientEvents.Error, console.error);

const getRedisCache = promisify(redisClient.get).bind(redisClient);

export { getRedisCache, redisClient };
