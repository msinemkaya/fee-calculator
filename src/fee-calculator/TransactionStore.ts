import { Transaction } from './types';

export class TransactionStore {
  constructor(private data : Map<number, Transaction[]>) {
  }

  get(userId : number) : Transaction[] {
    return this.data.get(userId) || [];
  }

  set(transaction : Transaction): void {
    const userTransactions = this.get(transaction.user_id);
    userTransactions.push(transaction);
    this.data.set(transaction.user_id, userTransactions);
  }
}

export default new TransactionStore(new Map());
