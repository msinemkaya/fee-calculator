import { Transaction } from '../../../../src/fee-calculator/types';

export const cashInTransaction = { type: 'cash_in' } as Transaction;
export const cashOutTransaction = { type: 'cash_out' } as Transaction;
export const unknownTransaction = { type: 'gibberish' } as unknown as Transaction;
