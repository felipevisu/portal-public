// THIS FILE IS GENERATED WITH `pnpm generate`
import "graphql/language/ast";
import * as Scalar from '../scalars';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: string; output: string; }
  Decimal: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
  JSONString: { input: string; output: string; }
  Upload: { input: any; output: any; }
};

export type ApproveDocumentFile = {
  __typename?: 'ApproveDocumentFile';
  documentFile?: Maybe<DocumentFile>;
  errors: Array<Error>;
};

export type Attribute = Node & {
  __typename?: 'Attribute';
  choices?: Maybe<AttributeValueCountableConnection>;
  documents: DocumentCountableConnection;
  entityType?: Maybe<AttributeEntityTypeEnum>;
  entries: EntryCountableConnection;
  filterableInDashboard: Scalars['Boolean']['output'];
  filterableInWebsite: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  inputType?: Maybe<AttributeInputTypeEnum>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AttributeTypeEnum>;
  valueRequired: Scalars['Boolean']['output'];
  visibleInWebsite: Scalars['Boolean']['output'];
  withChoices: Scalars['Boolean']['output'];
};


export type AttributeChoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeValueFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AttributeChoicesSortingInput>;
};


export type AttributeDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AttributeEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum AttributeChoicesSortField {
  /** Sort attribute choice by name. */
  NAME = 'NAME',
  /** Sort attribute choice by slug. */
  SLUG = 'SLUG'
}

export type AttributeChoicesSortingInput = {
  direction: OrderDirection;
  /** Sort attribute choices by the selected field. */
  field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection';
  edges: Array<AttributeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Attribute;
};

export type AttributeCreate = {
  __typename?: 'AttributeCreate';
  attribute?: Maybe<Attribute>;
  errors: Array<Error>;
};

export type AttributeCreateInput = {
  entityType?: InputMaybe<AttributeEntityTypeEnum>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  inputType?: InputMaybe<AttributeInputTypeEnum>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  type: AttributeTypeEnum;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  values?: InputMaybe<Array<AttributeValueCreateInput>>;
  visibleInWebsite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeDelete = {
  __typename?: 'AttributeDelete';
  attribute?: Maybe<Attribute>;
  errors: Array<Error>;
};

/** An enumeration. */
export enum AttributeEntityTypeEnum {
  PROVIDER = 'PROVIDER',
  VEHICLE = 'VEHICLE'
}

export type AttributeFilterInput = {
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<AttributeTypeEnum>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInWebsite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeInput = {
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<DateRangeInput>;
  dateTime?: InputMaybe<DateTimeRangeInput>;
  slug: Scalars['String']['input'];
  values?: InputMaybe<Array<Scalars['String']['input']>>;
  valuesRange?: InputMaybe<IntRangeInput>;
};

/** An enumeration. */
export enum AttributeInputTypeEnum {
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  DROPDOWN = 'DROPDOWN',
  FILE = 'FILE',
  MULTISELECT = 'MULTISELECT',
  PLAIN_TEXT = 'PLAIN_TEXT',
  REFERENCE = 'REFERENCE',
  SWATCH = 'SWATCH'
}

export enum AttributeSortField {
  /** Sort attributes by the filterable in dashboard flag */
  FILTERABLE_IN_DASHBOARD = 'FILTERABLE_IN_DASHBOARD',
  /** Sort attributes by the filterable in storefront flag */
  FILTERABLE_IN_WEBSITE = 'FILTERABLE_IN_WEBSITE',
  /** Sort attributes by name */
  NAME = 'NAME',
  /** Sort attributes by slug */
  SLUG = 'SLUG',
  /** Sort attributes by the value required flag */
  VALUE_REQUIRED = 'VALUE_REQUIRED',
  /** Sort attributes by visibility in the storefront */
  VISIBLE_IN_WEBSITE = 'VISIBLE_IN_WEBSITE'
}

export type AttributeSortingInput = {
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
};

/** An enumeration. */
export enum AttributeTypeEnum {
  DOCUMENT = 'DOCUMENT',
  PROVIDER = 'PROVIDER',
  VEHICLE = 'VEHICLE',
  VEHICLE_AND_PROVIDER = 'VEHICLE_AND_PROVIDER'
}

export type AttributeUpdate = {
  __typename?: 'AttributeUpdate';
  attribute?: Maybe<Attribute>;
  errors: Array<Error>;
};

export type AttributeUpdateInput = {
  addValues?: InputMaybe<Array<AttributeValueUpdateInput>>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  removeValues?: InputMaybe<Array<Scalars['ID']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInWebsite?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeValue = Node & {
  __typename?: 'AttributeValue';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  inputType?: Maybe<AttributeInputTypeEnum>;
  name?: Maybe<Scalars['String']['output']>;
  plainText?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type AttributeValueCountableConnection = {
  __typename?: 'AttributeValueCountableConnection';
  edges: Array<AttributeValueCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeValueCountableEdge = {
  __typename?: 'AttributeValueCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AttributeValue;
};

export type AttributeValueCreate = {
  __typename?: 'AttributeValueCreate';
  attribute?: Maybe<Attribute>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<Error>;
};

export type AttributeValueCreateInput = {
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  plainText?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueDelete = {
  __typename?: 'AttributeValueDelete';
  attribute?: Maybe<Attribute>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<Error>;
};

export type AttributeValueFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueInput = {
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  dropdown?: InputMaybe<AttributeValueSelectableTypeInput>;
  file?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  multiselect?: InputMaybe<Array<AttributeValueSelectableTypeInput>>;
  numeric?: InputMaybe<Scalars['String']['input']>;
  plainText?: InputMaybe<Scalars['String']['input']>;
  /** List of entity IDs that will be used as references. */
  references?: InputMaybe<Array<Scalars['ID']['input']>>;
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AttributeValueSelectableTypeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate';
  attribute?: Maybe<Attribute>;
  attributeValue?: Maybe<AttributeValue>;
  errors: Array<Error>;
};

export type AttributeValueUpdateInput = {
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plainText?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type BulkItemError = {
  __typename?: 'BulkItemError';
  /** The error code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export type Category = Node & {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  totalEntries?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<EntryTypeEnum>;
};

/** Deletes categories. */
export type CategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<Error>;
};

export type CategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection';
  edges: Array<CategoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
};

export type CategoryCreate = {
  __typename?: 'CategoryCreate';
  category?: Maybe<Category>;
  errors: Array<Error>;
};

export type CategoryDelete = {
  __typename?: 'CategoryDelete';
  category?: Maybe<Category>;
  errors: Array<Error>;
};

export type CategoryFilterInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EntryTypeEnum>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EntryTypeEnum>;
};

export enum CategorySortField {
  NAME = 'NAME'
}

export type CategorySortingInput = {
  direction: OrderDirection;
  /** Sort categories by the selected field. */
  field: CategorySortField;
};

export type CategoryUpdate = {
  __typename?: 'CategoryUpdate';
  category?: Maybe<Category>;
  errors: Array<Error>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ChannelActivate = {
  __typename?: 'ChannelActivate';
  channel?: Maybe<Channel>;
  errors: Array<Error>;
};

export type ChannelCreate = {
  __typename?: 'ChannelCreate';
  channel?: Maybe<Channel>;
  errors: Array<Error>;
};

export type ChannelDeactivate = {
  __typename?: 'ChannelDeactivate';
  channel?: Maybe<Channel>;
  errors: Array<Error>;
};

export type ChannelDelete = {
  __typename?: 'ChannelDelete';
  channel?: Maybe<Channel>;
  errors: Array<Error>;
};

export type ChannelInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type ChannelUpdate = {
  __typename?: 'ChannelUpdate';
  channel?: Maybe<Channel>;
  errors: Array<Error>;
};

export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  helpText?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type?: Maybe<ConfigurationTypeFieldEnum>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationItemInput = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

/** An enumeration. */
export enum ConfigurationTypeFieldEnum {
  BOOLEAN = 'BOOLEAN',
  MULTILINE = 'MULTILINE',
  OUTPUT = 'OUTPUT',
  PASSWORD = 'PASSWORD',
  SECRET = 'SECRET',
  SECRETMULTILINE = 'SECRETMULTILINE',
  STRING = 'STRING'
}

export type Consult = Node & {
  __typename?: 'Consult';
  created?: Maybe<Scalars['DateTime']['output']>;
  entry?: Maybe<Entry>;
  id: Scalars['ID']['output'];
  plugin?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSONString']['output']>;
};

export type ConsultDocument = {
  __typename?: 'ConsultDocument';
  entry?: Maybe<Entry>;
  errors: Array<Error>;
};

/** Create JWT token. */
export type CreateToken = {
  __typename?: 'CreateToken';
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']['output']>;
  errors: Array<Error>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type DateRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Deactivate all JWT tokens of the currently authenticated user. */
export type DeactivateAllUserTokens = {
  __typename?: 'DeactivateAllUserTokens';
  errors: Array<Error>;
};

export type Document = Node & {
  __typename?: 'Document';
  created?: Maybe<Scalars['DateTime']['output']>;
  defaultFile?: Maybe<DocumentFile>;
  description?: Maybe<Scalars['String']['output']>;
  entry?: Maybe<Entry>;
  /**
   *
   *
   * Requires one of the following permissions: MANAGE_EVENTS.
   */
  events?: Maybe<Array<Event>>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  expires?: Maybe<Scalars['Boolean']['output']>;
  /**
   *
   *
   * Requires one of the following permissions: MANAGE_DOCUMENTS.
   */
  files?: Maybe<Array<DocumentFile>>;
  id: Scalars['ID']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  loadType?: Maybe<DocumentLoadOptionsEnum>;
  name: Scalars['String']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
};

/** Deletes segments. */
export type DocumentBulkDelete = {
  __typename?: 'DocumentBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<Error>;
};

export type DocumentCountableConnection = {
  __typename?: 'DocumentCountableConnection';
  edges: Array<DocumentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DocumentCountableEdge = {
  __typename?: 'DocumentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Document;
};

export type DocumentCreate = {
  __typename?: 'DocumentCreate';
  document?: Maybe<Document>;
  errors: Array<Error>;
};

export type DocumentDelete = {
  __typename?: 'DocumentDelete';
  document?: Maybe<Document>;
  errors: Array<Error>;
};

export type DocumentFile = Node & {
  __typename?: 'DocumentFile';
  beginDate?: Maybe<Scalars['Date']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<Document>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  file?: Maybe<File>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  status?: Maybe<DocumentFileStatusEnum>;
  updated?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentFileDelete = {
  __typename?: 'DocumentFileDelete';
  documentFile?: Maybe<DocumentFile>;
  errors: Array<Error>;
};

/** An enumeration. */
export enum DocumentFileStatusEnum {
  APPROVED = 'APPROVED',
  REFUSED = 'REFUSED',
  WAITING = 'WAITING'
}

export type DocumentFilterInput = {
  beginDate?: InputMaybe<DateRangeInput>;
  expirationDate?: InputMaybe<DateRangeInput>;
  expires?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EntryTypeEnum>;
  waiting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentInput = {
  beginDate?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  entry?: InputMaybe<Scalars['ID']['input']>;
  expirationDate?: InputMaybe<Scalars['Date']['input']>;
  expires?: InputMaybe<Scalars['Boolean']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  loadType?: InputMaybe<DocumentLoadOptionsEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['ID']['input']>;
};

export type DocumentLoad = Node & {
  __typename?: 'DocumentLoad';
  document?: Maybe<Document>;
  documentFile?: Maybe<DocumentFile>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<DocumentLoadStatusEnum>;
};

/** An enumeration. */
export enum DocumentLoadOptionsEnum {
  CND = 'CND',
  CNDT = 'CNDT',
  CNEP = 'CNEP',
  EMPTY = 'EMPTY',
  FGTS = 'FGTS',
  JUCESP = 'JUCESP',
  MEI = 'MEI',
  SEFAZ_MG = 'SEFAZ_MG',
  SEFAZ_SP = 'SEFAZ_SP',
  TCU = 'TCU'
}

/** An enumeration. */
export enum DocumentLoadStatusEnum {
  ERROR = 'ERROR',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS'
}

export enum DocumentSortField {
  CREATED = 'CREATED'
}

export type DocumentSortingInput = {
  direction: OrderDirection;
  /** Sort documents by the selected field. */
  field: DocumentSortField;
};

export type DocumentUpdate = {
  __typename?: 'DocumentUpdate';
  document?: Maybe<Document>;
  errors: Array<Error>;
};

export type DocumentUpdateByEntry = {
  __typename?: 'DocumentUpdateByEntry';
  documentFile?: Maybe<DocumentFile>;
  errors: Array<Error>;
};

export type DocumentUpdateByEntryInput = {
  beginDate?: InputMaybe<Scalars['Date']['input']>;
  expirationDate?: InputMaybe<Scalars['Date']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
};

export type Entry = Node & {
  __typename?: 'Entry';
  attributes: Array<SelectedAttribute>;
  categories?: Maybe<Array<Category>>;
  channel?: Maybe<Scalars['String']['output']>;
  /**
   *
   *
   * Requires one of the following permissions: MANAGE_ENTRIES.
   */
  channelListings?: Maybe<Array<EntryChannelListing>>;
  consult?: Maybe<Array<Consult>>;
  created?: Maybe<Scalars['DateTime']['output']>;
  documentNumber?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<DocumentCountableConnection>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EntryTypeEnum>;
  updated?: Maybe<Scalars['DateTime']['output']>;
};


export type EntryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Deletes entries. */
export type EntryBulkDelete = {
  __typename?: 'EntryBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<Error>;
};

export type EntryChannelListing = Node & {
  __typename?: 'EntryChannelListing';
  channel: Channel;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
};

export type EntryChannelListingError = {
  __typename?: 'EntryChannelListingError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

export type EntryChannelListingUpdate = {
  __typename?: 'EntryChannelListingUpdate';
  entry?: Maybe<Entry>;
  errors: Array<EntryChannelListingError>;
};

export type EntryChannelListingUpdateInput = {
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  updateChannels?: InputMaybe<Array<PublishableChannelListingInput>>;
};

export type EntryCountableConnection = {
  __typename?: 'EntryCountableConnection';
  edges: Array<EntryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EntryCountableEdge = {
  __typename?: 'EntryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Entry;
};

export type EntryCreate = {
  __typename?: 'EntryCreate';
  entry?: Maybe<Entry>;
  errors: Array<EntryError>;
};

export type EntryDelete = {
  __typename?: 'EntryDelete';
  entry?: Maybe<Entry>;
  errors: Array<Error>;
};

export type EntryError = {
  __typename?: 'EntryError';
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']['output']>>;
};

export type EntryFilterInput = {
  attributes?: InputMaybe<Array<AttributeInput>>;
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  channel?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EntryTypeEnum>;
};

export type EntryInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  documentNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EntryTypeEnum>;
};

export enum EntrySortField {
  CREATED = 'CREATED',
  NAME = 'NAME',
  PUBLISHED = 'PUBLISHED',
  UPDATED = 'UPDATED'
}

export type EntrySortingInput = {
  direction: OrderDirection;
  /** Sort entries by the selected field. */
  field: EntrySortField;
};

/** An enumeration. */
export enum EntryTypeEnum {
  PROVIDER = 'PROVIDER',
  VEHICLE = 'VEHICLE'
}

export type EntryUpdate = {
  __typename?: 'EntryUpdate';
  entry?: Maybe<Entry>;
  errors: Array<EntryError>;
};

/** Represents an error in the input of a mutation. */
export type Error = {
  __typename?: 'Error';
  /** The error code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export type Event = Node & {
  __typename?: 'Event';
  date?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<Document>;
  documentName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<Scalars['JSONString']['output']>;
  /** Order event type. */
  type?: Maybe<EventTypesEnum>;
  user?: Maybe<User>;
  userEmail?: Maybe<Scalars['String']['output']>;
};

export type EventCountableConnection = {
  __typename?: 'EventCountableConnection';
  edges: Array<EventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type EventCountableEdge = {
  __typename?: 'EventCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Event;
};

/** An enumeration. */
export enum EventTypesEnum {
  DOCUMENT_APPROVED = 'DOCUMENT_APPROVED',
  DOCUMENT_CREATED = 'DOCUMENT_CREATED',
  DOCUMENT_DECLINED = 'DOCUMENT_DECLINED',
  DOCUMENT_DELETED = 'DOCUMENT_DELETED',
  DOCUMENT_LOADED_FAIL = 'DOCUMENT_LOADED_FAIL',
  DOCUMENT_LOADED_FROM_API = 'DOCUMENT_LOADED_FROM_API',
  DOCUMENT_RECEIVED = 'DOCUMENT_RECEIVED',
  DOCUMENT_REQUESTED = 'DOCUMENT_REQUESTED',
  DOCUMENT_UPDATED = 'DOCUMENT_UPDATED',
  ENTRY_CREATED = 'ENTRY_CREATED',
  ENTRY_DELETED = 'ENTRY_DELETED',
  ENTRY_UPDATED = 'ENTRY_UPDATED'
}

export type File = {
  __typename?: 'File';
  url: Scalars['String']['output'];
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

export type Investment = Node & {
  __typename?: 'Investment';
  id: Scalars['ID']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Item>>;
  month: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

/** Deletes segments. */
export type InvestmentBulkDelete = {
  __typename?: 'InvestmentBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<Error>;
};

export type InvestmentCountableConnection = {
  __typename?: 'InvestmentCountableConnection';
  edges: Array<InvestmentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type InvestmentCountableEdge = {
  __typename?: 'InvestmentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Investment;
};

export type InvestmentCreate = {
  __typename?: 'InvestmentCreate';
  errors: Array<Error>;
  investment?: Maybe<Investment>;
};

export type InvestmentDelete = {
  __typename?: 'InvestmentDelete';
  errors: Array<Error>;
  investment?: Maybe<Investment>;
};

export type InvestmentFilterInput = {
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type InvestmentInput = {
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<ItemCreateInput>>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export enum InvestmentSortField {
  CREATED = 'CREATED'
}

export type InvestmentSortingInput = {
  direction: OrderDirection;
  /** Sort investments by the selected field. */
  field: InvestmentSortField;
};

export type InvestmentUpdate = {
  __typename?: 'InvestmentUpdate';
  errors: Array<Error>;
  investment?: Maybe<Investment>;
};

export type InvestmentUpdateInput = {
  addItems?: InputMaybe<Array<ItemCreateInput>>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  removeItems?: InputMaybe<Array<Scalars['ID']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Item = Node & {
  __typename?: 'Item';
  id: Scalars['ID']['output'];
  investment?: Maybe<Investment>;
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['Decimal']['output']>;
};

export type ItemBulkCreate = {
  __typename?: 'ItemBulkCreate';
  errors: Array<BulkItemError>;
  items?: Maybe<Array<Maybe<Item>>>;
};

export type ItemBulkInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemCreate = {
  __typename?: 'ItemCreate';
  errors: Array<Error>;
  investment?: Maybe<Item>;
  item?: Maybe<Item>;
};

export type ItemCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type ItemDelete = {
  __typename?: 'ItemDelete';
  errors: Array<Error>;
  item?: Maybe<Item>;
};

export type ItemInput = {
  investment?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemUpdate = {
  __typename?: 'ItemUpdate';
  errors: Array<Error>;
  item?: Maybe<Item>;
};

export type LoadNewDocumentFromApi = {
  __typename?: 'LoadNewDocumentFromAPI';
  documentLoad?: Maybe<DocumentLoad>;
  errors: Array<Error>;
};

export type Mutation = {
  __typename?: 'Mutation';
  approveDocumentFile?: Maybe<ApproveDocumentFile>;
  attributeCreate?: Maybe<AttributeCreate>;
  attributeDelete?: Maybe<AttributeDelete>;
  attributeUpdate?: Maybe<AttributeUpdate>;
  attributeValueCreate?: Maybe<AttributeValueCreate>;
  attributeValueDelete?: Maybe<AttributeValueDelete>;
  attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  /** Deletes categories. */
  categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  categoryCreate?: Maybe<CategoryCreate>;
  categoryDelete?: Maybe<CategoryDelete>;
  categoryUpdate?: Maybe<CategoryUpdate>;
  channelActivate?: Maybe<ChannelActivate>;
  channelCreate?: Maybe<ChannelCreate>;
  channelDeactivate?: Maybe<ChannelDeactivate>;
  channelDelete?: Maybe<ChannelDelete>;
  channelUpdate?: Maybe<ChannelUpdate>;
  consultDocument?: Maybe<ConsultDocument>;
  /** Deletes segments. */
  documentBulkDelete?: Maybe<DocumentBulkDelete>;
  documentCreate?: Maybe<DocumentCreate>;
  documentDelete?: Maybe<DocumentDelete>;
  documentFileDelete?: Maybe<DocumentFileDelete>;
  documentUpdate?: Maybe<DocumentUpdate>;
  documentUpdateByEntry?: Maybe<DocumentUpdateByEntry>;
  /** Deletes entries. */
  entryBulkDelete?: Maybe<EntryBulkDelete>;
  entryChannelListingUpdate?: Maybe<EntryChannelListingUpdate>;
  entryCreate?: Maybe<EntryCreate>;
  entryDelete?: Maybe<EntryDelete>;
  entryUpdate?: Maybe<EntryUpdate>;
  /** Deletes segments. */
  investmentBulkDelete?: Maybe<InvestmentBulkDelete>;
  investmentCreate?: Maybe<InvestmentCreate>;
  investmentDelete?: Maybe<InvestmentDelete>;
  investmentUpdate?: Maybe<InvestmentUpdate>;
  itemBulkCreate?: Maybe<ItemBulkCreate>;
  itemCreate?: Maybe<ItemCreate>;
  itemDelete?: Maybe<ItemDelete>;
  itemUpdate?: Maybe<ItemUpdate>;
  loadNewDocumentFromApi?: Maybe<LoadNewDocumentFromApi>;
  passwordReset?: Maybe<SetPassword>;
  pluginUpdate?: Maybe<PluginUpdate>;
  refuseDocumentFile?: Maybe<RefuseDocumentFile>;
  requestNewDocument?: Maybe<RequestNewDocument>;
  requestPasswordReset?: Maybe<RequestPasswordReset>;
  restoreDocumentFile?: Maybe<RestoreDocumentFile>;
  /** Deletes sessions. */
  sessionBulkDelete?: Maybe<SessionBulkDelete>;
  sessionCreate?: Maybe<SessionCreate>;
  sessionDelete?: Maybe<SessionDelete>;
  sessionUpdate?: Maybe<SessionUpdate>;
  /** Create JWT token. */
  tokenCreate?: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
  tokenRefresh?: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify?: Maybe<VerifyToken>;
  /** Deactivate all JWT tokens of the currently authenticated user. */
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  validateToken?: Maybe<ValidateDocumentToken>;
};


export type MutationApproveDocumentFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAttributeUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: AttributeUpdateInput;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAttributeValueUpdateArgs = {
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input: AttributeValueUpdateInput;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
};


export type MutationCategoryDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCategoryUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: CategoryInput;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelCreateArgs = {
  input: ChannelInput;
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ChannelInput;
};


export type MutationConsultDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDocumentBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDocumentCreateArgs = {
  input: DocumentInput;
};


export type MutationDocumentDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDocumentFileDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDocumentUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: DocumentInput;
};


export type MutationDocumentUpdateByEntryArgs = {
  input?: InputMaybe<DocumentUpdateByEntryInput>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEntryBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationEntryChannelListingUpdateArgs = {
  id: Scalars['ID']['input'];
  input: EntryChannelListingUpdateInput;
};


export type MutationEntryCreateArgs = {
  input: EntryInput;
};


export type MutationEntryDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEntryUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: EntryInput;
};


export type MutationInvestmentBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationInvestmentCreateArgs = {
  input: InvestmentInput;
};


export type MutationInvestmentDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationInvestmentUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: InvestmentUpdateInput;
};


export type MutationItemBulkCreateArgs = {
  investmentId?: InputMaybe<Scalars['ID']['input']>;
  items: Array<InputMaybe<ItemBulkInput>>;
};


export type MutationItemCreateArgs = {
  input: ItemInput;
  investmentId: Scalars['ID']['input'];
};


export type MutationItemDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationItemUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: ItemInput;
};


export type MutationLoadNewDocumentFromApiArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPasswordResetArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationPluginUpdateArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  input: PluginUpdateInput;
};


export type MutationRefuseDocumentFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRequestNewDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationRestoreDocumentFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSessionBulkDeleteArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationSessionCreateArgs = {
  input: SessionInput;
};


export type MutationSessionDeleteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSessionUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: SessionInput;
};


export type MutationTokenCreateArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationValidateTokenArgs = {
  token: Scalars['String']['input'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  ASC = 'ASC',
  /** Specifies a descending sort order. */
  DESC = 'DESC'
}

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Represents a permission object in a friendly form. */
export type Permission = {
  __typename?: 'Permission';
  /** Internal code for permission. */
  code: Scalars['String']['output'];
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']['output'];
};

/** Plugin. */
export type Plugin = {
  __typename?: 'Plugin';
  channelConfigurations: Array<PluginConfiguration>;
  description: Scalars['String']['output'];
  globalConfiguration?: Maybe<PluginConfiguration>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PluginConfiguration = {
  __typename?: 'PluginConfiguration';
  active: Scalars['Boolean']['output'];
  channel?: Maybe<Channel>;
  configuration?: Maybe<Array<ConfigurationItem>>;
};

export enum PluginConfigurationType {
  GLOBAL = 'GLOBAL',
  PER_CHANNEL = 'PER_CHANNEL'
}

export type PluginCountableConnection = {
  __typename?: 'PluginCountableConnection';
  edges: Array<PluginCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PluginCountableEdge = {
  __typename?: 'PluginCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Plugin;
};

export type PluginFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
  type?: InputMaybe<PluginConfigurationType>;
};

export enum PluginSortField {
  IS_ACTIVE = 'IS_ACTIVE',
  NAME = 'NAME'
}

export type PluginSortingInput = {
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
  active: Scalars['Boolean']['input'];
  channels: Array<Scalars['ID']['input']>;
};

export type PluginUpdate = {
  __typename?: 'PluginUpdate';
  errors: Array<Error>;
  plugin?: Maybe<Plugin>;
};

export type PluginUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  configuration?: InputMaybe<Array<ConfigurationItemInput>>;
};

export type PublishableChannelListingInput = {
  channelId: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  attribute?: Maybe<Attribute>;
  attributes?: Maybe<AttributeCountableConnection>;
  categories?: Maybe<CategoryCountableConnection>;
  category?: Maybe<Category>;
  /** Look up a channel by ID or slug. */
  channel?: Maybe<Channel>;
  /** List of all channels. */
  channels?: Maybe<Array<Channel>>;
  document?: Maybe<Document>;
  /**
   *
   *
   * Requires one of the following permissions: MANAGE_DOCUMENTS.
   */
  documentLoad?: Maybe<DocumentLoad>;
  documents?: Maybe<DocumentCountableConnection>;
  entries?: Maybe<EntryCountableConnection>;
  entry?: Maybe<Entry>;
  /**
   *
   *
   * Requires one of the following permissions: MANAGE_EVENTS.
   */
  events?: Maybe<EventCountableConnection>;
  investment?: Maybe<Investment>;
  investments?: Maybe<InvestmentCountableConnection>;
  me?: Maybe<User>;
  plugin?: Maybe<Plugin>;
  plugins?: Maybe<PluginCountableConnection>;
  session?: Maybe<Session>;
  sessions?: Maybe<SessionCountableConnection>;
};


export type QueryAttributeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<AttributeSortingInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CategorySortingInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDocumentLoadArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<DocumentSortingInput>;
};


export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EntryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EntrySortingInput>;
};


export type QueryEntryArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInvestmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInvestmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InvestmentFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<InvestmentSortingInput>;
};


export type QueryPluginArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PluginFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PluginSortingInput>;
};


export type QuerySessionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySessionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SessionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<SessionSortingInput>;
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user?: Maybe<User>;
};

export type RefuseDocumentFile = {
  __typename?: 'RefuseDocumentFile';
  documentFile?: Maybe<DocumentFile>;
  errors: Array<Error>;
};

export type RequestNewDocument = {
  __typename?: 'RequestNewDocument';
  errors: Array<Error>;
};

export type RequestPasswordReset = {
  __typename?: 'RequestPasswordReset';
  errors: Array<Error>;
};

export type RestoreDocumentFile = {
  __typename?: 'RestoreDocumentFile';
  documentFile?: Maybe<DocumentFile>;
  errors: Array<Error>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  attribute: Attribute;
  values: Array<AttributeValue>;
};

export type Session = Node & {
  __typename?: 'Session';
  content?: Maybe<Scalars['JSONString']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};

/** Deletes sessions. */
export type SessionBulkDelete = {
  __typename?: 'SessionBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  errors: Array<Error>;
};

export type SessionCountableConnection = {
  __typename?: 'SessionCountableConnection';
  edges: Array<SessionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SessionCountableEdge = {
  __typename?: 'SessionCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Session;
};

export type SessionCreate = {
  __typename?: 'SessionCreate';
  errors: Array<Error>;
  session?: Maybe<Session>;
};

export type SessionDelete = {
  __typename?: 'SessionDelete';
  errors: Array<Error>;
  session?: Maybe<Session>;
};

export type SessionFilterInput = {
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SessionInput = {
  content?: InputMaybe<Scalars['JSONString']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum SessionSortField {
  NAME = 'NAME'
}

export type SessionSortingInput = {
  direction: OrderDirection;
  /** Sort sessions by the selected field. */
  field: SessionSortField;
};

export type SessionUpdate = {
  __typename?: 'SessionUpdate';
  entry?: Maybe<Session>;
  errors: Array<Error>;
  session?: Maybe<Session>;
};

export type SetPassword = {
  __typename?: 'SetPassword';
  errors: Array<Error>;
};

export type User = Node & {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isStaff?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
};

export type ValidateDocumentToken = {
  __typename?: 'ValidateDocumentToken';
  document?: Maybe<Document>;
  errors: Array<Error>;
};

/** Verify JWT token. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors: Array<Error>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean']['output'];
  /** JWT payload. */
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  /** User assigned to token. */
  user?: Maybe<User>;
};

export type AttributeFragment = { __typename?: 'Attribute', id: string, name?: string | null, slug?: string | null, type?: AttributeTypeEnum | null };

export type ChannelFragment = { __typename?: 'Channel', id: string, name: string, slug: string };

export type EntryFragment = { __typename?: 'Entry', id: string, name: string, slug?: string | null, type?: EntryTypeEnum | null, documentNumber?: string | null, categories?: Array<{ __typename?: 'Category', id: string, name: string, slug?: string | null }> | null, documents?: { __typename?: 'DocumentCountableConnection', totalCount?: number | null } | null, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', name?: string | null }, values: Array<{ __typename?: 'AttributeValue', name?: string | null }> }> };

export type PageInfoFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null };

export type AttributesQueryVariables = Exact<{
  filter?: InputMaybe<AttributeFilterInput>;
}>;


export type AttributesQuery = { __typename?: 'Query', attributes?: { __typename?: 'AttributeCountableConnection', edges: Array<{ __typename?: 'AttributeCountableEdge', node: { __typename?: 'Attribute', id: string, name?: string | null, slug?: string | null, type?: AttributeTypeEnum | null } }> } | null };

export type ChannelQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ChannelQuery = { __typename?: 'Query', channel?: { __typename?: 'Channel', id: string, name: string, slug: string } | null };

export type ChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChannelsQuery = { __typename?: 'Query', channels?: Array<{ __typename?: 'Channel', id: string, name: string, slug: string }> | null };

export type ChannelsPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChannelsPathsQuery = { __typename?: 'Query', channels?: Array<{ __typename?: 'Channel', slug: string }> | null };

export type EntriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EntryFilterInput>;
}>;


export type EntriesQuery = { __typename?: 'Query', entries?: { __typename?: 'EntryCountableConnection', edges: Array<{ __typename?: 'EntryCountableEdge', node: { __typename?: 'Entry', id: string, name: string, slug?: string | null, type?: EntryTypeEnum | null, documentNumber?: string | null, categories?: Array<{ __typename?: 'Category', id: string, name: string, slug?: string | null }> | null, documents?: { __typename?: 'DocumentCountableConnection', totalCount?: number | null } | null, attributes: Array<{ __typename?: 'SelectedAttribute', attribute: { __typename?: 'Attribute', name?: string | null }, values: Array<{ __typename?: 'AttributeValue', name?: string | null }> }> } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };

export const AttributeFragmentDoc = gql`
    fragment Attribute on Attribute {
  id
  name
  slug
  type
}
    `;
export const ChannelFragmentDoc = gql`
    fragment Channel on Channel {
  id
  name
  slug
}
    `;
export const EntryFragmentDoc = gql`
    fragment Entry on Entry {
  id
  name
  slug
  type
  documentNumber
  categories {
    id
    name
    slug
  }
  documents {
    totalCount
  }
  attributes {
    attribute {
      name
    }
    values {
      name
    }
  }
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const AttributesDocument = gql`
    query Attributes($filter: AttributeFilterInput) {
  attributes(first: 100, filter: $filter) {
    edges {
      node {
        ...Attribute
      }
    }
  }
}
    ${AttributeFragmentDoc}`;

/**
 * __useAttributesQuery__
 *
 * To run a query within a React component, call `useAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAttributesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useAttributesQuery(baseOptions?: Apollo.QueryHookOptions<AttributesQuery, AttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AttributesQuery, AttributesQueryVariables>(AttributesDocument, options);
      }
export function useAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AttributesQuery, AttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AttributesQuery, AttributesQueryVariables>(AttributesDocument, options);
        }
export type AttributesQueryHookResult = ReturnType<typeof useAttributesQuery>;
export type AttributesLazyQueryHookResult = ReturnType<typeof useAttributesLazyQuery>;
export type AttributesQueryResult = Apollo.QueryResult<AttributesQuery, AttributesQueryVariables>;
export const ChannelDocument = gql`
    query Channel($slug: String) {
  channel(slug: $slug) {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;

/**
 * __useChannelQuery__
 *
 * To run a query within a React component, call `useChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useChannelQuery(baseOptions?: Apollo.QueryHookOptions<ChannelQuery, ChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelQuery, ChannelQueryVariables>(ChannelDocument, options);
      }
export function useChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelQuery, ChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelQuery, ChannelQueryVariables>(ChannelDocument, options);
        }
export type ChannelQueryHookResult = ReturnType<typeof useChannelQuery>;
export type ChannelLazyQueryHookResult = ReturnType<typeof useChannelLazyQuery>;
export type ChannelQueryResult = Apollo.QueryResult<ChannelQuery, ChannelQueryVariables>;
export const ChannelsDocument = gql`
    query Channels {
  channels {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChannelsQuery(baseOptions?: Apollo.QueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
      }
export function useChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsQueryResult = Apollo.QueryResult<ChannelsQuery, ChannelsQueryVariables>;
export const ChannelsPathsDocument = gql`
    query ChannelsPaths {
  channels {
    slug
  }
}
    `;

/**
 * __useChannelsPathsQuery__
 *
 * To run a query within a React component, call `useChannelsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsPathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChannelsPathsQuery(baseOptions?: Apollo.QueryHookOptions<ChannelsPathsQuery, ChannelsPathsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelsPathsQuery, ChannelsPathsQueryVariables>(ChannelsPathsDocument, options);
      }
export function useChannelsPathsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelsPathsQuery, ChannelsPathsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelsPathsQuery, ChannelsPathsQueryVariables>(ChannelsPathsDocument, options);
        }
export type ChannelsPathsQueryHookResult = ReturnType<typeof useChannelsPathsQuery>;
export type ChannelsPathsLazyQueryHookResult = ReturnType<typeof useChannelsPathsLazyQuery>;
export type ChannelsPathsQueryResult = Apollo.QueryResult<ChannelsPathsQuery, ChannelsPathsQueryVariables>;
export const EntriesDocument = gql`
    query Entries($first: Int, $last: Int, $before: String, $after: String, $channel: String, $filter: EntryFilterInput) {
  entries(
    first: $first
    last: $last
    before: $before
    after: $after
    channel: $channel
    filter: $filter
  ) {
    edges {
      node {
        ...Entry
      }
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${EntryFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useEntriesQuery__
 *
 * To run a query within a React component, call `useEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEntriesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      channel: // value for 'channel'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useEntriesQuery(baseOptions?: Apollo.QueryHookOptions<EntriesQuery, EntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EntriesQuery, EntriesQueryVariables>(EntriesDocument, options);
      }
export function useEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EntriesQuery, EntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EntriesQuery, EntriesQueryVariables>(EntriesDocument, options);
        }
export type EntriesQueryHookResult = ReturnType<typeof useEntriesQuery>;
export type EntriesLazyQueryHookResult = ReturnType<typeof useEntriesLazyQuery>;
export type EntriesQueryResult = Apollo.QueryResult<EntriesQuery, EntriesQueryVariables>;
export type ApproveDocumentFileKeySpecifier = ('documentFile' | 'errors' | ApproveDocumentFileKeySpecifier)[];
export type ApproveDocumentFileFieldPolicy = {
	documentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('choices' | 'documents' | 'entityType' | 'entries' | 'filterableInDashboard' | 'filterableInWebsite' | 'id' | 'inputType' | 'name' | 'slug' | 'type' | 'valueRequired' | 'visibleInWebsite' | 'withChoices' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	choices?: FieldPolicy<any> | FieldReadFunction<any>,
	documents?: FieldPolicy<any> | FieldReadFunction<any>,
	entityType?: FieldPolicy<any> | FieldReadFunction<any>,
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	filterableInDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	filterableInWebsite?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inputType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	valueRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleInWebsite?: FieldPolicy<any> | FieldReadFunction<any>,
	withChoices?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AttributeCountableConnectionKeySpecifier)[];
export type AttributeCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCountableEdgeKeySpecifier = ('cursor' | 'node' | AttributeCountableEdgeKeySpecifier)[];
export type AttributeCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCreateKeySpecifier = ('attribute' | 'errors' | AttributeCreateKeySpecifier)[];
export type AttributeCreateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeDeleteKeySpecifier = ('attribute' | 'errors' | AttributeDeleteKeySpecifier)[];
export type AttributeDeleteFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeUpdateKeySpecifier = ('attribute' | 'errors' | AttributeUpdateKeySpecifier)[];
export type AttributeUpdateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueKeySpecifier = ('boolean' | 'date' | 'file' | 'id' | 'inputType' | 'name' | 'plainText' | 'reference' | 'slug' | 'value' | AttributeValueKeySpecifier)[];
export type AttributeValueFieldPolicy = {
	boolean?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inputType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	plainText?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AttributeValueCountableConnectionKeySpecifier)[];
export type AttributeValueCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueCountableEdgeKeySpecifier = ('cursor' | 'node' | AttributeValueCountableEdgeKeySpecifier)[];
export type AttributeValueCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueCreateKeySpecifier = ('attribute' | 'attributeValue' | 'errors' | AttributeValueCreateKeySpecifier)[];
export type AttributeValueCreateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueDeleteKeySpecifier = ('attribute' | 'attributeValue' | 'errors' | AttributeValueDeleteKeySpecifier)[];
export type AttributeValueDeleteFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueUpdateKeySpecifier = ('attribute' | 'attributeValue' | 'errors' | AttributeValueUpdateKeySpecifier)[];
export type AttributeValueUpdateFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkItemErrorKeySpecifier = ('code' | 'field' | 'index' | 'message' | BulkItemErrorKeySpecifier)[];
export type BulkItemErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('id' | 'name' | 'slug' | 'totalEntries' | 'type' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	totalEntries?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryBulkDeleteKeySpecifier = ('count' | 'errors' | CategoryBulkDeleteKeySpecifier)[];
export type CategoryBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CategoryCountableConnectionKeySpecifier)[];
export type CategoryCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCountableEdgeKeySpecifier = ('cursor' | 'node' | CategoryCountableEdgeKeySpecifier)[];
export type CategoryCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCreateKeySpecifier = ('category' | 'errors' | CategoryCreateKeySpecifier)[];
export type CategoryCreateFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryDeleteKeySpecifier = ('category' | 'errors' | CategoryDeleteKeySpecifier)[];
export type CategoryDeleteFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryUpdateKeySpecifier = ('category' | 'errors' | CategoryUpdateKeySpecifier)[];
export type CategoryUpdateFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelKeySpecifier = ('id' | 'isActive' | 'name' | 'slug' | ChannelKeySpecifier)[];
export type ChannelFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelActivateKeySpecifier = ('channel' | 'errors' | ChannelActivateKeySpecifier)[];
export type ChannelActivateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelCreateKeySpecifier = ('channel' | 'errors' | ChannelCreateKeySpecifier)[];
export type ChannelCreateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelDeactivateKeySpecifier = ('channel' | 'errors' | ChannelDeactivateKeySpecifier)[];
export type ChannelDeactivateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelDeleteKeySpecifier = ('channel' | 'errors' | ChannelDeleteKeySpecifier)[];
export type ChannelDeleteFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelUpdateKeySpecifier = ('channel' | 'errors' | ChannelUpdateKeySpecifier)[];
export type ChannelUpdateFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurationItemKeySpecifier = ('helpText' | 'label' | 'name' | 'type' | 'value' | ConfigurationItemKeySpecifier)[];
export type ConfigurationItemFieldPolicy = {
	helpText?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConsultKeySpecifier = ('created' | 'entry' | 'id' | 'plugin' | 'response' | ConsultKeySpecifier)[];
export type ConsultFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>,
	response?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConsultDocumentKeySpecifier = ('entry' | 'errors' | ConsultDocumentKeySpecifier)[];
export type ConsultDocumentFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTokenKeySpecifier = ('csrfToken' | 'errors' | 'refreshToken' | 'token' | 'user' | CreateTokenKeySpecifier)[];
export type CreateTokenFieldPolicy = {
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeactivateAllUserTokensKeySpecifier = ('errors' | DeactivateAllUserTokensKeySpecifier)[];
export type DeactivateAllUserTokensFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentKeySpecifier = ('created' | 'defaultFile' | 'description' | 'entry' | 'events' | 'expired' | 'expires' | 'files' | 'id' | 'isPublished' | 'loadType' | 'name' | 'updated' | DocumentKeySpecifier)[];
export type DocumentFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultFile?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	expired?: FieldPolicy<any> | FieldReadFunction<any>,
	expires?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	loadType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentBulkDeleteKeySpecifier = ('count' | 'errors' | DocumentBulkDeleteKeySpecifier)[];
export type DocumentBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | DocumentCountableConnectionKeySpecifier)[];
export type DocumentCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentCountableEdgeKeySpecifier = ('cursor' | 'node' | DocumentCountableEdgeKeySpecifier)[];
export type DocumentCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentCreateKeySpecifier = ('document' | 'errors' | DocumentCreateKeySpecifier)[];
export type DocumentCreateFieldPolicy = {
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentDeleteKeySpecifier = ('document' | 'errors' | DocumentDeleteKeySpecifier)[];
export type DocumentDeleteFieldPolicy = {
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentFileKeySpecifier = ('beginDate' | 'created' | 'document' | 'expirationDate' | 'file' | 'id' | 'status' | 'updated' | DocumentFileKeySpecifier)[];
export type DocumentFileFieldPolicy = {
	beginDate?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	expirationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentFileDeleteKeySpecifier = ('documentFile' | 'errors' | DocumentFileDeleteKeySpecifier)[];
export type DocumentFileDeleteFieldPolicy = {
	documentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentLoadKeySpecifier = ('document' | 'documentFile' | 'errorMessage' | 'id' | 'status' | DocumentLoadKeySpecifier)[];
export type DocumentLoadFieldPolicy = {
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	documentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentUpdateKeySpecifier = ('document' | 'errors' | DocumentUpdateKeySpecifier)[];
export type DocumentUpdateFieldPolicy = {
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentUpdateByEntryKeySpecifier = ('documentFile' | 'errors' | DocumentUpdateByEntryKeySpecifier)[];
export type DocumentUpdateByEntryFieldPolicy = {
	documentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryKeySpecifier = ('attributes' | 'categories' | 'channel' | 'channelListings' | 'consult' | 'created' | 'documentNumber' | 'documents' | 'email' | 'id' | 'name' | 'slug' | 'type' | 'updated' | EntryKeySpecifier)[];
export type EntryFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelListings?: FieldPolicy<any> | FieldReadFunction<any>,
	consult?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	documentNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	documents?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryBulkDeleteKeySpecifier = ('count' | 'errors' | EntryBulkDeleteKeySpecifier)[];
export type EntryBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryChannelListingKeySpecifier = ('channel' | 'id' | 'isActive' | 'isPublished' | EntryChannelListingKeySpecifier)[];
export type EntryChannelListingFieldPolicy = {
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryChannelListingErrorKeySpecifier = ('attributes' | 'channels' | 'code' | 'field' | 'message' | 'values' | EntryChannelListingErrorKeySpecifier)[];
export type EntryChannelListingErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryChannelListingUpdateKeySpecifier = ('entry' | 'errors' | EntryChannelListingUpdateKeySpecifier)[];
export type EntryChannelListingUpdateFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EntryCountableConnectionKeySpecifier)[];
export type EntryCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryCountableEdgeKeySpecifier = ('cursor' | 'node' | EntryCountableEdgeKeySpecifier)[];
export type EntryCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryCreateKeySpecifier = ('entry' | 'errors' | EntryCreateKeySpecifier)[];
export type EntryCreateFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryDeleteKeySpecifier = ('entry' | 'errors' | EntryDeleteKeySpecifier)[];
export type EntryDeleteFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryErrorKeySpecifier = ('attributes' | 'code' | 'field' | 'message' | 'values' | EntryErrorKeySpecifier)[];
export type EntryErrorFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryUpdateKeySpecifier = ('entry' | 'errors' | EntryUpdateKeySpecifier)[];
export type EntryUpdateFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('code' | 'field' | 'message' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('date' | 'document' | 'documentName' | 'id' | 'message' | 'parameters' | 'type' | 'user' | 'userEmail' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	documentName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	parameters?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EventCountableConnectionKeySpecifier)[];
export type EventCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventCountableEdgeKeySpecifier = ('cursor' | 'node' | EventCountableEdgeKeySpecifier)[];
export type EventCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('url' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvestmentKeySpecifier = ('id' | 'isPublished' | 'items' | 'month' | 'year' | InvestmentKeySpecifier)[];
export type InvestmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	month?: FieldPolicy<any> | FieldReadFunction<any>,
	year?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvestmentBulkDeleteKeySpecifier = ('count' | 'errors' | InvestmentBulkDeleteKeySpecifier)[];
export type InvestmentBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvestmentCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | InvestmentCountableConnectionKeySpecifier)[];
export type InvestmentCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvestmentCountableEdgeKeySpecifier = ('cursor' | 'node' | InvestmentCountableEdgeKeySpecifier)[];
export type InvestmentCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvestmentCreateKeySpecifier = ('errors' | 'investment' | InvestmentCreateKeySpecifier)[];
export type InvestmentCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	investment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvestmentDeleteKeySpecifier = ('errors' | 'investment' | InvestmentDeleteKeySpecifier)[];
export type InvestmentDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	investment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvestmentUpdateKeySpecifier = ('errors' | 'investment' | InvestmentUpdateKeySpecifier)[];
export type InvestmentUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	investment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemKeySpecifier = ('id' | 'investment' | 'name' | 'value' | ItemKeySpecifier)[];
export type ItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	investment?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemBulkCreateKeySpecifier = ('errors' | 'items' | ItemBulkCreateKeySpecifier)[];
export type ItemBulkCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemCreateKeySpecifier = ('errors' | 'investment' | 'item' | ItemCreateKeySpecifier)[];
export type ItemCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	investment?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemDeleteKeySpecifier = ('errors' | 'item' | ItemDeleteKeySpecifier)[];
export type ItemDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItemUpdateKeySpecifier = ('errors' | 'item' | ItemUpdateKeySpecifier)[];
export type ItemUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoadNewDocumentFromAPIKeySpecifier = ('documentLoad' | 'errors' | LoadNewDocumentFromAPIKeySpecifier)[];
export type LoadNewDocumentFromAPIFieldPolicy = {
	documentLoad?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('approveDocumentFile' | 'attributeCreate' | 'attributeDelete' | 'attributeUpdate' | 'attributeValueCreate' | 'attributeValueDelete' | 'attributeValueUpdate' | 'categoryBulkDelete' | 'categoryCreate' | 'categoryDelete' | 'categoryUpdate' | 'channelActivate' | 'channelCreate' | 'channelDeactivate' | 'channelDelete' | 'channelUpdate' | 'consultDocument' | 'documentBulkDelete' | 'documentCreate' | 'documentDelete' | 'documentFileDelete' | 'documentUpdate' | 'documentUpdateByEntry' | 'entryBulkDelete' | 'entryChannelListingUpdate' | 'entryCreate' | 'entryDelete' | 'entryUpdate' | 'investmentBulkDelete' | 'investmentCreate' | 'investmentDelete' | 'investmentUpdate' | 'itemBulkCreate' | 'itemCreate' | 'itemDelete' | 'itemUpdate' | 'loadNewDocumentFromApi' | 'passwordReset' | 'pluginUpdate' | 'refuseDocumentFile' | 'requestNewDocument' | 'requestPasswordReset' | 'restoreDocumentFile' | 'sessionBulkDelete' | 'sessionCreate' | 'sessionDelete' | 'sessionUpdate' | 'tokenCreate' | 'tokenRefresh' | 'tokenVerify' | 'tokensDeactivateAll' | 'validateToken' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	approveDocumentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	channelDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	channelUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	consultDocument?: FieldPolicy<any> | FieldReadFunction<any>,
	documentBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	documentCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	documentDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	documentFileDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	documentUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	documentUpdateByEntry?: FieldPolicy<any> | FieldReadFunction<any>,
	entryBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	entryChannelListingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	entryCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	entryDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	entryUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	investmentBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	investmentCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	investmentDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	investmentUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	itemBulkCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	itemCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	itemDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	itemUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	loadNewDocumentFromApi?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	pluginUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	refuseDocumentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	requestNewDocument?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	restoreDocumentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenRefresh?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	tokensDeactivateAll?: FieldPolicy<any> | FieldReadFunction<any>,
	validateToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionKeySpecifier = ('code' | 'name' | PermissionKeySpecifier)[];
export type PermissionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginKeySpecifier = ('channelConfigurations' | 'description' | 'globalConfiguration' | 'id' | 'name' | PluginKeySpecifier)[];
export type PluginFieldPolicy = {
	channelConfigurations?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	globalConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginConfigurationKeySpecifier = ('active' | 'channel' | 'configuration' | PluginConfigurationKeySpecifier)[];
export type PluginConfigurationFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	configuration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | PluginCountableConnectionKeySpecifier)[];
export type PluginCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginCountableEdgeKeySpecifier = ('cursor' | 'node' | PluginCountableEdgeKeySpecifier)[];
export type PluginCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginUpdateKeySpecifier = ('errors' | 'plugin' | PluginUpdateKeySpecifier)[];
export type PluginUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('attribute' | 'attributes' | 'categories' | 'category' | 'channel' | 'channels' | 'document' | 'documentLoad' | 'documents' | 'entries' | 'entry' | 'events' | 'investment' | 'investments' | 'me' | 'plugin' | 'plugins' | 'session' | 'sessions' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channels?: FieldPolicy<any> | FieldReadFunction<any>,
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	documentLoad?: FieldPolicy<any> | FieldReadFunction<any>,
	documents?: FieldPolicy<any> | FieldReadFunction<any>,
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	investment?: FieldPolicy<any> | FieldReadFunction<any>,
	investments?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>,
	plugins?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefreshTokenKeySpecifier = ('errors' | 'token' | 'user' | RefreshTokenKeySpecifier)[];
export type RefreshTokenFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefuseDocumentFileKeySpecifier = ('documentFile' | 'errors' | RefuseDocumentFileKeySpecifier)[];
export type RefuseDocumentFileFieldPolicy = {
	documentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestNewDocumentKeySpecifier = ('errors' | RequestNewDocumentKeySpecifier)[];
export type RequestNewDocumentFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestPasswordResetKeySpecifier = ('errors' | RequestPasswordResetKeySpecifier)[];
export type RequestPasswordResetFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RestoreDocumentFileKeySpecifier = ('documentFile' | 'errors' | RestoreDocumentFileKeySpecifier)[];
export type RestoreDocumentFileFieldPolicy = {
	documentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedAttributeKeySpecifier = ('attribute' | 'values' | SelectedAttributeKeySpecifier)[];
export type SelectedAttributeFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionKeySpecifier = ('content' | 'date' | 'id' | 'isPublished' | 'name' | 'slug' | SessionKeySpecifier)[];
export type SessionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionBulkDeleteKeySpecifier = ('count' | 'errors' | SessionBulkDeleteKeySpecifier)[];
export type SessionBulkDeleteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionCountableConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionCountableConnectionKeySpecifier)[];
export type SessionCountableConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionCountableEdgeKeySpecifier = ('cursor' | 'node' | SessionCountableEdgeKeySpecifier)[];
export type SessionCountableEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionCreateKeySpecifier = ('errors' | 'session' | SessionCreateKeySpecifier)[];
export type SessionCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionDeleteKeySpecifier = ('errors' | 'session' | SessionDeleteKeySpecifier)[];
export type SessionDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionUpdateKeySpecifier = ('entry' | 'errors' | 'session' | SessionUpdateKeySpecifier)[];
export type SessionUpdateFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetPasswordKeySpecifier = ('errors' | SetPasswordKeySpecifier)[];
export type SetPasswordFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'firstName' | 'id' | 'isStaff' | 'lastName' | 'permissions' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateDocumentTokenKeySpecifier = ('document' | 'errors' | ValidateDocumentTokenKeySpecifier)[];
export type ValidateDocumentTokenFieldPolicy = {
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyTokenKeySpecifier = ('errors' | 'isValid' | 'payload' | 'user' | VerifyTokenKeySpecifier)[];
export type VerifyTokenFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ApproveDocumentFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApproveDocumentFileKeySpecifier | (() => undefined | ApproveDocumentFileKeySpecifier),
		fields?: ApproveDocumentFileFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AttributeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCountableConnectionKeySpecifier | (() => undefined | AttributeCountableConnectionKeySpecifier),
		fields?: AttributeCountableConnectionFieldPolicy,
	},
	AttributeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCountableEdgeKeySpecifier | (() => undefined | AttributeCountableEdgeKeySpecifier),
		fields?: AttributeCountableEdgeFieldPolicy,
	},
	AttributeCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCreateKeySpecifier | (() => undefined | AttributeCreateKeySpecifier),
		fields?: AttributeCreateFieldPolicy,
	},
	AttributeDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeDeleteKeySpecifier | (() => undefined | AttributeDeleteKeySpecifier),
		fields?: AttributeDeleteFieldPolicy,
	},
	AttributeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeUpdateKeySpecifier | (() => undefined | AttributeUpdateKeySpecifier),
		fields?: AttributeUpdateFieldPolicy,
	},
	AttributeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueKeySpecifier | (() => undefined | AttributeValueKeySpecifier),
		fields?: AttributeValueFieldPolicy,
	},
	AttributeValueCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueCountableConnectionKeySpecifier | (() => undefined | AttributeValueCountableConnectionKeySpecifier),
		fields?: AttributeValueCountableConnectionFieldPolicy,
	},
	AttributeValueCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueCountableEdgeKeySpecifier | (() => undefined | AttributeValueCountableEdgeKeySpecifier),
		fields?: AttributeValueCountableEdgeFieldPolicy,
	},
	AttributeValueCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueCreateKeySpecifier | (() => undefined | AttributeValueCreateKeySpecifier),
		fields?: AttributeValueCreateFieldPolicy,
	},
	AttributeValueDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueDeleteKeySpecifier | (() => undefined | AttributeValueDeleteKeySpecifier),
		fields?: AttributeValueDeleteFieldPolicy,
	},
	AttributeValueUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueUpdateKeySpecifier | (() => undefined | AttributeValueUpdateKeySpecifier),
		fields?: AttributeValueUpdateFieldPolicy,
	},
	BulkItemError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkItemErrorKeySpecifier | (() => undefined | BulkItemErrorKeySpecifier),
		fields?: BulkItemErrorFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryBulkDeleteKeySpecifier | (() => undefined | CategoryBulkDeleteKeySpecifier),
		fields?: CategoryBulkDeleteFieldPolicy,
	},
	CategoryCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCountableConnectionKeySpecifier | (() => undefined | CategoryCountableConnectionKeySpecifier),
		fields?: CategoryCountableConnectionFieldPolicy,
	},
	CategoryCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCountableEdgeKeySpecifier | (() => undefined | CategoryCountableEdgeKeySpecifier),
		fields?: CategoryCountableEdgeFieldPolicy,
	},
	CategoryCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCreateKeySpecifier | (() => undefined | CategoryCreateKeySpecifier),
		fields?: CategoryCreateFieldPolicy,
	},
	CategoryDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryDeleteKeySpecifier | (() => undefined | CategoryDeleteKeySpecifier),
		fields?: CategoryDeleteFieldPolicy,
	},
	CategoryUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryUpdateKeySpecifier | (() => undefined | CategoryUpdateKeySpecifier),
		fields?: CategoryUpdateFieldPolicy,
	},
	Channel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelKeySpecifier | (() => undefined | ChannelKeySpecifier),
		fields?: ChannelFieldPolicy,
	},
	ChannelActivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelActivateKeySpecifier | (() => undefined | ChannelActivateKeySpecifier),
		fields?: ChannelActivateFieldPolicy,
	},
	ChannelCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelCreateKeySpecifier | (() => undefined | ChannelCreateKeySpecifier),
		fields?: ChannelCreateFieldPolicy,
	},
	ChannelDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelDeactivateKeySpecifier | (() => undefined | ChannelDeactivateKeySpecifier),
		fields?: ChannelDeactivateFieldPolicy,
	},
	ChannelDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelDeleteKeySpecifier | (() => undefined | ChannelDeleteKeySpecifier),
		fields?: ChannelDeleteFieldPolicy,
	},
	ChannelUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelUpdateKeySpecifier | (() => undefined | ChannelUpdateKeySpecifier),
		fields?: ChannelUpdateFieldPolicy,
	},
	ConfigurationItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurationItemKeySpecifier | (() => undefined | ConfigurationItemKeySpecifier),
		fields?: ConfigurationItemFieldPolicy,
	},
	Consult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConsultKeySpecifier | (() => undefined | ConsultKeySpecifier),
		fields?: ConsultFieldPolicy,
	},
	ConsultDocument?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConsultDocumentKeySpecifier | (() => undefined | ConsultDocumentKeySpecifier),
		fields?: ConsultDocumentFieldPolicy,
	},
	CreateToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTokenKeySpecifier | (() => undefined | CreateTokenKeySpecifier),
		fields?: CreateTokenFieldPolicy,
	},
	DeactivateAllUserTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeactivateAllUserTokensKeySpecifier | (() => undefined | DeactivateAllUserTokensKeySpecifier),
		fields?: DeactivateAllUserTokensFieldPolicy,
	},
	Document?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentKeySpecifier | (() => undefined | DocumentKeySpecifier),
		fields?: DocumentFieldPolicy,
	},
	DocumentBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentBulkDeleteKeySpecifier | (() => undefined | DocumentBulkDeleteKeySpecifier),
		fields?: DocumentBulkDeleteFieldPolicy,
	},
	DocumentCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentCountableConnectionKeySpecifier | (() => undefined | DocumentCountableConnectionKeySpecifier),
		fields?: DocumentCountableConnectionFieldPolicy,
	},
	DocumentCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentCountableEdgeKeySpecifier | (() => undefined | DocumentCountableEdgeKeySpecifier),
		fields?: DocumentCountableEdgeFieldPolicy,
	},
	DocumentCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentCreateKeySpecifier | (() => undefined | DocumentCreateKeySpecifier),
		fields?: DocumentCreateFieldPolicy,
	},
	DocumentDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentDeleteKeySpecifier | (() => undefined | DocumentDeleteKeySpecifier),
		fields?: DocumentDeleteFieldPolicy,
	},
	DocumentFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentFileKeySpecifier | (() => undefined | DocumentFileKeySpecifier),
		fields?: DocumentFileFieldPolicy,
	},
	DocumentFileDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentFileDeleteKeySpecifier | (() => undefined | DocumentFileDeleteKeySpecifier),
		fields?: DocumentFileDeleteFieldPolicy,
	},
	DocumentLoad?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentLoadKeySpecifier | (() => undefined | DocumentLoadKeySpecifier),
		fields?: DocumentLoadFieldPolicy,
	},
	DocumentUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentUpdateKeySpecifier | (() => undefined | DocumentUpdateKeySpecifier),
		fields?: DocumentUpdateFieldPolicy,
	},
	DocumentUpdateByEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentUpdateByEntryKeySpecifier | (() => undefined | DocumentUpdateByEntryKeySpecifier),
		fields?: DocumentUpdateByEntryFieldPolicy,
	},
	Entry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryKeySpecifier | (() => undefined | EntryKeySpecifier),
		fields?: EntryFieldPolicy,
	},
	EntryBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryBulkDeleteKeySpecifier | (() => undefined | EntryBulkDeleteKeySpecifier),
		fields?: EntryBulkDeleteFieldPolicy,
	},
	EntryChannelListing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryChannelListingKeySpecifier | (() => undefined | EntryChannelListingKeySpecifier),
		fields?: EntryChannelListingFieldPolicy,
	},
	EntryChannelListingError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryChannelListingErrorKeySpecifier | (() => undefined | EntryChannelListingErrorKeySpecifier),
		fields?: EntryChannelListingErrorFieldPolicy,
	},
	EntryChannelListingUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryChannelListingUpdateKeySpecifier | (() => undefined | EntryChannelListingUpdateKeySpecifier),
		fields?: EntryChannelListingUpdateFieldPolicy,
	},
	EntryCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryCountableConnectionKeySpecifier | (() => undefined | EntryCountableConnectionKeySpecifier),
		fields?: EntryCountableConnectionFieldPolicy,
	},
	EntryCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryCountableEdgeKeySpecifier | (() => undefined | EntryCountableEdgeKeySpecifier),
		fields?: EntryCountableEdgeFieldPolicy,
	},
	EntryCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryCreateKeySpecifier | (() => undefined | EntryCreateKeySpecifier),
		fields?: EntryCreateFieldPolicy,
	},
	EntryDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryDeleteKeySpecifier | (() => undefined | EntryDeleteKeySpecifier),
		fields?: EntryDeleteFieldPolicy,
	},
	EntryError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryErrorKeySpecifier | (() => undefined | EntryErrorKeySpecifier),
		fields?: EntryErrorFieldPolicy,
	},
	EntryUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryUpdateKeySpecifier | (() => undefined | EntryUpdateKeySpecifier),
		fields?: EntryUpdateFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	Event?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	EventCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventCountableConnectionKeySpecifier | (() => undefined | EventCountableConnectionKeySpecifier),
		fields?: EventCountableConnectionFieldPolicy,
	},
	EventCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventCountableEdgeKeySpecifier | (() => undefined | EventCountableEdgeKeySpecifier),
		fields?: EventCountableEdgeFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	Investment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvestmentKeySpecifier | (() => undefined | InvestmentKeySpecifier),
		fields?: InvestmentFieldPolicy,
	},
	InvestmentBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvestmentBulkDeleteKeySpecifier | (() => undefined | InvestmentBulkDeleteKeySpecifier),
		fields?: InvestmentBulkDeleteFieldPolicy,
	},
	InvestmentCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvestmentCountableConnectionKeySpecifier | (() => undefined | InvestmentCountableConnectionKeySpecifier),
		fields?: InvestmentCountableConnectionFieldPolicy,
	},
	InvestmentCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvestmentCountableEdgeKeySpecifier | (() => undefined | InvestmentCountableEdgeKeySpecifier),
		fields?: InvestmentCountableEdgeFieldPolicy,
	},
	InvestmentCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvestmentCreateKeySpecifier | (() => undefined | InvestmentCreateKeySpecifier),
		fields?: InvestmentCreateFieldPolicy,
	},
	InvestmentDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvestmentDeleteKeySpecifier | (() => undefined | InvestmentDeleteKeySpecifier),
		fields?: InvestmentDeleteFieldPolicy,
	},
	InvestmentUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvestmentUpdateKeySpecifier | (() => undefined | InvestmentUpdateKeySpecifier),
		fields?: InvestmentUpdateFieldPolicy,
	},
	Item?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemKeySpecifier | (() => undefined | ItemKeySpecifier),
		fields?: ItemFieldPolicy,
	},
	ItemBulkCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemBulkCreateKeySpecifier | (() => undefined | ItemBulkCreateKeySpecifier),
		fields?: ItemBulkCreateFieldPolicy,
	},
	ItemCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemCreateKeySpecifier | (() => undefined | ItemCreateKeySpecifier),
		fields?: ItemCreateFieldPolicy,
	},
	ItemDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemDeleteKeySpecifier | (() => undefined | ItemDeleteKeySpecifier),
		fields?: ItemDeleteFieldPolicy,
	},
	ItemUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItemUpdateKeySpecifier | (() => undefined | ItemUpdateKeySpecifier),
		fields?: ItemUpdateFieldPolicy,
	},
	LoadNewDocumentFromAPI?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoadNewDocumentFromAPIKeySpecifier | (() => undefined | LoadNewDocumentFromAPIKeySpecifier),
		fields?: LoadNewDocumentFromAPIFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Permission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionKeySpecifier | (() => undefined | PermissionKeySpecifier),
		fields?: PermissionFieldPolicy,
	},
	Plugin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginKeySpecifier | (() => undefined | PluginKeySpecifier),
		fields?: PluginFieldPolicy,
	},
	PluginConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginConfigurationKeySpecifier | (() => undefined | PluginConfigurationKeySpecifier),
		fields?: PluginConfigurationFieldPolicy,
	},
	PluginCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginCountableConnectionKeySpecifier | (() => undefined | PluginCountableConnectionKeySpecifier),
		fields?: PluginCountableConnectionFieldPolicy,
	},
	PluginCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginCountableEdgeKeySpecifier | (() => undefined | PluginCountableEdgeKeySpecifier),
		fields?: PluginCountableEdgeFieldPolicy,
	},
	PluginUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginUpdateKeySpecifier | (() => undefined | PluginUpdateKeySpecifier),
		fields?: PluginUpdateFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RefreshToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefreshTokenKeySpecifier | (() => undefined | RefreshTokenKeySpecifier),
		fields?: RefreshTokenFieldPolicy,
	},
	RefuseDocumentFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefuseDocumentFileKeySpecifier | (() => undefined | RefuseDocumentFileKeySpecifier),
		fields?: RefuseDocumentFileFieldPolicy,
	},
	RequestNewDocument?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestNewDocumentKeySpecifier | (() => undefined | RequestNewDocumentKeySpecifier),
		fields?: RequestNewDocumentFieldPolicy,
	},
	RequestPasswordReset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestPasswordResetKeySpecifier | (() => undefined | RequestPasswordResetKeySpecifier),
		fields?: RequestPasswordResetFieldPolicy,
	},
	RestoreDocumentFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RestoreDocumentFileKeySpecifier | (() => undefined | RestoreDocumentFileKeySpecifier),
		fields?: RestoreDocumentFileFieldPolicy,
	},
	SelectedAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedAttributeKeySpecifier | (() => undefined | SelectedAttributeKeySpecifier),
		fields?: SelectedAttributeFieldPolicy,
	},
	Session?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionKeySpecifier | (() => undefined | SessionKeySpecifier),
		fields?: SessionFieldPolicy,
	},
	SessionBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionBulkDeleteKeySpecifier | (() => undefined | SessionBulkDeleteKeySpecifier),
		fields?: SessionBulkDeleteFieldPolicy,
	},
	SessionCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionCountableConnectionKeySpecifier | (() => undefined | SessionCountableConnectionKeySpecifier),
		fields?: SessionCountableConnectionFieldPolicy,
	},
	SessionCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionCountableEdgeKeySpecifier | (() => undefined | SessionCountableEdgeKeySpecifier),
		fields?: SessionCountableEdgeFieldPolicy,
	},
	SessionCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionCreateKeySpecifier | (() => undefined | SessionCreateKeySpecifier),
		fields?: SessionCreateFieldPolicy,
	},
	SessionDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionDeleteKeySpecifier | (() => undefined | SessionDeleteKeySpecifier),
		fields?: SessionDeleteFieldPolicy,
	},
	SessionUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionUpdateKeySpecifier | (() => undefined | SessionUpdateKeySpecifier),
		fields?: SessionUpdateFieldPolicy,
	},
	SetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetPasswordKeySpecifier | (() => undefined | SetPasswordKeySpecifier),
		fields?: SetPasswordFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	ValidateDocumentToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateDocumentTokenKeySpecifier | (() => undefined | ValidateDocumentTokenKeySpecifier),
		fields?: ValidateDocumentTokenFieldPolicy,
	},
	VerifyToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyTokenKeySpecifier | (() => undefined | VerifyTokenKeySpecifier),
		fields?: VerifyTokenFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;