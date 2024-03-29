import { Transaction } from '../../../../src/fee-calculator/types';

const juridicalAmountCalculations : Transaction[] = [
  {
    operation:
      {
        amount: 52.05,
        currency: 'EUR',
      },
  } as Transaction,
  {
    operation:
      {
        amount: 12000,
        currency: 'EUR',
      },
  } as Transaction,
  {
    operation:
      {
        amount: 1980.73,
        currency: 'EUR',
      },
  } as Transaction,
];

export default juridicalAmountCalculations;
