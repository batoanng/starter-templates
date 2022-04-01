import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Channel = {
  __typename?: 'Channel';
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  channels?: Maybe<Array<Maybe<Channel>>>;
};

export type ChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChannelsQuery = { __typename?: 'Query', channels?: Array<{ __typename?: 'Channel', name?: string | null } | null> | null };


export const ChannelsDocument = gql`
    query channels {
  channels {
    name
  }
}
    `;
export type ChannelsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChannelsQuery, ChannelsQueryVariables>, 'query'>;

    export const ChannelsComponent = (props: ChannelsComponentProps) => (
      <ApolloReactComponents.Query<ChannelsQuery, ChannelsQueryVariables> query={ChannelsDocument} {...props} />
    );
    
export type ChannelsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ChannelsQuery, ChannelsQueryVariables>
    } & TChildProps;
export function withChannels<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChannelsQuery,
  ChannelsQueryVariables,
  ChannelsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ChannelsQuery, ChannelsQueryVariables, ChannelsProps<TChildProps, TDataName>>(ChannelsDocument, {
      alias: 'channels',
      ...operationOptions
    });
};

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