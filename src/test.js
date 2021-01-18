function a(arr) {
  const len = arr.length;
  let dev = {};
  for (let i = len - 1; i >= 0; i--) {
    dev[i] = [];
    for (let j = 1; j <= i; j++) {
      dev[i].push(j);
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(a([1, 4, 3, 5, 6, 9]));
