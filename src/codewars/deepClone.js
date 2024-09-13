const obj = {
  a: {
    b: {
      c: {
        d: {
          e: "k",
        },
      },
    },
  },
};

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

const clone = deepClone(obj);
console.log(clone);
