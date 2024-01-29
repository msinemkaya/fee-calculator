import { Transaction } from '../../../src/fee-calculator/types';

export const transactionMap = new Map([
  [
    1,
    [
      { user_id: 1 } as Transaction,
      { user_id: 1 } as Transaction,
    ],
  ],
  [
    2,
    [
      { user_id: 2 } as Transaction,
    ],
  ],
]);
