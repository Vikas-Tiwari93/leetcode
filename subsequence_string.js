function sequence(input1, input2) {
  if (typeof input1 === "string" && typeof input2 === "string") {
    let obj1 = {};
    let checkstrL;
    let checkstrS;
    let a = true;
    if (input2.length >= input2.length) {
      checkstrL = input2;
      checkstrS = input1;
    } else {
      checkstrL = input1;
      checkstrS = input2;
    }

    for (let i = 0; i < checkstrL.length; i++) {
      obj1[checkstrL[i]] = i;
    }
    console.log(obj1, 1);
    for (let j = 0; j < checkstrS.length; j++) {
      if (
        !obj1.hasOwnProperty(checkstrS[j]) ||
        obj1[checkstrS[j]] > obj1[checkstrS[j + 1]]
      ) {
        a = false;
        break;
      } else if (obj1.hasOwnProperty(checkstrS[j])) {
        let a = checkstrS[j];
        delete obj1[a];
      }
    }
    console.log(obj1);
    return a;
  } else {
    return "enter a string";
  }
}

console.log(sequence("leetcode", "yyy"));
