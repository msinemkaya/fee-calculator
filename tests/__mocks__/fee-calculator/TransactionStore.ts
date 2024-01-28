export default jest.fn().mockImplementation(() => (
  {
    get: jest.fn(),
    set: jest.fn(),
  }
));
