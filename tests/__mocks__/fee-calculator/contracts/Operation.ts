export default jest.fn().mockImplementation(() => (
  {
    getCommissionFee: jest.fn(),
  }
));
