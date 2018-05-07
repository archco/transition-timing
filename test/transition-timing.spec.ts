import { easing } from '../src/index';

describe('#easing', () => {
  it('linear', () => {
    const linear = easing('linear');
    expect(linear(0.25)).toBeCloseTo(0.25);
    expect(linear(0.75)).toBeCloseTo(0.75);
  });

  it('easeIn', () => {
    const easeIn = easing('easeIn');
    expect(easeIn(0)).toEqual(0);
    expect(easeIn(0.5)).toBeLessThan(0.4);
    expect(easeIn(1)).toEqual(1);
  });
});
