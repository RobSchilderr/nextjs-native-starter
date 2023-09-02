import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
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
  /** delete data from the table: "person" */
  delete_person?: Maybe<Person_Mutation_Response>;
  /** delete single row from the table: "person" */
  delete_person_by_pk?: Maybe<Person>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** insert data into the table: "person" */
  insert_person?: Maybe<Person_Mutation_Response>;
  /** insert a single row into the table: "person" */
  insert_person_one?: Maybe<Person>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** update data of the table: "person" */
  update_person?: Maybe<Person_Mutation_Response>;
  /** update single row of the table: "person" */
  update_person_by_pk?: Maybe<Person>;
  /** update multiples rows of table: "person" */
  update_person_many?: Maybe<Array<Maybe<Person_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_PersonArgs = {
  where: Person_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_PersonArgs = {
  objects: Array<Person_Insert_Input>;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_OneArgs = {
  object: Person_Insert_Input;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
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


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
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

/** aggregated selection of "person" */
export type Person_Aggregate = {
  __typename?: 'person_aggregate';
  aggregate?: Maybe<Person_Aggregate_Fields>;
  nodes: Array<Person>;
};

/** aggregate fields of "person" */
export type Person_Aggregate_Fields = {
  __typename?: 'person_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Max_Fields>;
  min?: Maybe<Person_Min_Fields>;
};


/** aggregate fields of "person" */
export type Person_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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

/** unique or primary key constraints on table "person" */
export enum Person_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonPkey = 'person_pkey'
}

/** input type for inserting data into table "person" */
export type Person_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Role_Enum>;
};

/** aggregate max on columns */
export type Person_Max_Fields = {
  __typename?: 'person_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Person_Min_Fields = {
  __typename?: 'person_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "person" */
export type Person_Mutation_Response = {
  __typename?: 'person_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person>;
};

/** on_conflict condition type for table "person" */
export type Person_On_Conflict = {
  constraint: Person_Constraint;
  update_columns?: Array<Person_Update_Column>;
  where?: InputMaybe<Person_Bool_Exp>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Role_Enum>;
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

/** update columns of table "person" */
export enum Person_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

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
  /** fetch aggregated fields from the table: "person" */
  person_aggregate: Person_Aggregate;
  /** fetch data from the table: "person" using primary key columns */
  person_by_pk?: Maybe<Person>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
};


export type Query_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Query_RootPerson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Query_RootPerson_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  name: Scalars['String']['input'];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  name: Scalars['String']['output'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "name" */
  RolePkey = 'role_pkey'
}

export enum Role_Enum {
  Admin = 'admin',
  Moderator = 'moderator'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Role_Enum>;
  _in?: InputMaybe<Array<Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Role_Enum>;
  _nin?: InputMaybe<Array<Role_Enum>>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Name = 'name'
}

export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "person" */
  person: Array<Person>;
  /** fetch aggregated fields from the table: "person" */
  person_aggregate: Person_Aggregate;
  /** fetch data from the table: "person" using primary key columns */
  person_by_pk?: Maybe<Person>;
  /** fetch data from the table in a streaming manner: "person" */
  person_stream: Array<Person>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
};


export type Subscription_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Subscription_RootPerson_AggregateArgs = {
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


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
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

export type GetPersonQueryVariables = Exact<{
  condition: Person_Bool_Exp;
}>;


export type GetPersonQuery = { __typename?: 'query_root', person: Array<{ __typename?: 'person', email: string, id: any, role: Role_Enum }> };


export const GetPersonDocument = `
    query GetPerson($condition: person_bool_exp!) {
  person(where: $condition) {
    email
    id
    role
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetPerson(variables: GetPersonQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetPersonQuery; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetPersonQuery>(GetPersonDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPerson', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const namedOperations = {
  Query: {
    GetPerson: 'GetPerson'
  }
}