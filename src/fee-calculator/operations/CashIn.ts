import { Operation } from '../contracts';
import { Transaction } from '../types';

export default class CashIn implements Operation {
  constructor(private readonly percentage : number, private readonly max : number) {
  }

  getCommissionFee(transaction : Transaction) : number {
    const fee = ((transaction.operation.amount * this.percentage) / 100);
    return Math.min(fee, this.max);
  }
}
