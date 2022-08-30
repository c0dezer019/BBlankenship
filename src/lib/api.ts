import 'dotenv/config';
import { GraphQLClient } from 'graphql-request';

export const hygraph = new GraphQLClient(
  `https://api-us-east-1.hygraph.com/v2/${process.env.HYGRAPH_ID}/master`,
  {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH}`,
    },
  }
);

export const fetchPosts = async (query: string) => {
  const { posts } = await hygraph.request(query);

  return posts;
};
