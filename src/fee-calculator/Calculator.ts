import { Transaction } from './types';
import { Operation } from './contracts';

export class Calculator {
  calculate(transaction : Transaction, operation : Operation) {
    return operation.getCommissionFee(transaction);
  }
}
