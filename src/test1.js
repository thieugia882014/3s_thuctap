//- Truyền vào một mảng số: Tính số phần tử trong mảng, chèn 2 số: vào vị trí cuối cùng, chèn 2 số vào vị trí đầu tiên, xóa phần tử ở vị trí thứ 2, 3
// function insert(array) {
//   console.log("số phần tử = " + array.length);
//   array.unshift("6", "7");
//   array.push("8", "9");
//   array.splice(2, 2);
//   return array;
// }
// console.log(insert([1, 2, 3, 4]));

//Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực
// function negative(array) {
//   let sum_negative = 0;
//   // array.forEach(function (item, index) {
//   //   if (item < 0) {
//   //     sum_negative += item;
//   //   }
//   // });
//   for (let i = 0; i < array.length; i++) {
//     if(array[i]<0){
//       sum_negative+= array[i]
//     }
//   }
//   return sum_negative;
// }
// console.log(negative([1, 2, 3, 4, -3, -2, -5, -10, 6]));

// Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] truyền vào
// Ví dụ [1,2,4,5,5], mảng truyền vào [1,3,5] => kết quả [1,5]
// function arr(array, array1) {
//   let x = [];
//   for (let i = 0; i < array.length; i++) {
//       if (array1.indexOf(array[i]) >-1) x.push(array[i]);
//   }
//   return x;
// }
// console.log(arr([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4]));

// Tính trung bình cộng các số nguyên tố trong mảng 1 chiều các số nguyên
// function average(arr) {
//   let sum_average = 0;
//   let count = 0;
//   arr.forEach(function (item, index) {
//     let kiemTra = kiemTraSoNguyenTo(item);
//     if (kiemTra) {
//       sum_average += item;
//       count++;
//     }
//   });
//   return sum_average / count;
// }
// function kiemTraSoNguyenTo(so) {
//   if (so < 2) return false;
//   if (so == 2) return true;

//   let chiaDoi = so / 2;

//   let dem = 0;
//   for (let index = 2; index <= chiaDoi; index++) {
//     if (so % index == 0) dem++;
//   }

//   return dem == 0;
// }
// console.log(average([1, 2, 3, 4, 5, 6]));

// let console.log("Count = " + the_Gioi_Di_Dong.length);

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

// Tìm ra mặt hàng bán chạy nhất và doanh thu mặt hàng
// let super_Max = [];
// let tong = 0;
// function max() {
//   for (let i =0 ;i < the_Gioi_Di_Dong.length; i++) {
//     if (super_Max < the_Gioi_Di_Dong[i].sold_quantity) {
//       super_Max = the_Gioi_Di_Dong[i].sold_quantity;
//       tong = super_Max * the_Gioi_Di_Dong[i].price;
//     }
//   }
//   return tong;
// }

// console.log(
//   "doanh thu mặt hàng bán chạy nhất là = " +
//     max((the_Gioi_Di_Dong[0].sold_quantity))
// );

//tổng doanh thu cửa hàng
// function total_money_cellphone(sum) {
//   for (let i = 0; i < the_Gioi_Di_Dong.length; i++) {
//     sum += the_Gioi_Di_Dong[i].price * the_Gioi_Di_Dong[i].sold_quantity;
//   }
//   return sum;
// }
// console.log("doanh thu mặt hàng : " + total_money_cellphone(0));

//Tìm ra mặt hàng bán chậm nhất và xóa mặt hàng này đi
// let vitri =0;
// function delete_sold_quantity(min) {
//   for (let i = 1; i < the_Gioi_Di_Dong.length; i++) {
//     if (min > the_Gioi_Di_Dong[i].sold_quantity) {
//       min = the_Gioi_Di_Dong[i].sold_quantity;
//       vitri=the_Gioi_Di_Dong[i].sold_quantity;
//     }
//   }
//   return min;
// }
// the_Gioi_Di_Dong.splice(vitri,1);
// console.log(
//   "mặt hàng bán chậm nhất = " +
//     delete_sold_quantity((the_Gioi_Di_Dong[0].sold_quantity))
// );
function delete_sold_quantity() {
  let min = the_Gioi_Di_Dong[0];

  for (let i = 0; i < the_Gioi_Di_Dong.length; i++) {
    if (min.sold_quantity > the_Gioi_Di_Dong[i].sold_quantity) {
      min = the_Gioi_Di_Dong[i];
    }
  }
  let address = the_Gioi_Di_Dong.indexOf(min);
  the_Gioi_Di_Dong.splice(address, 1);

  return min;
}
console.log(delete_sold_quantity());

console.log(the_Gioi_Di_Dong);