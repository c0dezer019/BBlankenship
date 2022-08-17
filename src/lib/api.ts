import 'dotenv/config';
import { GraphQLClient, gql } from 'graphql-request';

export const hygraph = new GraphQLClient(
  'https://api-us-east-1.hygraph.com/v2/cl6wnkklf4icw01um76wr9f5c/master',
  {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH}`,
    },
  }
);

export const fetchAllPosts = async (query: string) => {
  const { posts } = await hygraph.request(query);

  return posts;
};
