/* 
   - in loop add elements to an object and add count as value
   -{inpit[i]:count}
   -output[(0),(2),(3)....(k-1)] k<input.length
*/

function frequent(input, k) {
  if (k <= input.length) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
      let count = 1;
      if (!obj.hasOwnProperty(input[i])) {
        obj[input[i]] = count;
      } else {
        obj[input[i]] = obj[input[i]] + 1;
      }
    }
    let objkey = Object.keys(obj);
    let output = [];
    for (let i = 0; i < k; i++) {
      for (let j = 0; j < objkey.length; j++) {
        if (j === 0) {
          output.push(objkey[i]);
        } else if (
          obj[objkey[j]] >= obj[output[i]] &&
          objkey[j] !== output[i - 1]
        ) {
          output.pop();
          output.push(objkey[j]);
        }
        console.log(output);
      }
    }
  }
}
frequent(
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4,
    4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
  ],
  2
);
