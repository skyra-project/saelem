// Copyright (c) 2019 Favware. All rights reserved. MIT license.
// Source: https://github.com/favware/graphql-pokemon

import { buildGqlSchema } from '#root/server';
import type Days from '#utils/days';
import type Sunsigns from '#utils/sunsigns';
import { graphql, GraphQLSchema } from 'graphql';

// eslint-disable-next-line @typescript-eslint/init-declarations
let schema: GraphQLSchema;

export const gCall = async <V = QueryGetHoroscopeArgs>({ source, variableValues }: GCallOptions<V>) => {
	if (!schema) schema = await buildGqlSchema();

	return graphql({
		schema,
		source,
		variableValues
	});
};

export const formatResponse = (data: unknown) => JSON.parse(JSON.stringify(data));

/**
 * Fake GraphQL tag that just returns everything passed in as a single combined string
 * @remark used to trick the GraphQL parser into treating some code as GraphQL parseable data for syntax checking
 * @param gqlData data to pass off as GraphQL code
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function gql(...args: any[]): string {
	return args[0].reduce((acc: string, str: string, idx: number) => {
		acc += str;
		if (Reflect.has(args, idx + 1)) acc += args[idx + 1];
		return acc;
	}, '');
}

interface QueryGetHoroscopeArgs {
	sunsign: typeof Sunsigns;
	day?: typeof Days | null;
}

interface GCallOptions<V> {
	source: string;
	variableValues?: V | null;
}

export interface Query {
	/** Gets the horoscope for a given sunsign. Optionally you can pass one of "yesterday", "today" or "tomorrow" to get the horoscope for that relative day. Day defaults to "today" */
	readonly getHoroscope: HoroscopeEntry;
}

/** The horoscope data on a specific star sign */
export interface HoroscopeEntry {
	/** The date for the prediction in milliseconds since UNIX epoch */
	readonly date: unknown;
	/** The horoscope prediction */
	readonly prediction: string;
	/** The intensity of the prediction */
	readonly intensity: string;
	/** The mood for the prediction */
	readonly mood: string;
	/** Keywords for this prediction */
	readonly keywords: readonly string[];
	/** The rating for the prediction, this is a number between 0 and 5 inclusive */
	readonly rating: number;
}

export interface DataResponse<K extends keyof Query> {
	data: Record<K, Query[K]>;
}
