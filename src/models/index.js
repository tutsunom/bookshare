// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BorrowedItem, Book } = initSchema(schema);

export {
  BorrowedItem,
  Book
};