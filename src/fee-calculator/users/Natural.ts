import { Person } from '../contracts';
import { Transaction } from '../types';

export default class Natural implements Person {
  calculateFee(transaction : Transaction) : number {
    return 0;
  }
}
