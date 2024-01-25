import { Operation, Person } from '../contracts';
import { Transaction } from '../types';

export class CashOut implements Operation {
  constructor(private userType : Person, private readonly percentage: number) {
  }

  getCommissionFee(transaction : Transaction) : number {
    const calculatedAmount = this.userType.getAmountToBeProcessed(transaction);
    return this.userType.getProcessedFee(calculatedAmount, this.percentage);
  }
}
