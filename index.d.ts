import cubicBezier from 'bezier-easing';

export as namespace TransitionTiming;

export { cubicBezier };

/**
 * Timing function type.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Timing_functions
 *
 * @param {number} t time ratio. from 0 to 1.
 * @returns {number} output ratio. from 0 to 1.
 */
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
 * @param {number} num number of steps
 * @param {'start'|'end'} direction step direction 'start' or 'end'
 * @returns {TimingFunction}
 */
export function steps(num: number, direction: 'start'|'end'): TimingFunction;

/**
 * The helper method for cubicBezier.
 *
 * @param {string|number|[number, number, number, number]} arg array of 4 numbers or common keyword: `linear`, `ease`, `easeIn`, `easeOut` or `easeInOut`.
 * @param {...number[]} args other way you could give 4 numbers as arguments. e.g. `easing(0, 0, 1, 1)`
 * @returns {TimingFunction}
 */
export function easing(arg: string|number|[number, number, number, number], ...args: number[]): TimingFunction;
