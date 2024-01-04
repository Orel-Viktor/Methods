// Сортировка пузыриком\\
function bublleSort(arr) {
  let leng = arr.length;
  for (let i = 0; i < leng; i++) {
    for (let n = 0; n < leng - 1 - i; n++) {
      if (arr[n] > arr[n + 1]) {
        const temp = arr[n];
        arr[n] = arr[n + 1];
        arr[n + 1] = temp;
      }
    }
  }
  return arr;
}
const myArray = [3, 2, 1, 5, 8, 6, 12, 0];
const sortArray = bublleSort(myArray.slice());
console.log(
  "исходный масив",
  myArray.slice(),
  "сортировка пузыриком",
  sortArray
);

//Быстрая сотрировка - рекурсивно\\
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const initValue = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (initValue > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), initValue, ...quickSort(right)];
}
const myArray1 = [4, 3, 21, 45, 2, 17, 0, 23, 1, 6];
const sortArray1 = quickSort(myArray1.slice());
console.log(
  "исходный масив",
  myArray1.slice(),
  "бЫстрая сортировка",
  sortArray1
);
