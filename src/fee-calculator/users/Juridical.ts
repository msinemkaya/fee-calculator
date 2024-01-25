import { Person } from '../contracts';
import { Transaction } from '../types';

export default class Juridical implements Person {
  getAmountToBeProcessed({ operation } : Transaction) : number {
    return operation.amount;
  }

  getProcessedFee(calculatedAmount : number, percentage : number) : number {
    const fee = ((calculatedAmount * percentage) / 100);
    return Math.max(0.50, fee);
  }
}
