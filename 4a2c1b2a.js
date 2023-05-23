function stringcount(input) {
  let count = 1;
  let string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count += 1;
    } else {
      string = string + input[i] + count;
      count = 1;
    }
  }
  console.log(string);
}
stringcount("aaaabbbaacccc");
