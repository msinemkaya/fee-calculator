import { CashIn } from './CashIn';
import { Transaction } from '../types';
import { CashOut } from './CashOut';
import WeeklyTransactionChecker from '../utils/WeeklyTransactionChecker';
import Juridical from '../users/Juridical';
import Natural from '../users/Natural';
import storeInstance from '../TransactionStore';

export default class OperationFactory {
  getCashIn(): CashIn {
    return new CashIn(0.03, 5);
  }

  getCashOut(transaction: Transaction): CashOut {
    if (transaction.user_type === 'juridical') {
      return new CashOut(new Juridical(), 0.3);
    }

    if (transaction.user_type === 'natural') {
      return new CashOut(new Natural(new WeeklyTransactionChecker(storeInstance)), 0.3);
    }

    throw new Error('this user type does not exist');
  }
}
