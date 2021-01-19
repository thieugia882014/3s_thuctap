// function a(arr) {
//   const len = arr.length;

//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = 1; j <= i; j++) {
//       if (arr[j - 1] < arr[j] ) {
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(a([1, 4, 3, 5, 6, 9]));

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
  }
  return thangcho;
}
console.log(foo([1, 1, 1, 2, 2, 3, 4, 5]));

// function a(arr) {
//   const len = arr.length;
//   let tong = [];
//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = 1; j <= i; j++) {
//       if (tong[j - 1] < tong[j] ) {
//         let temp = tong[j - 1];
//         tong[j - 1] = tong[j];
//         tong[j] = temp;
//       }
//     }
//   }
//   return tong;
// }
// console.log(a([1, 4, 3, 5, 6, 9]));
