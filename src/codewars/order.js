function order(words) {
  const arr = words.split(' ');

  const result = arr.sort((a, b) => {
    return a.match(/\d/g).join('') - b.match(/\d/g).join('');
  });

  return result.join(' ');
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
