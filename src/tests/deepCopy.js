function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copy = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const obj = {
  name: 'John',
  age: 30,
  profession: 'developer',
  address: {
    city: 'New York',
    country: 'USA'
  },
  skills: ['HTML', 'CSS', 'JavaScript'],
  experience: [
    {
      company: 'Company A',
      position: 'Software Engineer',
      duration: '2 years'
    },
    {
      company: 'Company B',
      position: 'Marketing Manager',
      duration: '1 year'
    }
  ]
};

const deepCopyObj = deepCopy(obj);

console.log(deepCopyObj === obj); // false
console.log(deepCopyObj.address === obj.address); // false
console.log(JSON.stringify(deepCopyObj) === JSON.stringify(obj)); // false
