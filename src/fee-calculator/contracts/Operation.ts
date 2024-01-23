import { Transaction } from '../types';

export interface Operation {
  getCommissionFee(transaction: Transaction): number
}
