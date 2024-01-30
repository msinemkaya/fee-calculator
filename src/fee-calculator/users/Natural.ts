import { Person } from '../contracts';
import { Transaction } from '../types';
import WeeklyTransactionChecker from '../utils/WeeklyTransactionChecker';

export default class Natural implements Person {
  constructor(
    private weeklyTransactionChecker : WeeklyTransactionChecker,
    private readonly weekLimit : number,
  ) {}

  getAmountToBeProcessed(transaction : Transaction) : number {
    const { amount } = transaction.operation;
    const weeklyData = this.weeklyTransactionChecker.getWeeklyHistory(transaction);
    const amountHistory = weeklyData.reduce((acc, data) => acc + data.operation.amount, 0);
    const totalAmount = amountHistory + amount;

    this.weeklyTransactionChecker.addToHistory(transaction);
    if (amountHistory <= this.weekLimit) return Math.max(0, totalAmount - this.weekLimit);
    return amount;
  }

  getProcessedFee(calculatedAmount : number, percentage : number) : number {
    return ((calculatedAmount * percentage) / 100);
  }
}
