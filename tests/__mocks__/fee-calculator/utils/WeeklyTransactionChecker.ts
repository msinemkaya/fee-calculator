export default jest.fn().mockImplementation(() => (
  {
    getWeeklyHistory: jest.fn(),
    addToHistory: jest.fn(),
  }
));
