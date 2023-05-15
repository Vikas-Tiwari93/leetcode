let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function pivot(input) {
  if (Array.isArray(input) && input.length > 2) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
      sum += input[i];
    }
    let leftsum = 0;
    let rightsum = sum;
    for (let j = 0; j < input.length; j++) {
      if (leftsum !== rightsum && && j!==input.length-1) {
        leftsum = leftsum + input[j - 1] || 0;
        rightsum = rightsum - input[j];
      } else if (leftsum === rightsum) {
        return j - 1;
      } else if(leftsum !== rightsum && j===input.length-1) {
        return -1
      }
    }
  } else console.log("enter a valid array oinput");
}
console.log(pivot(arr));
