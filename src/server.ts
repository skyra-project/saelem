import tabs from '@lib/defaultPlaygroundTabs';
import HoroscopeResolver from '@lib/resolver';
import days from '@utils/days';
import sunsigns from '@utils/sunsigns';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import type { GraphQLSchema } from 'graphql';
import { buildSchemaSync, registerEnumType } from 'type-graphql';

export const buildGqlSchema = (): GraphQLSchema => {
	registerEnumType(sunsigns, {
		name: 'Sunsigns',
		description: 'The supported sun signs'
	});

	registerEnumType(days, {
		name: 'Days',
		description: 'The supported day offsets'
	});

	return buildSchemaSync({
		resolvers: [HoroscopeResolver],
		dateScalarMode: 'timestamp'
	});
};

const gqlServer = (): ReturnType<typeof express> => {
	const schema = buildGqlSchema();
	const app = express();
	const apolloServer = new ApolloServer({
		schema,
		introspection: true,
		playground: {
			endpoint: '/api',
			settings: {
				'editor.theme': 'dark',
				'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, Courier New, monospace',
				'editor.reuseHeaders': true
			},
			tabs
		}
	});

	apolloServer.applyMiddleware({ app, path: '/', cors: true });

	return app;
};

export default gqlServer;
