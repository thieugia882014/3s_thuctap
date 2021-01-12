//In ra các phần tử âm của mảng
function negative(array) {
  for (let i = 0; i < array.length; i++) {
    const soAm = array[i];
    if (soAm < 0) console.log(soAm);
  }
}
negative([2, 1, -1, -2, 3]);

//Tách 1 mảng thành 2 mảng chăn và lẻ

function chanLe(mang) {
  let ketQua = {
    mangChan: [],
    mangLe: []
  };
  mang.forEach(function (item, index) {
    if (item % 2 == 0) ketQua.mangChan.push(item);
    else ketQua.mangLe.push(item);
  });
  return ketQua;
}
console.log(chanLe([1, 2, 3, 4, 5]));

//Lấy ra các phần tử chẵn và nhỏ hơn 20
function layMangChan(mang) {
  let ketQua = [];
  mang.forEach(function (item, index) {
    if (item % 2 == 0 && item < 20) ketQua.push(item);
  });
  return ketQua;
}
console.log(layMangChan([1, 2, 3, 4, 5, 21, 22]));
