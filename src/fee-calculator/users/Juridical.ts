import { Person } from '../contracts';
import { Transaction } from '../types';

export default class Juridical implements Person {
  calculateFee(transaction : Transaction) : number {
    return 0;
  }
}
