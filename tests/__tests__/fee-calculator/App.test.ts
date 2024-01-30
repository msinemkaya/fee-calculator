import createApplication from '../../../src/fee-calculator/App';

describe('app', () => {
  it('should have a method called run', () => {
    const received = createApplication('mock-dir-name');
    expect(received).toHaveProperty('run');
    expect(typeof received.run).toBe('function');
  });
});
