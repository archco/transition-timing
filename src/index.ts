import cubicBezier from 'bezier-easing';
import { steps, TimingFunction } from './steps';

export { cubicBezier, steps, TimingFunction };

export interface CommonKeywords {
  [index: string]: [number, number, number, number];
}

// @link https://drafts.csswg.org/css-timing-1/#timing-functions
export const Common: CommonKeywords = {
  linear: [0.0, 0.0, 1.0, 1.0],
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
};

export function easing(arg: string|number|[number, number, number, number], ...args: number[]): TimingFunction {
  let numbers = [];
  if (typeof arg === 'string') {
    numbers = Common[arg];
    if (!numbers) {
      throw new ReferenceError('Wrong common keyword. available common keywords is linear, ease, easeIn, easeOut or easeInOut.');
    }
  } else if (Array.isArray(arg)) {
    numbers = arg;
  } else if (typeof arg === 'number' && args.length === 3) {
    numbers = [arg, ...args];
  } else {
    throw new TypeError('Wrong arguments.');
  }
  const [x1, y1, x2, y2] = numbers;
  return cubicBezier(x1, y1, x2, y2);
}
