//In ra các phần tử âm của mảng
function negative(array) {
  for (let i = 0; i < array.length; i++) {
    const negative = array[i];
    if (negative < 0) console.log(negative);
  }
}
negative([2, 1, -1, -2, 3, 6, 7, -5]);

//Tách 1 mảng thành 2 mảng chăn và lẻ

function parity(array2) {
  let result = {
    even: [],
    odd: []
  };
  array2.forEach(function (item, index) {
    if (item % 2 == 0) result.even.push(item);
    else result.odd.push(item);
  });
  return result;
}
console.log(parity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Lấy ra các phần tử chẵn và nhỏ hơn 20
function even_Arrays(array3) {
  let result = [];
  array3.forEach(function (item, index) {
    if (item % 2 == 0 && item < 20) result.push(item);
  });
  return result;
}
console.log(even_Arrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 22]));

//Nối 2 mảng số nguyên
let array13_1 = [1, 2, 3, 4, 5];
let array13_2 = [5, 4, 3, 2, 1];
function Array13_1(array13_1, array13_2) {
  return array13_1.concat(array13_2);
}
console.log("" + array13_1.concat(array13_2));

// Chèn X vào vị trí đầu của mảng 1 chiều
function insert(array4) {
  array4.unshift("x");
  return array4;
}
console.log(insert([1, 2, 3, 4]));
//Tìm vị trí của phần tử nhỏ nhất trong mảng 1 chiều
