import { Transaction } from '../../../../src/fee-calculator/types';

const cashOutTransactions = [
  {
    transaction: {
      user_type: 'natural',
      operation: {
        amount: 1001000.00,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 1000000.00,
    expected: 3000,
  },
  {
    transaction: {
      user_type: 'natural',
      operation: {
        amount: 100.00,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 0,
    expected: 0,
  },
  {
    transaction: {
      user_type: 'juridical',
      operation: {
        amount: 100.00,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 100,
    expected: 0.03,
  },
  {
    transaction: {
      user_type: 'juridical',
      operation: {
        amount: 678.34,
        currency: 'EUR',
      },
    } as Transaction,
    shouldReturn: 678.34,
    expected: 0.20,
  },
];

export default cashOutTransactions;
