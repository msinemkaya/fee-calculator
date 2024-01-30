import { Transaction } from '../../../src/fee-calculator/types';

const calculatedTransactions = [
  {
    transaction: {
      date: '2016-01-05',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_in',
      operation: {
        amount: 200.00,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 0.06,
    expected: '0.06',
  },
  {
    transaction: {
      date: '2016-01-05',
      user_id: 2,
      user_type: 'juridical',
      type: 'cash_out',
      operation: {
        amount: 300.00,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 0.9,
    expected: '0.90',
  },
  {
    transaction: {
      date: '2016-01-05',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: {
        amount: 2000.00,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 5.7,
    expected: '5.70',
  },
  {
    transaction: {
      date: '2016-01-05',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_in',
      operation: {
        amount: 50.69,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 0.015,
    expected: '0.02',
  },
];

export default calculatedTransactions;
