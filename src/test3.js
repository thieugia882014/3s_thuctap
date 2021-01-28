let the_Gioi_Di_Dong = [
  {
    name: "iphone 6s plus",
    price: 100,
    sold_quantity: 100,
    trademark: "iphone",
    up() {
      this.sold_quantity++;
    },
    total() {
      return this.price * this.sold_quantity;
    }
  },
  {
    name: "iphone11 pro max",
    price: 1000,
    sold_quantity: 80,
    trademark: "iphone",
    total() {
      return this.price * this.sold_quantity;
    }
  },
  {
    name: "iphone 22",
    price: 10000,
    sold_quantity: 20,
    trademark: "iphone",
    output() {
      // console.log(this.name, this.sold_quantity);
    },
    total() {
      return this.price * this.sold_quantity;
    }
  },
  {
    name: "samsung j6",
    price: 500,
    sold_quantity: 250,
    trademark: "samsung",
    total() {
      return this.price * this.sold_quantity;
    }
  },
  {
    name: "vivo neoQQQ",
    price: 20,
    sold_quantity: 10,
    trademark: "vivo",
    total() {
      return this.price * this.sold_quantity;
    }
  }
];

//- Viết một hàm trong object để khi nhân viên bán được một sản phẩm thì tăng số lượng bán lên
the_Gioi_Di_Dong[0].up();
console.log(the_Gioi_Di_Dong[0]);
// - Viết một hàm trong object để in ra tên sản phẩm + số lượng đã bán
the_Gioi_Di_Dong[2].output();
// - Viết một hàm trong object để tính tổng số tiền đã bản của sản phẩm
the_Gioi_Di_Dong[3].total();
// - Tính tổng doanh thu của cửa hàng
let total = 0;
function totalRevenue() {
  for (let i = 0; i < the_Gioi_Di_Dong.length; i++) {
    total += the_Gioi_Di_Dong[i].total();
  }
  return total;
}
//console.log("Tổng doanh thu của cửa hàng là: " + totalRevenue());

// - Lấy ra sản phẩm có doanh thu nhỏ nhất và xóa đi
function deleteRevennueMin() {
  let min = the_Gioi_Di_Dong[0];
  for (let i = 1; i < the_Gioi_Di_Dong.length; i++) {
    if (the_Gioi_Di_Dong[i].total() < min.total()) {
      min = the_Gioi_Di_Dong[i];
    }
  }
  let address = the_Gioi_Di_Dong.indexOf(min);
  the_Gioi_Di_Dong.splice(address, 1);
  return min;
}
console.log(deleteRevennueMin());
console.log(the_Gioi_Di_Dong);
// // - Lấy ra sản phẩm có doanh thu lớn nhất sử dụng Object.Values
function revenueMax() {
  let result = the_Gioi_Di_Dong[0].total();
  for (let i = 0; i < the_Gioi_Di_Dong.length; i++) {
    if (result < the_Gioi_Di_Dong[i].total()) {
      result = Object.values(the_Gioi_Di_Dong[i]);
    }
  }
  return result;
}
console.log(revenueMax());

// - Sao chép phần tử thứ i (nhập vào) của mảng thành một object khác
function copy(array) {
  let copied = Object.assign({}, array);
  return copied;
}
console.log(
  copy([
    { name: "oppo reno5", price: 400, trademark: "oppo", sold_quantity: 100 }
  ])
);

// - Xóa tất cả thuộc tính nhãn hiệu
function deleteTrademark() {
  for (let i = 0; i < the_Gioi_Di_Dong.length; i++) {
    delete the_Gioi_Di_Dong[i].trademark;
  }
  return the_Gioi_Di_Dong;
}
console.log(deleteTrademark());
