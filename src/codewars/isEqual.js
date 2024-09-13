//Написать функцию, которая сравнивает 2 объекта

const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Blue",
};

const car2 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Blue",
};

const car3 = {
  brand: "BMW",
  model: "X5",
  year: 2021,
  color: "Black",
  specifications: {
    engine: {
      type: "V6",
      horsepower: 335,
    },
    dimensions: {
      length: "4922 mm",
      width: "2004 mm",
      height: "1745 mm",
    },
  },
};

const car4 = {
  brand: "Audi",
  model: "A4",
  year: 2019,
  color: "White",
  specifications: {
    engine: {
      type: "I4",
      horsepower: 248,
    },
    dimensions: {
      length: "4762 mm",
      width: "1847 mm",
      height: "1431 mm",
    },
  },
};

const isObject = (obj) => {
  return obj !== null && typeof obj === "object";
};

const isEqual = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  const isNotSameLength = firstObjKeys.length !== secondObjKeys.length;
  if (isNotSameLength) {
    return false;
  }

  for (const key of firstObjKeys) {
    const firstObjValue = firstObj[key];
    const secondObjValue = secondObj[key];

    const isObjects = isObject(firstObjValue) && isObject(secondObjValue);
    const isNotEqualValues =
      (isObjects && !isEqual(firstObjValue, secondObjValue)) ||
      (!isObjects && firstObjValue !== secondObjValue);

    if (isNotEqualValues) {
      return false;
    }
  }

  return true;
};

console.log(isEqual(car1, car2));
