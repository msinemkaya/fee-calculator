import { createApp } from '../../../src/fee-calculator/App';

describe('app', () => {
  it('should have a method called run', () => {
    const received = createApp('mock-dir-name');
    expect(received).toHaveProperty('run');
    expect(typeof received.run).toBe('function');
  });
});
