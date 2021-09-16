import { createClient } from 'microcms-js-sdk';
export const client = createClient({
  serviceDomain: 'ramen-matome',
  apiKey: `${process.env.API_KEY}`,
});