export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: { input: any; output: any; }
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

export type AttributeValueCreateInput = {
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  plainText?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
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

export type AttributeValueUpdateInput = {
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plainText?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
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

export type ChannelInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
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
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
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

export type DocumentUpdateByEntryInput = {
  beginDate?: InputMaybe<Scalars['Date']['input']>;
  expirationDate?: InputMaybe<Scalars['Date']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
};

export type EntryChannelListingUpdateInput = {
  removeChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  updateChannels?: InputMaybe<Array<PublishableChannelListingInput>>;
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
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
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

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars['Int']['input']>;
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

export type InvestmentUpdateInput = {
  addItems?: InputMaybe<Array<ItemCreateInput>>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  removeItems?: InputMaybe<Array<Scalars['ID']['input']>>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type ItemBulkInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type ItemCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type ItemInput = {
  investment?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  ASC = 'ASC',
  /** Specifies a descending sort order. */
  DESC = 'DESC'
}

export enum PluginConfigurationType {
  GLOBAL = 'GLOBAL',
  PER_CHANNEL = 'PER_CHANNEL'
}

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

export type PluginUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  configuration?: InputMaybe<Array<ConfigurationItemInput>>;
};

export type PublishableChannelListingInput = {
  channelId: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
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

export type ChannelFragment = { __typename: 'Channel', id: string, name: string, slug: string };

export type ChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChannelsQuery = { __typename: 'Query', channels: Array<{ __typename: 'Channel', id: string, name: string, slug: string }> | null };
