// function count(item, arr) {
//   let count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == item) count++;
//   }
//   return count;
// }
// function mang(arr) {
//   let max = 0;
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let _count = count(arr[i], arr);
//     if (_count > max) {
//       max = _count;
//       result = arr[i];
//     }
//   }
//   return result;
// }
// console.log(mang([1, 2, 3, 4, 1, 4, 5]));

// function count(item, arr) {
//   let count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === item) count++;
//   }
//   return count;
// }
// function mang(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let _count = count(arr[i], arr);
//     if (_count > max) {
//       max = _count;
//     }
//   }
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (count(arr[i], arr) === max && result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(mang([1, 2, 3, 4, 1, 4, 5, 5]));

function descendingArrangement(array8) {
  const length = array8.length;
  let dev = [];
  for (let i = length - 1; i >= 0; i--) {
    dev[i] = [];
    for (let j = 1; j <= i; j++) {
      dev[i].push(j);
      if (array8[j - 1] < array8[j]) {
        let temp = array8[j - 1];
        array8[j - 1] = array8[j];
        array8[j] = temp;
      }
    }
  }
  let x;
  for (let i = 0; i < array8.length; i++) {
    if (array8[i].length % 2 === 0) {
      x.push(array8[i].length);
    }
  }
  return x;
}
console.log(descendingArrangement([1, 4, 3, 5, 6, 9]));
