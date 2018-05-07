import { steps } from '../src/steps';

describe('#steps', () => {
  it('2 steps, start.', () => {
    const fn = steps(2, 'start');
    expect(fn(0.25)).toBeCloseTo(0.5);
    expect(fn(0.75)).toBeCloseTo(1);
  });

  it('4 steps, end.', () => {
    const fn = steps(4, 'end');
    expect(fn(0.2)).toBeCloseTo(0);
    expect(fn(0.4)).toBeCloseTo(0.25);
    expect(fn(0.6)).toBeCloseTo(0.5);
    expect(fn(0.8)).toBeCloseTo(0.75);
    expect(fn(1)).toBeCloseTo(1);
  });
});
