export type Transaction = {
  date: string,
  user_id: number,
  user_type: TransactionUser,
  type: TransactionType,
  operation: {
    amount: number,
    currency: string
  }
};

export type TransactionUser = 'natural' | 'juridical';
export type TransactionType = 'cash_in' | 'cash_out';
