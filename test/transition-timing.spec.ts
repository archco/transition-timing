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

  it('available argument type is string, 4 number args or 4 number array.', () => {
    // keyword string.
    expect(typeof easing('ease')).toBe('function');
    // 4 numbers.
    expect(typeof easing(0.0, 0.0, 1.0, 1.0)).toBe('function');
    // an array includes 4 numbers
    expect(typeof easing([0.0, 0.0, 1.0, 1.0])).toBe('function');
  });

  it('throw type error if gave wrong arguments.', () => {
    expect(() => easing(4)).toThrowError(TypeError);
  });

  it('throw error if gave wrong name.', () => {
    expect(() => easing('wrong')).toThrowError(ReferenceError);
  });
});
