let the_Gioi_Di_Dong = [
  {
      name: "iphone 6s plus",
      price: 100,
      sold_quantity: 100,
      trademark: "iphone"
  },
  {
      name: "iphone11 pro max",
      price: 1000,
      sold_quantity: 80,
      trademark: "iphone"
  },
  {
      name: "iphone 22",
      price: 10000,
      sold_quantity: 20,
      trademark: "iphone"
  },
  {
      name: "samsung j6",
      price: 500,
      sold_quantity: 250,
      trademark: "samsung"
  },
  {
      name: "vivo neoQQQ",
      price: 20,
      sold_quantity: 10,
      trademark: "vivo"
  }
];

//- Viết một hàm trong object để khi nhân viên bán được một sản phẩm thì tăng số lượng bán lên
  let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function obj_Product_Sales_Staff(){
      for (let i = 0; i < the_Gioi_Di_Dong.sold_quantity; i++) {
        if(the_Gioi_Di_Dong[i].sold_quantity>0){
          ladder.up()
        }
      }
    }
  };

// - Viết một hàm trong object để in ra tên sản phẩm + số lượng đã bán
// - Viết một hàm trong object để tính tổng số tiền đã bản của sản phẩm
// - Tính tổng doanh thu của cửa hàng
// let tong=0;
// let a = {
//   price: [],
//   sold_quantity:[]
// };
// //làm cùn
// function total(){
// for(let i=0;i<the_Gioi_Di_Dong.length;i++){
//  a.price = the_Gioi_Di_Dong[i].price
//  a.sold_quantity = the_Gioi_Di_Dong[i].sold_quantity
//  tong+= a.price*a.sold_quantity
// }return tong;
// }
// console.log(total());

// - Lấy ra sản phẩm có doanh thu nhỏ nhất và xóa đi

// // - Lấy ra sản phẩm có doanh thu lớn nhất sử dụng Object.Values
// let a = {
//   super_Max: [],
//   name:[]
// };
// let tong = 0;
// function max() {
//   for (let i =0 ;i < the_Gioi_Di_Dong.length; i++) {
//     tong = the_Gioi_Di_Dong[i].sold_quantity * the_Gioi_Di_Dong[i].price;
//     if (a.super_Max<tong) {
//       a.name = the_Gioi_Di_Dong[i].name
//      a.super_Max = tong 
//     }
//   }
//   return a; 
// }
// console.log(max());
// console.log(Object.values(a));  

// - Sao chép phần tử thứ i (nhập vào) của mảng thành một object khác
// - Xóa tất cả thuộc tính nhãn hiệu