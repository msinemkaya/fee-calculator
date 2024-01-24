import { Transaction } from './types';
import { Operation } from './contracts';

export class Calculator {
  calculateFee(transaction : Transaction, operation : Operation) : string {
    const baseFee = operation.getCommissionFee(transaction);
    const roundedFee = Math.ceil(baseFee * 100) / 100;
    return roundedFee.toFixed(2);
  }
}
