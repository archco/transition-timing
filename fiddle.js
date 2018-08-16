const { easing } = require('./dist/transition-timing.js');

function decimal(num, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}

function showOutput(timeFn) {
  const points = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
  for (const i of points) {
    const o = timeFn(i);
    console.log(`time: ${i}, output: ${decimal(o, 4)}`);
  }
}

function log(name) {
  console.log(`Transition Timing Function "${name}": \n`);
  showOutput(easing(name));
  console.log('\n');
}

log('linear');
log('ease');
log('easeIn');
log('easeOut');
log('easeInOut');
