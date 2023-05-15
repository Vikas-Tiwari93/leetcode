const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function runningone(input) {
  const array = [];
  if (Array.isArray(input)) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] === 'number') {
        sum += input[i];
        array.push(sum);
      } else {
        return 'enter all array element as numbers';
      }
    }
  } else {
    console.log('please enter an array');
  }
  return array;
}

console.log(1, runningone(arr));

function runtwo(input) {
  let nextelm = 0;
  if (Array.isArray(input)) {
    const array = input.map((elm) => {
      if (typeof elm === 'number') {
        elm += nextelm;
        nextelm = elm;
      }
      return elm;
    });
    return array;
  }
  return console.log('please enter an array');
}
console.log(runtwo(arr));

// 3rd way object to get numbers in string.

function runningthree(input) {
  let sum = 0;
  const obj = {};
  if (Array.isArray(input)) {
    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] === 'number') {
        sum += input[i];
        obj[sum] = i;
      } else {
        return 'give all elements as numbers';
      }
    }
    return Object.keys(obj);
  }
  return 'give a proper array';
}
console.log(3, runningthree(arr));
