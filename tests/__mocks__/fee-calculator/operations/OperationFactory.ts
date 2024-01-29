jest.mock('../../../../src/fee-calculator/operations/CashOut')

export default jest.fn().mockImplementation(() => (
  {
    getCashIn: jest.fn(),
    getCashOut: jest.fn(),
  }
));
