import moment from 'moment';
import { TransactionStore } from '../TransactionStore';
import { Transaction } from '../types';

export default class WeeklyTransactionChecker {
  constructor(private transactionStore : TransactionStore) {
  }

  getWeeklyHistory(transaction : Transaction) : Transaction[] {
    return this.transactionStore.get(transaction.user_id)
      .filter((data) => moment(data.date).isoWeek() === moment(transaction.date).isoWeek());
  }

  addToHistory(transaction : Transaction) {
    this.transactionStore.set(transaction);
  }
}
