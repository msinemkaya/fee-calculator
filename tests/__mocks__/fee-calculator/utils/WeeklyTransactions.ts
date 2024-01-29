import { Transaction } from '../../../../src/fee-calculator/types';

export const mockWeeklyTransactions = [
  {
    transaction: {
      date: '2016-01-05',
      user_id: 1,
    } as Transaction,
    shouldReturn: [],
    expected: [],
  },
  {
    transaction: {
      date: '2016-01-07',
      user_id: 1,
    } as Transaction,
    shouldReturn: [
      {
        date: '2016-01-05',
        user_id: 1,
      } as Transaction,
    ],
    expected: [
      {
        date: '2016-01-05',
        user_id: 1,
      } as Transaction,
    ],
  },
  {
    transaction: {
      date: '2016-01-17',
      user_id: 1,
    } as Transaction,
    shouldReturn: [
      {
        date: '2016-01-05',
        user_id: 1,
      } as Transaction,
      {
        date: '2016-01-16',
        user_id: 1,
      } as Transaction,
    ],
    expected: [
      {
        date: '2016-01-16',
        user_id: 1,
      } as Transaction,
    ],
  },
];
