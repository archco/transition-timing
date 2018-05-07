export type TimingFunction = (t: number) => number;

export function steps(num: number, direction: 'start'|'end'): TimingFunction {
  const isStart = direction === 'start' ? true : false;
  return (t: number) => {
    switch (t) {
      case 0: return 0;
      case 1: return 1;
    }
    for (let i = 1; i <= num; i++) {
      const p = i / num;
      if (p > t) {
        return isStart ? p : (i - 1) / num;
      }
    }
  };
}
