import { Transaction } from '../../../../src/fee-calculator/types';

export const naturalAmountCalculations = [
  {
    transaction: {
      date: '2016-01-06',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 30000, currency: 'EUR' },
    } as Transaction,
    shouldReturn: [],
    expected: 29000,
  },
  {
    transaction: {
      date: '2016-01-07',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 1000.00, currency: 'EUR' },
    } as Transaction,
    shouldReturn: [
      {
        date: '2016-01-06',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: { amount: 30000, currency: 'EUR' },
      } as Transaction,
    ],
    expected: 1000,
  },
  {
    transaction: {
      date: '2016-01-15',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 1000.00, currency: 'EUR' },
    } as Transaction,
    shouldReturn: [],
    expected: 0,
  },
];
