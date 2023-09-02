import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { hasuraAnonymousFetcher } from 'lib/next-apps/fetchers/hasuraAnonymousFetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "person" */
export type Person = {
  __typename?: 'person';
  given_name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "person". All fields are combined with a logical 'AND'. */
export type Person_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Bool_Exp>>;
  _not?: InputMaybe<Person_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Bool_Exp>>;
  given_name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "person". */
export type Person_Order_By = {
  given_name?: InputMaybe<Order_By>;
};

/** select columns of table "person" */
export enum Person_Select_Column {
  /** column name */
  GivenName = 'given_name'
}

/** Streaming cursor of the table "person" */
export type Person_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Stream_Cursor_Value_Input = {
  given_name?: InputMaybe<Scalars['String']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "person" */
  person: Array<Person>;
};


export type Query_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "person" */
  person: Array<Person>;
  /** fetch data from the table in a streaming manner: "person" */
  person_stream: Array<Person>;
};


export type Subscription_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Subscription_RootPerson_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

export type GetPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonQuery = { __typename?: 'query_root', person: Array<{ __typename?: 'person', given_name: string }> };


export const GetPersonDocument = `
    query GetPerson {
  person {
    given_name
  }
}
    `;
export const useGetPersonQuery = <
      TData = GetPersonQuery,
      TError = unknown
    >(
      variables?: GetPersonQueryVariables,
      options?: UseQueryOptions<GetPersonQuery, TError, TData>
    ) =>
    useQuery<GetPersonQuery, TError, TData>(
      variables === undefined ? ['GetPerson'] : ['GetPerson', variables],
      hasuraAnonymousFetcher<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, variables),
      options
    );
export const namedOperations = {
  Query: {
    GetPerson: 'GetPerson'
  }
}