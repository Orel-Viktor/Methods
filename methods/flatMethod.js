// method flat через reduce и concat

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice;
}
const myArr = [1, 2, [3, 4, [5, 6, [7, 8]]], 9, 10, [11, 12]];
const newArr = flatDeep(myArr, Infinity);
console.log("method flat", myArr, "Не меняет обрабатываемый масив");
console.log("method flat", newArr, "Возвращает новый масив");
