import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BorrowedItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BorrowedItem {
  readonly id: string;
  readonly book?: Book | null;
  readonly borrowed_date: string;
  readonly return_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly borrowedItemBookId?: string | null;
  constructor(init: ModelInit<BorrowedItem, BorrowedItemMetaData>);
  static copyOf(source: BorrowedItem, mutator: (draft: MutableModel<BorrowedItem, BorrowedItemMetaData>) => MutableModel<BorrowedItem, BorrowedItemMetaData> | void): BorrowedItem;
}

export declare class Book {
  readonly id: string;
  readonly title: string;
  readonly isbn?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly author?: string | null;
  readonly donor?: string | null;
  readonly available?: boolean | null;
  readonly borrowed?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Book, BookMetaData>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}