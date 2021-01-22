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
    if (item % 2 === 0) result.even.push(item);
    else result.odd.push(item);
  });
  return result;
}
console.log(parity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Chèn X vào vị trí đầu của mảng 1 chiều
function insert(array3) {
  array3.unshift("x");
  return array3;
}
console.log(insert([1, 2, 3, 4]));

//Lấy ra các phần tử chẵn và nhỏ hơn 20
function even_Arrays(array4) {
  let result = [];
  array4.forEach(function (item, index) {
    if (item % 2 === 0 && item < 20) result.push(item);
  });
  return result;
}
console.log(even_Arrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 22]));

/* Tìm vị trí phần tử có giá trị x xuất hiện cuối cùng trong mảng */
function searchLastPosition(array5, x) {
  let position;
  for (let i = 0; i < array5.length; i++) {
    if (x === array5[i]) {
      position = i;
    }
  }
  return position;
}
console.log(searchLastPosition([1, 2, 3, 2, 4, 2, 2], 2));

/* Tìm vị trí của phần tử nhỏ nhất trong mảng 1 chiều */
function searchPositionMinNum(array6) {
  let position = [];
  let min = array6[0];
  for (let i = 1; i < array6.length; i++) {
    if (array6[i] < min) {
      min = array6[i];
      position = i;
    }
  }
  return position;
}
console.log(searchPositionMinNum([5, 8, 2, 3, 0]));

/* Tính tổng các phần tử ở vị trí chẵn trong mảng 1 chiều */
function totalNumEvenPosition(array7) {
  let total = 0;
  for (let i = 0; i < array7.length; i++) {
    if (i % 2 === 0) {
      total += array7[i];
    }
  }
  return total;
}
console.log(totalNumEvenPosition([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* Sắp xếp mảng theo thứ tự giảm dần */
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
  return array8;
}
console.log(descendingArrangement([1, 4, 3, 5, 6, 9]));

/* Sắp xếp các phần tử chẵn giảm dần */
function aaaa(array9) {
  const length = array9.length;
  let dev = [];
  for (let i = length - 1; i >= 0; i--) {
    dev[i] = [];
    for (let j = 1; j <= i; j++) {
      dev[i].push(j);
      if (array9[j - 1] < array9[j]) {
        let temp = array9[j - 1];
        array9[j - 1] = array9[j];
        array9[j] = temp;
      }
    }
  }
  // let x = [];
  // for (let i = 0; i < array9.length; i++) {
  //   if (array9[i] % 2 == 0) {
  //     x.push(array9[i]);
  //   }
  // }
  let x = [];
  array9.forEach(function (item, index) {
    if (item % 2 === 0) {
      x.push(item);
    }
  });
  return x;
}
console.log(aaaa([1, 4, 3, 8, 10, 5, 6, 9]));

/* Xóa phần tử tại vị trí lẻ trong mảng */
function deleteOddPosition(array10) {
  let count = 0;
  let arrayLength = array10.length;
  for (let i = 1; i < arrayLength; i += 2) {
    array10.splice(i - count, 1);
    count++;
  }
  return array10;
}
console.log(deleteOddPosition([5, 6, 8, 11, 12, 15, 18]));

/* Xóa phần tử có giá trị lớn nhất trong mảng */
function deleteNumMax(array11) {
  let result = [];
  let max = array11[0];
  for (let i = 1; i < array11.length; i++) {
    if (array11[i] > max) {
      max = array11[i];
    }
  }
  while (array11.indexOf(max) > -1) {
    let i = array11.indexOf(max);
    result = array11.splice(i, 1);
  }
  return array11;
}
console.log(deleteNumMax([1, 2, 3, 4, 5]));

/* Xóa tất cả các phần tử nhỏ hơn X */
function deleteNumMin(array, x) {
  let min;
  for (let i = 0; i < array.length; i++) {
    while (array[i] < x) {
      min = array[i];
      let address = array.indexOf(min);
      array.splice(address, 1);
    }
  }
  return array;
}
console.log(deleteNumMin([1, 2, 3, 4, 5, 6, 7, 12], 5));

//Nối 2 mảng số nguyên
let array13_1 = [1, 2, 3, 4, 5];
let array13_2 = [5, 4, 3, 2, 1];
function Array13_1(array13_1, array13_2) {
  return array13_1.concat(array13_2);
}
console.log("" + array13_1.concat(array13_2));

// Xóa các phần tử trùng với X trong mảng 1 chiều
function deleteSameNum(array14, x) {
  for (let i = 0; i < array14.length; i++) {
    while (array14[i] === x) {
      let address = array14.indexOf(x);
      array14.splice(address, 1);
    }
  }
  return array14;
}
console.log(deleteSameNum([5, 7, 6, 8, 2, 5, 5, 5, 5], 5));

/* Tìm phần tử xuất hiện nhiều nhất trong mảng số nguyên */
let array15 = [1, 2, 1, 1, 1, 3, 4, 5];
function count() {
  let number = [];
  let countItem = [];
  array15.forEach((item, index) => {
    const indexOfItem = number.indexOf(item);
    if (indexOfItem === -1) {
      number.push(item);
      countItem.push(1);
    } else {
      countItem[indexOfItem]++;
    }
  });
  console.log(number);
  console.log(countItem);

  let positionMax = 0;
  let max = 0;
  countItem.forEach((item, index) => {
    if (max < item) {
      max = item;
      positionMax = index;
    }
  });
  console.log("Số xuất hiện nhiều nhất là: " + number[positionMax]);
}
console.log(count());
