function solution(string) {
  const arr = string.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr.splice(i, 0, " ");
      i++;
    }
  }

  return arr.join("");
}

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

console.log(solution("camelCasing"));
