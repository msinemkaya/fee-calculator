import { Transaction } from '../types';
import OperationFactory from './OperationFactory';
import { Operation } from '../contracts';

export default class OperationManager {
  constructor(private factory : OperationFactory) {
  }

  getOperation(transaction : Transaction): Operation {
    if (transaction.type === 'cash_in') {
      return this.factory.getCashIn();
    }
    if (transaction.type === 'cash_out') {
      return this.factory.getCashOut(transaction);
    }

    throw new Error('this transaction type does not exist');
  }
}
