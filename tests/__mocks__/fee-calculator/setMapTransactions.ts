import { Transaction } from '../../../src/fee-calculator/types';

const setMapTransactions = [
  {
    transaction: {
      user_id: 4,
    } as Transaction,

    expected: [
      4,
      [
        { user_id: 4 } as Transaction,
      ],
    ],
  },
  {
    transaction: {
      user_id: 1,
    } as Transaction,

    expected: [
      1,
      [
        { user_id: 1 } as Transaction,
        { user_id: 1 } as Transaction,
        { user_id: 1 } as Transaction,
      ],
    ],
  },
];

export default setMapTransactions;
