import * as cubicBezier from 'bezier-easing';
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

export function easing(...args: any[]): TimingFunction {
  let numbers = [];
  if (args.length === 1 && typeof args[0] === 'string') {
    numbers = Common[args[0]];
  } else if (args.length === 1 && Array.isArray(args[0])) {
    numbers = args[0];
  } else if (args.length === 4 && args.every(a => typeof a === 'number')) {
    numbers = args;
  } else {
    throw new TypeError('Wrong arguments.');
  }
  const [x1, y1, x2, y2] = numbers;
  return cubicBezier(x1, y1, x2, y2);
}
