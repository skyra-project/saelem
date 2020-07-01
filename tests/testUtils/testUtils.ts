// Copyright (c) 2019 Favware. All rights reserved. MIT license.
// Source: https://github.com/favware/graphql-pokemon

import { graphql, GraphQLSchema } from 'graphql';
import { buildGqlSchema } from '../../src/server';
import { Maybe, QueryGetHoroscopeArgs } from './types';

interface GCallOptions<V> {
	source: string;
	variableValues?: Maybe<V>;
}

let schema: GraphQLSchema;

export const gCall = async <V = QueryGetHoroscopeArgs>({ source, variableValues }: GCallOptions<V>) => {
	if (!schema) schema = buildGqlSchema();

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
