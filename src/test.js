// function a(arr) {
//   const len = arr.length;
//   let dev = {};
//   for (let i = len - 1; i >= 0; i--) {
//     dev[i] = [];
//     for (let j = 1; j <= i; j++) {
//       dev[i].push(j);
//       if (arr[j - 1] < arr[j]) {
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(a([1, 4, 3, 5, 6, 9]));

//var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9,9,3,3,3,3,3];
function foo(arr) {
  let thangcho = {
    a: [],
    b: []
  };
  let prev;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      thangcho.a.push(arr[i]);
      thangcho.b.push(1);
    } else {
      thangcho.b[thangcho.b.length - 1]++;
    }
    prev = arr[i];
    let result = thangcho;
  }
  return thangcho;
}

console.log(foo(["[" + result[0] + "]<br>[" + result[1] + "]"]));
