import { CashIn } from './CashIn';
import { Transaction } from '../types';
import { CashOut } from './CashOut';
import Juridical from '../users/Juridical';
import Natural from '../users/Natural';

export default class OperationFactory {
  getCashIn(): CashIn {
    return new CashIn();
  }

  getCashOut(transaction: Transaction): CashOut {
    if (transaction.user_type === 'juridical') {
      return new CashOut(new Juridical());
    }

    if (transaction.user_type === 'natural') {
      return new CashOut(new Natural());
    }

    throw new Error('this user type does not exist');
  }
}
