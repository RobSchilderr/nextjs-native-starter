import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { hasuraUserFetcher } from 'lib/next-apps/fetchers/hasuraUserFetcher';
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
  uuid: { input: any; output: any; }
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** update data of the table: "person" */
  update_person?: Maybe<Person_Mutation_Response>;
  /** update single row of the table: "person" */
  update_person_by_pk?: Maybe<Person>;
  /** update multiples rows of table: "person" */
  update_person_many?: Maybe<Array<Maybe<Person_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonArgs = {
  _set?: InputMaybe<Person_Set_Input>;
  where: Person_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_By_PkArgs = {
  _set?: InputMaybe<Person_Set_Input>;
  pk_columns: Person_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_ManyArgs = {
  updates: Array<Person_Updates>;
};

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
  email: Scalars['String']['output'];
  given_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  role: Role_Enum;
};

/** Boolean expression to filter rows from the table "person". All fields are combined with a logical 'AND'. */
export type Person_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Bool_Exp>>;
  _not?: InputMaybe<Person_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  given_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Role_Enum_Comparison_Exp>;
};

/** response of any mutation on the table "person" */
export type Person_Mutation_Response = {
  __typename?: 'person_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person>;
};

/** Ordering options when selecting data from "person". */
export type Person_Order_By = {
  email?: InputMaybe<Order_By>;
  given_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person */
export type Person_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person" */
export enum Person_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "person" */
export type Person_Set_Input = {
  given_name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "person" */
export type Person_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Role_Enum>;
};

export type Person_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "person" */
  person: Array<Person>;
  /** fetch data from the table: "person" using primary key columns */
  person_by_pk?: Maybe<Person>;
};


export type Query_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Query_RootPerson_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export enum Role_Enum {
  Moderator = 'moderator',
  User = 'user'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Role_Enum>;
  _in?: InputMaybe<Array<Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Role_Enum>;
  _nin?: InputMaybe<Array<Role_Enum>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "person" */
  person: Array<Person>;
  /** fetch data from the table: "person" using primary key columns */
  person_by_pk?: Maybe<Person>;
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


export type Subscription_RootPerson_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type UpdatePersonMutationVariables = Exact<{
  variables: Person_Set_Input;
  condition: Person_Bool_Exp;
}>;


export type UpdatePersonMutation = { __typename?: 'mutation_root', update_person?: { __typename?: 'person_mutation_response', affected_rows: number } | null };

export type GetPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonQuery = { __typename?: 'query_root', person: Array<{ __typename?: 'person', email: string, id: any, role: Role_Enum, given_name: string }> };


export const UpdatePersonDocument = `
    mutation UpdatePerson($variables: person_set_input!, $condition: person_bool_exp!) {
  update_person(_set: $variables, where: $condition) {
    affected_rows
  }
}
    `;
export const useUpdatePersonMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdatePersonMutation, TError, UpdatePersonMutationVariables, TContext>) =>
    useMutation<UpdatePersonMutation, TError, UpdatePersonMutationVariables, TContext>(
      ['UpdatePerson'],
      (variables?: UpdatePersonMutationVariables) => hasuraUserFetcher<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, variables)(),
      options
    );
export const GetPersonDocument = `
    query GetPerson {
  person {
    email
    id
    role
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
      hasuraUserFetcher<GetPersonQuery, GetPersonQueryVariables>(GetPersonDocument, variables),
      options
    );
export const namedOperations = {
  Query: {
    GetPerson: 'GetPerson'
  },
  Mutation: {
    UpdatePerson: 'UpdatePerson'
  }
}