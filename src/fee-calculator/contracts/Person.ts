import { Transaction } from '../types';

export interface Person {
  getAmountToBeProcessed(transaction : Transaction) : number
  getProcessedFee(calculatedAmount : number, percentage : number) : number
}
