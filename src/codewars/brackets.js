function isBalanced(str) {
  const stack = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of str) {
    if (brackets[char]) {
      console.log(brackets[char]);
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (brackets[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isBalanced("()[]{}")); // true
// console.log(isBalanced("([)]")); // false
console.log(isBalanced("{[()]}")); // true
