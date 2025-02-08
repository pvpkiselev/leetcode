// Тест: // Преварительная задача, в решении учитывать что объектов может быть
// условно миллиард, а типов миллион, исходить из необходимости максимально снизить затраты по времени и ресурсам
// Написать функцию вывода строкой через запятую названий (name) объектов
// Брать только объекты связанные с типами у которых class="Устройства"

//Объекты
const objects = [
  { id: 1, name: 'Test 1', object_type: 1 },
  { id: 2, name: 'Test 2', object_type: 1 },
  { id: 3, name: 'Test 3', object_type: 2 },
  { id: 4, name: 'Test 4', object_type: 3 }
];

//Типы
const object_types = [
  { id: 1, class: 'Устройства' },
  { id: 2, class: 'Устройства' },
  { id: 3, class: 'Порты' },
  { id: 4, class: 'Кабели' }
];

function objectsToString(objects, types) {
  let resultString = '';

  for (let i = 0; i < objects.length; i++) {
    if (types[objects[i].object_type].class === 'Устройства') {
      resultString += objects[i].name + ', ';
    }
  }

  return resultString;
}

// function objectsToString(objects, types) {
//   return objects
//     .filter((object) => types[object.object_type - 1].class === 'Устройства')
//     .map((object) => object.name)
//     .join(', ');
// }

console.log(objectsToString(objects, object_types));
