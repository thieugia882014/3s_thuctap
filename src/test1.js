//- Truyền vào một mảng số: Tính số phần tử trong mảng, chèn 2 số: vào vị trí cuối cùng, chèn 2 số vào vị trí đầu tiên, xóa phần tử ở vị trí thứ 2, 3
function insert(array) {
  console.log("số phần tử = " + array.length);
  array.unshift("x", "y");
  array.push("a", "b");
  array.splice(2, 2);

  return array;
}
console.log(insert([1, 2, 3, 4]));

//Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực
function negative(array) {
  let sum_negative = 0;
  array.forEach(function (item, index) {
    if (item < 0) {
      sum_negative += item;
    }
  });
  return sum_negative;
}
console.log(negative([1, 2, 3, 4, -3, -2, -5, -10, 6]));

//Tính trung bình cộng các số nguyên tố trong mảng 1 chiều các số nguyên
function average(arr) {
  let sum_average = 0;
  arr.forEach(function (item, index) {
    if (index) {
      sum_average += item;
    }
  });
  return sum_average;
}
console.log(average([1, 2, 3, 4, 5, 6]));

let the_Gioi_Di_Dong = [
  {
    name: "iphone 6s plus",
    price: 100,
    sold_quantity: 100
  },
  {
    name: "iphone11 pro max",
    price: 1000,
    sold_quantity: 80
  },
  {
    name: "iphone 22",
    price: 10000,
    sold_quantity: 20
  },
  {
    name: "samsung j6",
    price: 500,
    sold_quantity: 250
  },
  {
    name: "vivo neoQQQ",
    price: 20,
    sold_quantity: 10
  }
];

console.log("Count = " + the_Gioi_Di_Dong.length);

//tổng doanh thu mặt hàng
function total_money_cellphone(sum) {
  for (let i = 0; i < the_Gioi_Di_Dong.length; i++) {
    sum += the_Gioi_Di_Dong[i].price;
  }
  return sum;
}
console.log("doanh thu mặt hàng : " + total_money_cellphone(0));

//Tìm ra mặt hàng bán chậm nhất và xóa mặt hàng này đi
function delete_sold_quantity(min) {
  for (let i = 1; i < the_Gioi_Di_Dong.length; i++) {
    if (min > the_Gioi_Di_Dong[i].sold_quantity) {
      min = the_Gioi_Di_Dong[i].sold_quantity;
    }
  }

  return min;
}

console.log(
  "Min = " +
    delete_sold_quantity(
      (delete_sold_quantity = the_Gioi_Di_Dong[0].sold_quantity)
    )
);
