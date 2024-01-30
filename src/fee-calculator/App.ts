import * as path from 'path';
import { TransactionReader } from './contracts';
import Calculator from './Calculator';
import JsonReader from './readers/JsonReader';
import OperationManager from './operations/OperationManager';
import OperationFactory from './operations/OperationFactory';

class App {
  constructor(
    private readonly reader : TransactionReader,
    private readonly calculator : Calculator,
    private readonly operationManager : OperationManager,
  ) {}

  run(callback : (fee : string) => void) {
    this.reader.getTransactions().forEach((transaction) => {
      const fee = this.calculator.calculateFee(
        transaction,
        this.operationManager.getOperation(transaction),
      );
      callback(fee);
    });
  }
}

const createApp = (dirname : string) => {
  const reader = new JsonReader(path.join(dirname, 'input.json'));
  const calculator = new Calculator();
  const operationFactory = new OperationFactory();
  const operationManager = new OperationManager(operationFactory);
  return new App(reader, calculator, operationManager);
};

export default createApp;
