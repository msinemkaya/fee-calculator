import { Operation, Person } from '../contracts';
import { Transaction } from '../types';

export class CashOut implements Operation {
  constructor(private userType : Person) {
  }

  getCommissionFee(transaction : Transaction) : number {
    return this.userType.calculateFee(transaction);
  }
}
