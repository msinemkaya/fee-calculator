import * as fs from 'fs';
import { TransactionReader } from '../contracts';
import { Transaction } from '../types';

export default class JsonReader implements TransactionReader {
  constructor(private readonly filePath : string) {
  }

  getTransactions() : Transaction[] {
    let parsedData = [];
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      parsedData = JSON.parse(data.toString());
    } catch (e) {
      throw new Error('file could not be read or does not exist');
    }

    return parsedData;
  }
}
