const a: number = 0;
const b: number = 0;

const add = (a: number, b: number) => {
  const c = a + b;
  return c;
};

const substract = (a: number, b: number) => {
  const c = a - b;
  return c;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const cout = (a: number): number => {
  a = multiply(5, 4);
  return a;
};

const w = (b: number): number => {
  b = divide(9, 3);
  return b;
};

console.log(`addition of ${cout(a)} and ${w(b)}:`, add(cout(a), w(b)));

console.log(
  `substraction of ${cout(a)} and ${w(b)}:`,
  substract(cout(a), w(b))
);
console.log(`division of ${cout(a)} and ${w(b)}:`, divide(cout(a), w(b)));
