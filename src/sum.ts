type test = (a: number, b: number) => number;

const sum: test = (a, b) => a + b;

const minus: test = (a, b) => a - b;

export { sum, minus };
