import 'dotenv/config';

import fs from 'fs';
import { GraphQLClient } from 'graphql-request';
import _ from 'lodash';
import { log } from 'next-axiom';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  EMode,
  EQuery,
} from '../lib/enums';
import {
  iCollection,
  iContactMethods,
  iMode,
} from '../lib/types';

export const hygraph = new GraphQLClient(
  `https://api-us-east-1.hygraph.com/v2/${process.env.HYGRAPH_ID}/master`,
  {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH}`,
    },
  }
);

const _loadFile = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return fs.readFileSync(
    path.join(__dirname, '../lib/graphql/collections.json'),
    'utf-8'
  );
}

export const fetcher = (mode: EMode, q: EQuery): (kwargs: string) => Promise<boolean | iContactMethods> => {
  const json = JSON.parse(_loadFile());
  const n: iMode = _.nth(json.item, _.findIndex(['name', mode.valueOf()]))!;
  const collection: iCollection = _.chain(n.item).find({ name: q }).get('request.body.graphql').value();
  const { query } = collection;

  let { variables } = collection;

  const execute = async(kwargs = ''): Promise<boolean | iContactMethods> => {
    if (kwargs) {
      variables = kwargs;
    }

    try {
      const result: iContactMethods = await hygraph
        .request(query.replace(/(\n)/gmi, ''), variables.replace(/(\n)/gmi, ''));

      return result;
    } catch (err) {
      log.debug('Failed to retrieve requested data', { mode: mode, q: query, query: query, variables: variables });

      return false;
    }
  };

  return execute;
};
