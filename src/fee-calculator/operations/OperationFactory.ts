import CashIn from './CashIn';
import { Transaction } from '../types';
import CashOut from './CashOut';
import WeeklyTransactionChecker from '../utils/WeeklyTransactionChecker';
import Juridical from '../users/Juridical';
import Natural from '../users/Natural';
import storeInstance from '../TransactionStore';
import config from '../config';

export default class OperationFactory {
  getCashIn(): CashIn {
    return new CashIn(config.CASH_IN_PERCENTAGE, config.CASH_IN_MAX_FEE);
  }

  getCashOut(transaction: Transaction): CashOut {
    if (transaction.user_type === 'juridical') {
      return new CashOut(new Juridical(config.JURIDICAL_MIN_FEE), config.CASH_OUT_PERCENTAGE);
    }

    if (transaction.user_type === 'natural') {
      return new CashOut(
        new Natural(new WeeklyTransactionChecker(storeInstance), config.NATURAL_WEEK_LIMIT),
        config.CASH_OUT_PERCENTAGE,
      );
    }

    throw new Error('this user type does not exist');
  }
}
