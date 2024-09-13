// Нужна функция, которая принимает массив объектов,
// возвращает объект с ключами равными id из каждого объекта,
// а значением будет сам объект с id

function getMapFromArray(arr) {
  const result = arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

  return result;
}

console.log(
  getMapFromArray([
    { id: 1, name: "Vasya" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Kolya" },
    { id: 4, name: "Sasha" },
  ])
);
