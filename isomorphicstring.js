var isIsomorphic = function (s, t) {
  if (typeof s === "string" && typeof t === "string") {
    if (s.length === t.length) {
      let obj1 = {};
      let obj2 = {};
      let a = true;
      for (let i = 0; i < s.length; i++) {
        if (!obj1.hasOwnProperty(s[i])) {
          obj1[s[i]] = t[i];
        }
        if (!obj2.hasOwnProperty(t[i])) {
          obj2[t[i]] = s[i];
        }
        if (obj1[s[i]] !== t[i] || obj2[t[i]] !== s[i]) {
          a = false;
        }
      }

      return a;
    }
  }
  return "pls give input as string";
};
isIsomorphic("foo", "bar");
