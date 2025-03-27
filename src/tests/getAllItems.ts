// Напишите тело функции getAllItems.
// Она должна возвращать плоский список, содержащий все id со всех уровней вложенности:
// переданного item, его детей, детей его детей и так далее.

export interface Item {
  id: string;
  children?: Item[];
}

export const getAllItems = (item: Item): string[] => {
  const result = [];
  result.push(item.id);

  const child = item.children;

  if (!child) {
    return result;
  }

  if (child) {
    for (const i of child) {
      result.push(...getAllItems(i));
    }
  }

  return result;

  throw new Error('Not implemented');
};

console.log(getAllItems({ id: '1', children: [{ id: '2', children: [{ id: '3' }] }] }));
