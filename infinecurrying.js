function curry(x) {
  return function (y) {
    if (!y) return x;
    return curry(x + y);
  };
}

console.log(curry(1)(2)(3)(4)());

const addition = (a) => (b) => b ? addition(a + b) : a;
const res = addition(4)(3)(2)(1)();
console.log(res);
