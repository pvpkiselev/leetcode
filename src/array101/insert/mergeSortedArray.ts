//Вам даны два массива nums1 и nums2, отсортированные в порядке возрастания , и два целых числа m и n, представляющие количество элементов в nums1 и nums2 соответственно.

//Объединить в один массив, отсортированный в nums1 возрастающем порядке

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
