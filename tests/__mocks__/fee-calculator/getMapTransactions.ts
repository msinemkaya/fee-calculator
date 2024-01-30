import { Transaction } from '../../../src/fee-calculator/types';

const getMapTransactions = [
  {
    userId: 1,
    expected: [
      { user_id: 1 } as Transaction,
      { user_id: 1 } as Transaction,
    ],
  },
  {
    userId: 3,
    expected: [],
  },
];

export default getMapTransactions;
