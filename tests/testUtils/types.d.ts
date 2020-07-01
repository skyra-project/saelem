import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
	DateTime: any;
};

export type Query = {
	readonly __typename?: 'Query';
	/** Gets the horoscope for a given sunsign. Optionally you can pass one of "yesterday", "today" or "tomorrow" to get the horoscope for that relative day. Day defaults to "today" */
	readonly getHoroscope: HoroscopeEntry;
};

export type QueryGetHoroscopeArgs = {
	sunsign: Sunsigns;
	day?: Maybe<Days>;
};

/** The horoscope data on a specific star sign */
export type HoroscopeEntry = {
	readonly __typename?: 'HoroscopeEntry';
	/** The date for the prediction in milliseconds since UNIX epoch */
	readonly date: Scalars['DateTime'];
	/** The horoscope prediction */
	readonly prediction: Scalars['String'];
	/** The intensity of the prediction */
	readonly intensity: Scalars['String'];
	/** The mood for the prediction */
	readonly mood: Scalars['String'];
	/** Keywords for this prediction */
	readonly keywords: ReadonlyArray<Scalars['String']>;
	/** The rating for the prediction, this is a number between 0 and 5 inclusive */
	readonly rating: Scalars['Int'];
};

/** The supported sun signs */
export const enum Sunsigns {
	Aries = 'aries',
	Taurus = 'taurus',
	Gemini = 'gemini',
	Cancer = 'cancer',
	Leo = 'leo',
	Virgo = 'virgo',
	Libra = 'libra',
	Scorpio = 'scorpio',
	Sagittarius = 'sagittarius',
	Capricorn = 'capricorn',
	Aquarius = 'aquarius',
	Pisces = 'pisces'
}

/** The supported day offsets */
export const enum Days {
	Yesterday = 'yesterday',
	Today = 'today',
	Tomorrow = 'tomorrow'
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
	resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Query: ResolverTypeWrapper<{}>;
	HoroscopeEntry: ResolverTypeWrapper<HoroscopeEntry>;
	String: ResolverTypeWrapper<Scalars['String']>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
	Sunsigns: Sunsigns;
	Days: Days;
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Query: {};
	HoroscopeEntry: HoroscopeEntry;
	String: Scalars['String'];
	Int: Scalars['Int'];
	DateTime: Scalars['DateTime'];
	Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
	getHoroscope?: Resolver<ResolversTypes['HoroscopeEntry'], ParentType, ContextType, RequireFields<QueryGetHoroscopeArgs, 'sunsign' | 'day'>>;
};

export type HoroscopeEntryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['HoroscopeEntry'] = ResolversParentTypes['HoroscopeEntry']
> = {
	date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	prediction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	intensity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	mood?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	keywords?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
	rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
	name: 'DateTime';
}

export type Resolvers<ContextType = any> = {
	Query?: QueryResolvers<ContextType>;
	HoroscopeEntry?: HoroscopeEntryResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export interface DataResponse<K extends keyof Omit<Query, '__typename'>> {
	data: Record<K, Omit<Query[K], '__typename'>>;
}