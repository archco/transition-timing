import cubicBezier from 'bezier-easing';

export as namespace TransitionTiming;

export { cubicBezier };

export type TimingFunction = (t: number) => number;

export interface CommonKeywords {
  [index: string]: [number, number, number, number];
}

/**
 * Keywords for common timing functions. 'linear', 'ease', 'easeIn', 'easeOut' and 'easeInOut'.
 * @see https://drafts.csswg.org/css-timing-1/#timing-functions
 */
export const Common: CommonKeywords;

/**
 * Generate steps timing function.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#The_steps()_class_of_timing_functions
 *
 * @export
 * @param {number} num
 * @param {('start'|'end')} direction
 * @returns {TimingFunction}
 */
export function steps(num: number, direction: 'start'|'end'): TimingFunction;

/**
 * The helper method for cubicBezier.
 *
 * @export
 * @param {...any[]} args 4 number arguments or common keyword. e.g. [0, 0, 1, 1] or 'linear'.
 * @returns {TimingFunction}
 */
export function easing(...args: any[]): TimingFunction;
