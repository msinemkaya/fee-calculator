export default jest.fn().mockImplementation(() => (
  {
    getAmountToBeProcessed: jest.fn(),
    getProcessedFee: jest.fn(),
  }
));
