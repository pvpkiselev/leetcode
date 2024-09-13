function fizzBuzz() {
  const maxNum = 100;
  const fizz = "Fizz";
  const buzz = "Buzz";
  const fizzBuzz = fizz + buzz;

  for (let i = 0; i <= maxNum; i++) {
    if (i % 5 === 0 && i % 3 == 0) {
      console.log(fizz);
    } else if (i % 5 === 0) {
      console.log(buzz);
    } else if (i % 3 == 0) {
      console.log(fizzBuzz);
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz());
