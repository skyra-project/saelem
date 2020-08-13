import type sunsigns from '@utils/sunsigns';

export const enum RedisClientEvents {
	Message = 'message',
	PMessage = 'pmessage',
	Subscribe = 'subscribe',
	PSubscribe = 'psubscribe',
	Error = 'error'
}

export interface RedisEntry {
	date: Date;
	prediction: string;
	intensity: string;
	mood: string;
	keywords: string[];
	rating: number;
}

export type RedisStructure = { [key in keyof typeof sunsigns]?: RedisEntry };
