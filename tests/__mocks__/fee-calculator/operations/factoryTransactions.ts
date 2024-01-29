import { Transaction } from '../../../../src/fee-calculator/types';

export const juridicalTransaction : Transaction = { user_type: 'juridical' } as Transaction;
export const naturalTransaction : Transaction = { user_type: 'natural' } as Transaction;
export const unknownTransaction : Transaction = { user_type: 'gibberish' } as unknown as Transaction;
