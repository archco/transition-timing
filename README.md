# Transition Timing Functions

This library provides convenient methods that generating a transition [timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function#Timing_functions) such as easing or steps.

## Installation

``` sh
npm install transition-timing
```

``` js
import { easing } from 'transition-timing';

const ease = easing('ease');
```

## Usage

### TimingFunction

``` ts
/**
 * Timing function type.
 *
 * @param {number} t time ratio. from 0 to 1.
 * @returns {number} output ratio. from 0 to 1.
 */
type TimingFunction = (t: number) => number;
```

### cubicBezier

> This is method that renamed from the [bezier-easing](https://github.com/gre/bezier-easing#readme).

``` ts
function cubicBezier(mX1: number, mY1: number, mX2: number, mY2: number): TimingFunction;
```

### easing

> This is helper method for [cubicBezier](#cubicbezier).

``` ts
function easing(arg: string|number|[number, number, number, number], ...args: number[]): TimingFunction;
```

#### Examples

Please see information for [keywords for common timing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing_functions)

``` js
// using same as cubicBezier.
let ease = easing(0.25, 0.1, 0.25, 1);
let easeIn = easing([0.42, 0, 1, 1]);

// also can using by common keywords.
// common keywords: 'linear', 'ease', 'easeIn', 'easeOut' and 'easeInOut'.
let easeOut = easing('easeOut');
```

### steps

Please see information for [the steps timing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#The_steps()_class_of_timing_functions)

``` ts
function steps(num: number, direction: 'start'|'end'): TimingFunction;
```

## References

- [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function)
- [cubic bezier curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves)
- [step function](https://en.wikipedia.org/wiki/Step_function)
- [bezier-easing](https://github.com/gre/bezier-easing)
- [timing-functions](https://drafts.csswg.org/css-timing-1/#timing-functions)

## License

[The MIT License](https://github.com/archco/transition-timing/blob/master/LICENSE)
