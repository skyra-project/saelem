import tabs from '#lib/defaultPlaygroundTabs';
import HoroscopeResolver from '#lib/resolver';
import days from '#utils/days';
import sunsigns from '#utils/sunsigns';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-koa';
import type { GraphQLSchema } from 'graphql';
import Koa from 'koa';
import { buildSchema, registerEnumType } from 'type-graphql';

export const buildGqlSchema = async (): Promise<GraphQLSchema> => {
	registerEnumType(sunsigns, {
		name: 'Sunsigns',
		description: 'The supported sun signs'
	});

	registerEnumType(days, {
		name: 'Days',
		description: 'The supported day offsets'
	});

	return buildSchema({
		resolvers: [HoroscopeResolver],
		dateScalarMode: 'timestamp'
	});
};

const gqlServer = async (): Promise<Koa<Koa.DefaultState, Koa.DefaultContext>> => {
	const schema = await buildGqlSchema();
	const app = new Koa();
	const apolloServer = new ApolloServer({
		schema,
		introspection: true,
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground({
				settings: {
					'editor.theme': 'dark',
					'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, Courier New, monospace',
					'editor.reuseHeaders': true
				},
				tabs
			})
		]
	});

	await apolloServer.start();
	apolloServer.applyMiddleware({ app, path: '/', cors: true });

	return app;
};

export default gqlServer;
