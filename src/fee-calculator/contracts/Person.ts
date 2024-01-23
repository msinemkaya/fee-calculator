import { Transaction } from '../types';

export interface Person {
  calculateFee(transaction : Transaction) : number
}
