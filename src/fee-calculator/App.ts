import * as path from 'path';
import { TransactionReader } from './contracts';
import { Calculator } from './Calculator';
import { Transaction } from './types';
import JsonReader from './readers/JsonReader';
import OperationManager from './operations/OperationManager';
import OperationFactory from './operations/OperationFactory';

class App {
  constructor(
    private readonly reader : TransactionReader,
    private readonly calculator : Calculator,
    private readonly operationManager : OperationManager,
  ) {}

  run(callback : (transaction : Transaction) => void) {
    this.reader.getTransactions().forEach((transaction) => {
      callback(transaction);
      this.calculator.calculate(transaction, this.operationManager.getOperation(transaction));
    });
  }
}

export function createApp(dirname : string) {
  const reader = new JsonReader(path.join(dirname, 'input.json'));
  const calculator = new Calculator();
  const operationFactory = new OperationFactory();
  const operationManager = new OperationManager(operationFactory);
  return new App(reader, calculator, operationManager);
}
