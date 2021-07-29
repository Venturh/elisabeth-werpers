import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** An ISO 8601-encoded datetime */
	ISO8601DateTime: any;
	JsonScalar: any;
};

export type Alternate = {
	fullSlug: Scalars['String'];
	id: Scalars['Int'];
	isFolder?: Maybe<Scalars['Boolean']>;
	name: Scalars['String'];
	parentId?: Maybe<Scalars['Int']>;
	published: Scalars['Boolean'];
	slug: Scalars['String'];
};

export type Asset = {
	alt?: Maybe<Scalars['String']>;
	copyright?: Maybe<Scalars['String']>;
	filename: Scalars['String'];
	focus?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['Int']>;
	name?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

export type ContentItem = {
	alternates?: Maybe<Array<Maybe<Alternate>>>;
	content?: Maybe<Scalars['JsonScalar']>;
	content_string?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['String']>;
	default_full_slug?: Maybe<Scalars['String']>;
	first_published_at?: Maybe<Scalars['String']>;
	full_slug?: Maybe<Scalars['String']>;
	group_id?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['Int']>;
	is_startpage?: Maybe<Scalars['Boolean']>;
	lang?: Maybe<Scalars['String']>;
	meta_data?: Maybe<Scalars['JsonScalar']>;
	name?: Maybe<Scalars['String']>;
	parent_id?: Maybe<Scalars['Int']>;
	path?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['Int']>;
	published_at?: Maybe<Scalars['String']>;
	release_id?: Maybe<Scalars['Int']>;
	slug?: Maybe<Scalars['String']>;
	sort_by_date?: Maybe<Scalars['String']>;
	tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
	translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
	uuid?: Maybe<Scalars['String']>;
};

export type ContentItems = {
	items?: Maybe<Array<Maybe<ContentItem>>>;
	total?: Maybe<Scalars['Int']>;
};

export type Datasource = {
	id: Scalars['Int'];
	name: Scalars['String'];
	slug: Scalars['String'];
};

export type DatasourceEntries = {
	items: Array<DatasourceEntry>;
	total: Scalars['Int'];
};

export type DatasourceEntry = {
	dimensionValue?: Maybe<Scalars['String']>;
	id: Scalars['Int'];
	name: Scalars['String'];
	value: Scalars['String'];
};

export type Datasources = {
	items: Array<Datasource>;
};

export type ExhibitComponent = {
	_editable?: Maybe<Scalars['String']>;
	_uid?: Maybe<Scalars['String']>;
	artist?: Maybe<Scalars['String']>;
	component?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	dimension?: Maybe<Scalars['String']>;
	exhibition?: Maybe<Array<Maybe<Story>>>;
	image?: Maybe<Asset>;
	images?: Maybe<Array<Maybe<Asset>>>;
	title?: Maybe<Scalars['String']>;
	year?: Maybe<Scalars['String']>;
};

export type ExhibitComponentExhibitionArgs = {
	fields?: Maybe<Array<Maybe<Scalars['String']>>>;
	language?: Maybe<Scalars['String']>;
};

export type ExhibitFilterQuery = {
	title?: Maybe<FilterQueryOperations>;
	exhibition?: Maybe<FilterQueryOperations>;
	artist?: Maybe<FilterQueryOperations>;
	dimension?: Maybe<FilterQueryOperations>;
	year?: Maybe<FilterQueryOperations>;
};

export type ExhibitItem = {
	alternates?: Maybe<Array<Maybe<Alternate>>>;
	content?: Maybe<ExhibitComponent>;
	created_at?: Maybe<Scalars['String']>;
	default_full_slug?: Maybe<Scalars['String']>;
	first_published_at?: Maybe<Scalars['String']>;
	full_slug?: Maybe<Scalars['String']>;
	group_id?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['Int']>;
	is_startpage?: Maybe<Scalars['Boolean']>;
	lang?: Maybe<Scalars['String']>;
	meta_data?: Maybe<Scalars['JsonScalar']>;
	name?: Maybe<Scalars['String']>;
	parent_id?: Maybe<Scalars['Int']>;
	path?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['Int']>;
	published_at?: Maybe<Scalars['String']>;
	release_id?: Maybe<Scalars['Int']>;
	slug?: Maybe<Scalars['String']>;
	sort_by_date?: Maybe<Scalars['String']>;
	tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
	translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
	uuid?: Maybe<Scalars['String']>;
};

export type ExhibitItems = {
	items?: Maybe<Array<Maybe<ExhibitItem>>>;
	total?: Maybe<Scalars['Int']>;
};

export type ExhibitionComponent = {
	_editable?: Maybe<Scalars['String']>;
	_uid?: Maybe<Scalars['String']>;
	artist?: Maybe<Scalars['String']>;
	component?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	exhibits?: Maybe<Array<Maybe<Story>>>;
	image?: Maybe<Asset>;
	images?: Maybe<Array<Maybe<Asset>>>;
	time?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	year?: Maybe<Scalars['String']>;
};

export type ExhibitionComponentExhibitsArgs = {
	fields?: Maybe<Array<Maybe<Scalars['String']>>>;
	language?: Maybe<Scalars['String']>;
};

export type ExhibitionFilterQuery = {
	title?: Maybe<FilterQueryOperations>;
	exhibits?: Maybe<FilterQueryOperations>;
	artist?: Maybe<FilterQueryOperations>;
	time?: Maybe<FilterQueryOperations>;
	year?: Maybe<FilterQueryOperations>;
};

export type ExhibitionItem = {
	alternates?: Maybe<Array<Maybe<Alternate>>>;
	content?: Maybe<ExhibitionComponent>;
	created_at?: Maybe<Scalars['String']>;
	default_full_slug?: Maybe<Scalars['String']>;
	first_published_at?: Maybe<Scalars['String']>;
	full_slug?: Maybe<Scalars['String']>;
	group_id?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['Int']>;
	is_startpage?: Maybe<Scalars['Boolean']>;
	lang?: Maybe<Scalars['String']>;
	meta_data?: Maybe<Scalars['JsonScalar']>;
	name?: Maybe<Scalars['String']>;
	parent_id?: Maybe<Scalars['Int']>;
	path?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['Int']>;
	published_at?: Maybe<Scalars['String']>;
	release_id?: Maybe<Scalars['Int']>;
	slug?: Maybe<Scalars['String']>;
	sort_by_date?: Maybe<Scalars['String']>;
	tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
	translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
	uuid?: Maybe<Scalars['String']>;
};

export type ExhibitionItems = {
	items?: Maybe<Array<Maybe<ExhibitionItem>>>;
	total?: Maybe<Scalars['Int']>;
};

export type FilterQueryOperations = {
	/** Matches exactly one value */
	in?: Maybe<Scalars['String']>;
	/** Matches all without the given value */
	not_in?: Maybe<Scalars['String']>;
	/** Matches exactly one value with a wildcard search using * */
	like?: Maybe<Scalars['String']>;
	/** Matches all without the given value */
	not_like?: Maybe<Scalars['String']>;
	/** Matches any value of given array */
	in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Must match all values of given array */
	all_in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
	gt_date?: Maybe<Scalars['ISO8601DateTime']>;
	/** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
	lt_date?: Maybe<Scalars['ISO8601DateTime']>;
	/** Greater than integer value */
	gt_int?: Maybe<Scalars['Int']>;
	/** Less than integer value */
	lt_int?: Maybe<Scalars['Int']>;
	/** Matches exactly one integer value */
	in_int?: Maybe<Scalars['Int']>;
	/** Greater than float value */
	gt_float?: Maybe<Scalars['Float']>;
	/** Less than float value */
	lt_float?: Maybe<Scalars['Float']>;
};

export type LinkEntries = {
	items: Array<LinkEntry>;
};

export type LinkEntry = {
	id?: Maybe<Scalars['Int']>;
	isFolder?: Maybe<Scalars['Boolean']>;
	isStartpage?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	parentId?: Maybe<Scalars['Int']>;
	position?: Maybe<Scalars['Int']>;
	published?: Maybe<Scalars['Boolean']>;
	slug?: Maybe<Scalars['String']>;
	uuid?: Maybe<Scalars['String']>;
};

export type NewsComponent = {
	_editable?: Maybe<Scalars['String']>;
	_uid?: Maybe<Scalars['String']>;
	component?: Maybe<Scalars['String']>;
	date?: Maybe<Scalars['String']>;
	image?: Maybe<Asset>;
	text?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

export type NewsFilterQuery = {
	title?: Maybe<FilterQueryOperations>;
};

export type NewsItem = {
	alternates?: Maybe<Array<Maybe<Alternate>>>;
	content?: Maybe<NewsComponent>;
	created_at?: Maybe<Scalars['String']>;
	default_full_slug?: Maybe<Scalars['String']>;
	first_published_at?: Maybe<Scalars['String']>;
	full_slug?: Maybe<Scalars['String']>;
	group_id?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['Int']>;
	is_startpage?: Maybe<Scalars['Boolean']>;
	lang?: Maybe<Scalars['String']>;
	meta_data?: Maybe<Scalars['JsonScalar']>;
	name?: Maybe<Scalars['String']>;
	parent_id?: Maybe<Scalars['Int']>;
	path?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['Int']>;
	published_at?: Maybe<Scalars['String']>;
	release_id?: Maybe<Scalars['Int']>;
	slug?: Maybe<Scalars['String']>;
	sort_by_date?: Maybe<Scalars['String']>;
	tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
	translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
	uuid?: Maybe<Scalars['String']>;
};

export type NewsItems = {
	items?: Maybe<Array<Maybe<NewsItem>>>;
	total?: Maybe<Scalars['Int']>;
};

export type QueryType = {
	ContentNode?: Maybe<ContentItem>;
	ContentNodes?: Maybe<ContentItems>;
	DatasourceEntries?: Maybe<DatasourceEntries>;
	Datasources?: Maybe<Datasources>;
	ExhibitItem?: Maybe<ExhibitItem>;
	ExhibitItems?: Maybe<ExhibitItems>;
	ExhibitionItem?: Maybe<ExhibitionItem>;
	ExhibitionItems?: Maybe<ExhibitionItems>;
	Links?: Maybe<LinkEntries>;
	NewsItem?: Maybe<NewsItem>;
	NewsItems?: Maybe<NewsItems>;
	Space?: Maybe<Space>;
	Tags?: Maybe<Tags>;
};

export type QueryTypeContentNodeArgs = {
	id: Scalars['ID'];
	find_by?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['Int']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
};

export type QueryTypeContentNodesArgs = {
	first_published_at_gt?: Maybe<Scalars['String']>;
	first_published_at_lt?: Maybe<Scalars['String']>;
	published_at_gt?: Maybe<Scalars['String']>;
	published_at_lt?: Maybe<Scalars['String']>;
	starts_with?: Maybe<Scalars['String']>;
	by_slugs?: Maybe<Scalars['String']>;
	excluding_slugs?: Maybe<Scalars['String']>;
	fallback_lang?: Maybe<Scalars['String']>;
	by_uuids?: Maybe<Scalars['String']>;
	by_uuids_ordered?: Maybe<Scalars['String']>;
	excluding_ids?: Maybe<Scalars['String']>;
	excluding_fields?: Maybe<Scalars['String']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['String']>;
	sort_by?: Maybe<Scalars['String']>;
	search_term?: Maybe<Scalars['String']>;
	is_startpage?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
	with_tag?: Maybe<Scalars['String']>;
	page?: Maybe<Scalars['Int']>;
	per_page?: Maybe<Scalars['Int']>;
	filter_query?: Maybe<Scalars['JsonScalar']>;
};

export type QueryTypeDatasourceEntriesArgs = {
	datasource?: Maybe<Scalars['String']>;
	dimension?: Maybe<Scalars['String']>;
	page?: Maybe<Scalars['Int']>;
	per_page?: Maybe<Scalars['Int']>;
};

export type QueryTypeDatasourcesArgs = {
	search?: Maybe<Scalars['String']>;
	by_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryTypeExhibitItemArgs = {
	id: Scalars['ID'];
	find_by?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['Int']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
};

export type QueryTypeExhibitItemsArgs = {
	first_published_at_gt?: Maybe<Scalars['String']>;
	first_published_at_lt?: Maybe<Scalars['String']>;
	published_at_gt?: Maybe<Scalars['String']>;
	published_at_lt?: Maybe<Scalars['String']>;
	starts_with?: Maybe<Scalars['String']>;
	by_slugs?: Maybe<Scalars['String']>;
	excluding_slugs?: Maybe<Scalars['String']>;
	fallback_lang?: Maybe<Scalars['String']>;
	by_uuids?: Maybe<Scalars['String']>;
	by_uuids_ordered?: Maybe<Scalars['String']>;
	excluding_ids?: Maybe<Scalars['String']>;
	excluding_fields?: Maybe<Scalars['String']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['String']>;
	sort_by?: Maybe<Scalars['String']>;
	search_term?: Maybe<Scalars['String']>;
	is_startpage?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
	with_tag?: Maybe<Scalars['String']>;
	page?: Maybe<Scalars['Int']>;
	per_page?: Maybe<Scalars['Int']>;
	filter_query?: Maybe<Scalars['JsonScalar']>;
	filter_query_v2?: Maybe<ExhibitFilterQuery>;
};

export type QueryTypeExhibitionItemArgs = {
	id: Scalars['ID'];
	find_by?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['Int']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
};

export type QueryTypeExhibitionItemsArgs = {
	first_published_at_gt?: Maybe<Scalars['String']>;
	first_published_at_lt?: Maybe<Scalars['String']>;
	published_at_gt?: Maybe<Scalars['String']>;
	published_at_lt?: Maybe<Scalars['String']>;
	starts_with?: Maybe<Scalars['String']>;
	by_slugs?: Maybe<Scalars['String']>;
	excluding_slugs?: Maybe<Scalars['String']>;
	fallback_lang?: Maybe<Scalars['String']>;
	by_uuids?: Maybe<Scalars['String']>;
	by_uuids_ordered?: Maybe<Scalars['String']>;
	excluding_ids?: Maybe<Scalars['String']>;
	excluding_fields?: Maybe<Scalars['String']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['String']>;
	sort_by?: Maybe<Scalars['String']>;
	search_term?: Maybe<Scalars['String']>;
	is_startpage?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
	with_tag?: Maybe<Scalars['String']>;
	page?: Maybe<Scalars['Int']>;
	per_page?: Maybe<Scalars['Int']>;
	filter_query?: Maybe<Scalars['JsonScalar']>;
	filter_query_v2?: Maybe<ExhibitionFilterQuery>;
};

export type QueryTypeLinksArgs = {
	starts_with?: Maybe<Scalars['String']>;
	paginated?: Maybe<Scalars['Boolean']>;
};

export type QueryTypeNewsItemArgs = {
	id: Scalars['ID'];
	find_by?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['Int']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
};

export type QueryTypeNewsItemsArgs = {
	first_published_at_gt?: Maybe<Scalars['String']>;
	first_published_at_lt?: Maybe<Scalars['String']>;
	published_at_gt?: Maybe<Scalars['String']>;
	published_at_lt?: Maybe<Scalars['String']>;
	starts_with?: Maybe<Scalars['String']>;
	by_slugs?: Maybe<Scalars['String']>;
	excluding_slugs?: Maybe<Scalars['String']>;
	fallback_lang?: Maybe<Scalars['String']>;
	by_uuids?: Maybe<Scalars['String']>;
	by_uuids_ordered?: Maybe<Scalars['String']>;
	excluding_ids?: Maybe<Scalars['String']>;
	excluding_fields?: Maybe<Scalars['String']>;
	resolve_links?: Maybe<Scalars['String']>;
	resolve_relations?: Maybe<Scalars['String']>;
	from_release?: Maybe<Scalars['String']>;
	sort_by?: Maybe<Scalars['String']>;
	search_term?: Maybe<Scalars['String']>;
	is_startpage?: Maybe<Scalars['String']>;
	language?: Maybe<Scalars['String']>;
	with_tag?: Maybe<Scalars['String']>;
	page?: Maybe<Scalars['Int']>;
	per_page?: Maybe<Scalars['Int']>;
	filter_query?: Maybe<Scalars['JsonScalar']>;
	filter_query_v2?: Maybe<NewsFilterQuery>;
};

export type QueryTypeTagsArgs = {
	starts_with?: Maybe<Scalars['String']>;
};

export type Space = {
	domain: Scalars['String'];
	id: Scalars['Int'];
	languageCodes: Array<Maybe<Scalars['String']>>;
	name: Scalars['String'];
	version: Scalars['Int'];
};

export type Story = {
	alternates?: Maybe<Array<Maybe<Alternate>>>;
	content?: Maybe<Scalars['JsonScalar']>;
	createdAt?: Maybe<Scalars['String']>;
	firstPublishedAt?: Maybe<Scalars['String']>;
	fullSlug?: Maybe<Scalars['String']>;
	groupId?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['Int']>;
	isStartpage?: Maybe<Scalars['Boolean']>;
	lang?: Maybe<Scalars['String']>;
	metaData?: Maybe<Scalars['JsonScalar']>;
	name?: Maybe<Scalars['String']>;
	parentId?: Maybe<Scalars['Int']>;
	path?: Maybe<Scalars['String']>;
	position?: Maybe<Scalars['Int']>;
	publishedAt?: Maybe<Scalars['String']>;
	releaseId?: Maybe<Scalars['Int']>;
	slug?: Maybe<Scalars['String']>;
	sortByDate?: Maybe<Scalars['String']>;
	tagList?: Maybe<Array<Maybe<Scalars['String']>>>;
	translatedSlugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
	uuid?: Maybe<Scalars['String']>;
};

export type Tag = {
	name: Scalars['String'];
	taggingsCount: Scalars['Int'];
};

export type Tags = {
	items: Array<Tag>;
};

export type TranslatedSlug = {
	lang: Scalars['String'];
	name?: Maybe<Scalars['String']>;
	path?: Maybe<Scalars['String']>;
};

export type ImageFragment = Pick<Asset, 'title' | 'alt' | 'filename' | 'id'>;

export type ExhebitionFragment = Pick<ExhibitionItem, 'slug' | 'full_slug'> & {
	content?: Maybe<
		Pick<
			ExhibitionComponent,
			'_uid' | 'title' | 'description' | 'time' | 'year' | 'artist'
		> & {
			image?: Maybe<ImageFragment>;
			images?: Maybe<Array<Maybe<ImageFragment>>>;
			exhibits?: Maybe<
				Array<Maybe<Pick<Story, 'content' | 'slug' | 'fullSlug' | 'createdAt'>>>
			>;
		}
	>;
};

export type AllExhibitionItemsQueryVariables = Exact<{
	language: Scalars['String'];
}>;

export type AllExhibitionItemsQuery = {
	ExhibitionItems?: Maybe<{ items?: Maybe<Array<Maybe<ExhebitionFragment>>> }>;
};

export type ExhebitionItemsBySlugQueryVariables = Exact<{
	slug: Scalars['String'];
	language: Scalars['String'];
}>;

export type ExhebitionItemsBySlugQuery = {
	ExhibitionItems?: Maybe<{ items?: Maybe<Array<Maybe<ExhebitionFragment>>> }>;
};

export type AllExhibitsItemsQueryVariables = Exact<{
	language: Scalars['String'];
}>;

export type AllExhibitsItemsQuery = {
	ExhibitItems?: Maybe<{
		items?: Maybe<
			Array<
				Maybe<
					Pick<ExhibitItem, 'slug' | 'full_slug' | 'id'> & {
						content?: Maybe<
							Pick<
								ExhibitComponent,
								'title' | 'description' | 'artist' | 'dimension' | 'year'
							> & {
								image?: Maybe<ImageFragment>;
								images?: Maybe<Array<Maybe<ImageFragment>>>;
								exhibition?: Maybe<
									Array<
										Maybe<
											Pick<Story, 'content' | 'slug' | 'fullSlug' | 'createdAt'>
										>
									>
								>;
							}
						>;
					}
				>
			>
		>;
	}>;
};

export type ExhebitItemsBySlugQueryVariables = Exact<{
	slug: Scalars['String'];
	language: Scalars['String'];
}>;

export type ExhebitItemsBySlugQuery = {
	ExhibitItems?: Maybe<{
		items?: Maybe<
			Array<
				Maybe<
					Pick<ExhibitItem, 'slug' | 'full_slug' | 'id'> & {
						content?: Maybe<
							Pick<
								ExhibitComponent,
								'title' | 'description' | 'artist' | 'dimension' | 'year'
							> & {
								image?: Maybe<ImageFragment>;
								images?: Maybe<Array<Maybe<ImageFragment>>>;
								exhibition?: Maybe<
									Array<
										Maybe<
											Pick<Story, 'content' | 'slug' | 'fullSlug' | 'createdAt'>
										>
									>
								>;
							}
						>;
					}
				>
			>
		>;
	}>;
};

export type LandingDataQueryVariables = Exact<{
	language: Scalars['String'];
}>;

export type LandingDataQuery = {
	ExhibitItems?: Maybe<{
		items?: Maybe<
			Array<
				Maybe<
					Pick<ExhibitItem, 'slug'> & {
						content?: Maybe<{ image?: Maybe<ImageFragment> }>;
					}
				>
			>
		>;
	}>;
	ExhibitionItems?: Maybe<{ items?: Maybe<Array<Maybe<ExhebitionFragment>>> }>;
};

export type NewsFragment = Pick<NewsItem, 'slug' | 'full_slug'> & {
	content?: Maybe<
		Pick<NewsComponent, 'title' | 'text' | 'date'> & {
			image?: Maybe<ImageFragment>;
		}
	>;
};

export type AllNewsItemsQueryVariables = Exact<{
	lang: Scalars['String'];
}>;

export type AllNewsItemsQuery = {
	NewsItems?: Maybe<{ items?: Maybe<Array<Maybe<NewsFragment>>> }>;
};

export type NewsItemsBySlugQueryVariables = Exact<{
	slug: Scalars['String'];
	lang: Scalars['String'];
}>;

export type NewsItemsBySlugQuery = {
	NewsItems?: Maybe<{ items?: Maybe<Array<Maybe<NewsFragment>>> }>;
};

export const ImageFragmentDoc = gql`
	fragment Image on Asset {
		title
		alt
		filename
		id
	}
`;
export const ExhebitionFragmentDoc = gql`
	fragment Exhebition on ExhibitionItem {
		slug
		full_slug
		content {
			_uid
			title
			description
			time
			year
			artist
			image {
				...Image
			}
			images {
				...Image
			}
			exhibits {
				content
				slug
				fullSlug
				createdAt
			}
		}
	}
	${ImageFragmentDoc}
`;
export const NewsFragmentDoc = gql`
	fragment News on NewsItem {
		slug
		full_slug
		content {
			title
			text
			date
			image {
				...Image
			}
		}
	}
	${ImageFragmentDoc}
`;
export const AllExhibitionItemsDocument = gql`
	query AllExhibitionItems($language: String!) {
		ExhibitionItems(starts_with: $language, sort_by: "created_at") {
			items {
				...Exhebition
			}
		}
	}
	${ExhebitionFragmentDoc}
`;

/**
 * __useAllExhibitionItemsQuery__
 *
 * To run a query within a React component, call `useAllExhibitionItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllExhibitionItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllExhibitionItemsQuery({
 *   variables: {
 *      language: // value for 'language'
 *   },
 * });
 */
export function useAllExhibitionItemsQuery(
	baseOptions: Apollo.QueryHookOptions<
		AllExhibitionItemsQuery,
		AllExhibitionItemsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		AllExhibitionItemsQuery,
		AllExhibitionItemsQueryVariables
	>(AllExhibitionItemsDocument, options);
}
export function useAllExhibitionItemsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllExhibitionItemsQuery,
		AllExhibitionItemsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		AllExhibitionItemsQuery,
		AllExhibitionItemsQueryVariables
	>(AllExhibitionItemsDocument, options);
}
export type AllExhibitionItemsQueryHookResult = ReturnType<
	typeof useAllExhibitionItemsQuery
>;
export type AllExhibitionItemsLazyQueryHookResult = ReturnType<
	typeof useAllExhibitionItemsLazyQuery
>;
export type AllExhibitionItemsQueryResult = Apollo.QueryResult<
	AllExhibitionItemsQuery,
	AllExhibitionItemsQueryVariables
>;
export const ExhebitionItemsBySlugDocument = gql`
	query ExhebitionItemsBySlug($slug: String!, $language: String!) {
		ExhibitionItems(by_slugs: $slug, starts_with: $language) {
			items {
				...Exhebition
			}
		}
	}
	${ExhebitionFragmentDoc}
`;

/**
 * __useExhebitionItemsBySlugQuery__
 *
 * To run a query within a React component, call `useExhebitionItemsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useExhebitionItemsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExhebitionItemsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useExhebitionItemsBySlugQuery(
	baseOptions: Apollo.QueryHookOptions<
		ExhebitionItemsBySlugQuery,
		ExhebitionItemsBySlugQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		ExhebitionItemsBySlugQuery,
		ExhebitionItemsBySlugQueryVariables
	>(ExhebitionItemsBySlugDocument, options);
}
export function useExhebitionItemsBySlugLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ExhebitionItemsBySlugQuery,
		ExhebitionItemsBySlugQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		ExhebitionItemsBySlugQuery,
		ExhebitionItemsBySlugQueryVariables
	>(ExhebitionItemsBySlugDocument, options);
}
export type ExhebitionItemsBySlugQueryHookResult = ReturnType<
	typeof useExhebitionItemsBySlugQuery
>;
export type ExhebitionItemsBySlugLazyQueryHookResult = ReturnType<
	typeof useExhebitionItemsBySlugLazyQuery
>;
export type ExhebitionItemsBySlugQueryResult = Apollo.QueryResult<
	ExhebitionItemsBySlugQuery,
	ExhebitionItemsBySlugQueryVariables
>;
export const AllExhibitsItemsDocument = gql`
	query AllExhibitsItems($language: String!) {
		ExhibitItems(starts_with: $language, sort_by: "created_at") {
			items {
				slug
				full_slug
				id
				content {
					title
					description
					artist
					dimension
					year
					image {
						...Image
					}
					images {
						...Image
					}
					exhibition {
						content
						slug
						fullSlug
						createdAt
					}
				}
			}
		}
	}
	${ImageFragmentDoc}
`;

/**
 * __useAllExhibitsItemsQuery__
 *
 * To run a query within a React component, call `useAllExhibitsItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllExhibitsItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllExhibitsItemsQuery({
 *   variables: {
 *      language: // value for 'language'
 *   },
 * });
 */
export function useAllExhibitsItemsQuery(
	baseOptions: Apollo.QueryHookOptions<
		AllExhibitsItemsQuery,
		AllExhibitsItemsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<AllExhibitsItemsQuery, AllExhibitsItemsQueryVariables>(
		AllExhibitsItemsDocument,
		options,
	);
}
export function useAllExhibitsItemsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllExhibitsItemsQuery,
		AllExhibitsItemsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		AllExhibitsItemsQuery,
		AllExhibitsItemsQueryVariables
	>(AllExhibitsItemsDocument, options);
}
export type AllExhibitsItemsQueryHookResult = ReturnType<
	typeof useAllExhibitsItemsQuery
>;
export type AllExhibitsItemsLazyQueryHookResult = ReturnType<
	typeof useAllExhibitsItemsLazyQuery
>;
export type AllExhibitsItemsQueryResult = Apollo.QueryResult<
	AllExhibitsItemsQuery,
	AllExhibitsItemsQueryVariables
>;
export const ExhebitItemsBySlugDocument = gql`
	query ExhebitItemsBySlug($slug: String!, $language: String!) {
		ExhibitItems(by_slugs: $slug, starts_with: $language) {
			items {
				slug
				full_slug
				id
				content {
					title
					description
					artist
					dimension
					year
					image {
						...Image
					}
					images {
						...Image
					}
					exhibition {
						content
						slug
						fullSlug
						createdAt
					}
				}
			}
		}
	}
	${ImageFragmentDoc}
`;

/**
 * __useExhebitItemsBySlugQuery__
 *
 * To run a query within a React component, call `useExhebitItemsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useExhebitItemsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExhebitItemsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      language: // value for 'language'
 *   },
 * });
 */
export function useExhebitItemsBySlugQuery(
	baseOptions: Apollo.QueryHookOptions<
		ExhebitItemsBySlugQuery,
		ExhebitItemsBySlugQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		ExhebitItemsBySlugQuery,
		ExhebitItemsBySlugQueryVariables
	>(ExhebitItemsBySlugDocument, options);
}
export function useExhebitItemsBySlugLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ExhebitItemsBySlugQuery,
		ExhebitItemsBySlugQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		ExhebitItemsBySlugQuery,
		ExhebitItemsBySlugQueryVariables
	>(ExhebitItemsBySlugDocument, options);
}
export type ExhebitItemsBySlugQueryHookResult = ReturnType<
	typeof useExhebitItemsBySlugQuery
>;
export type ExhebitItemsBySlugLazyQueryHookResult = ReturnType<
	typeof useExhebitItemsBySlugLazyQuery
>;
export type ExhebitItemsBySlugQueryResult = Apollo.QueryResult<
	ExhebitItemsBySlugQuery,
	ExhebitItemsBySlugQueryVariables
>;
export const LandingDataDocument = gql`
	query LandingData($language: String!) {
		ExhibitItems(
			starts_with: $language
			sort_by: "created_at"
			with_tag: "highlight"
		) {
			items {
				slug
				content {
					image {
						...Image
					}
				}
			}
		}
		ExhibitionItems(
			starts_with: $language
			with_tag: "highlight"
			sort_by: "updated_at"
		) {
			items {
				...Exhebition
			}
		}
	}
	${ImageFragmentDoc}
	${ExhebitionFragmentDoc}
`;

/**
 * __useLandingDataQuery__
 *
 * To run a query within a React component, call `useLandingDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useLandingDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLandingDataQuery({
 *   variables: {
 *      language: // value for 'language'
 *   },
 * });
 */
export function useLandingDataQuery(
	baseOptions: Apollo.QueryHookOptions<
		LandingDataQuery,
		LandingDataQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<LandingDataQuery, LandingDataQueryVariables>(
		LandingDataDocument,
		options,
	);
}
export function useLandingDataLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		LandingDataQuery,
		LandingDataQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<LandingDataQuery, LandingDataQueryVariables>(
		LandingDataDocument,
		options,
	);
}
export type LandingDataQueryHookResult = ReturnType<typeof useLandingDataQuery>;
export type LandingDataLazyQueryHookResult = ReturnType<
	typeof useLandingDataLazyQuery
>;
export type LandingDataQueryResult = Apollo.QueryResult<
	LandingDataQuery,
	LandingDataQueryVariables
>;
export const AllNewsItemsDocument = gql`
	query AllNewsItems($lang: String!) {
		NewsItems(starts_with: $lang, sort_by: "created_at") {
			items {
				...News
			}
		}
	}
	${NewsFragmentDoc}
`;

/**
 * __useAllNewsItemsQuery__
 *
 * To run a query within a React component, call `useAllNewsItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllNewsItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllNewsItemsQuery({
 *   variables: {
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useAllNewsItemsQuery(
	baseOptions: Apollo.QueryHookOptions<
		AllNewsItemsQuery,
		AllNewsItemsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<AllNewsItemsQuery, AllNewsItemsQueryVariables>(
		AllNewsItemsDocument,
		options,
	);
}
export function useAllNewsItemsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AllNewsItemsQuery,
		AllNewsItemsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<AllNewsItemsQuery, AllNewsItemsQueryVariables>(
		AllNewsItemsDocument,
		options,
	);
}
export type AllNewsItemsQueryHookResult = ReturnType<
	typeof useAllNewsItemsQuery
>;
export type AllNewsItemsLazyQueryHookResult = ReturnType<
	typeof useAllNewsItemsLazyQuery
>;
export type AllNewsItemsQueryResult = Apollo.QueryResult<
	AllNewsItemsQuery,
	AllNewsItemsQueryVariables
>;
export const NewsItemsBySlugDocument = gql`
	query NewsItemsBySlug($slug: String!, $lang: String!) {
		NewsItems(by_slugs: $slug, starts_with: $lang) {
			items {
				...News
			}
		}
	}
	${NewsFragmentDoc}
`;

/**
 * __useNewsItemsBySlugQuery__
 *
 * To run a query within a React component, call `useNewsItemsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsItemsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsItemsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useNewsItemsBySlugQuery(
	baseOptions: Apollo.QueryHookOptions<
		NewsItemsBySlugQuery,
		NewsItemsBySlugQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<NewsItemsBySlugQuery, NewsItemsBySlugQueryVariables>(
		NewsItemsBySlugDocument,
		options,
	);
}
export function useNewsItemsBySlugLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		NewsItemsBySlugQuery,
		NewsItemsBySlugQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		NewsItemsBySlugQuery,
		NewsItemsBySlugQueryVariables
	>(NewsItemsBySlugDocument, options);
}
export type NewsItemsBySlugQueryHookResult = ReturnType<
	typeof useNewsItemsBySlugQuery
>;
export type NewsItemsBySlugLazyQueryHookResult = ReturnType<
	typeof useNewsItemsBySlugLazyQuery
>;
export type NewsItemsBySlugQueryResult = Apollo.QueryResult<
	NewsItemsBySlugQuery,
	NewsItemsBySlugQueryVariables
>;
