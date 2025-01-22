// function reverseArrayString(s: string[]): void {
//   s.reverse();
// }

// console.log(reverseArrayString(['H', 'e', 'l', 'l', 'o']));

function reverseString(str: string) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseString(str) {
  return [...str].reduce((acc, char) => char + acc, '');
}

function reverseString(str) {
  return Array.from(str).reduceRight((acc, char) => acc + char, '');
}

console.log(reverseString('Hello'));
