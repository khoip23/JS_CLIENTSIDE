console.log("abc")

let hoTen = `Khoi .net`;
let number = 312;
console.log(number);
console.log(hoTen);

console.log(typeof number)

//function: declaration function - expression function, arrow function
//function: hàm khai báo - hàm biểu thức, hàm mũi tên

function main() {
    console.log("Hello bro")
}

let mainExpression = function () {
    console.log("expression function");
}

let mainArrow = () => {
    console.log("Arrow function");
}

main();
mainExpression();
mainArrow();

//hàm có tham số
let tinhTong = (a, b) => {
    return a + b;
}

console.log(tinhTong(5, 10));

//object trong js(đối tượng)
class SinhVien {
    id = '';
    name = '';
    constructor(valueID, valueName) { //khai báo hàm khởi tạo khi có tham số
        this.id = valueID;
        this.name = valueName;
    }
    showInfo() {
        console.log(this.id, this.name);
    }
}

let sv = new SinhVien(1, 'hehehe');
sv.showInfo();

//tạo đối tượng không thông qua prototype
//kiểu dữ liệu: 
// + primitive value: kiểu dữ liệu nguyên thuỷ mà máy tính có thể hiểu được: number,string, null, undefined, bool, sysbol
// + reference value: kiểu dữ liệu tham chiếu (đối tượng)

//tạo ra dynamic object
let SinhVien = {
    id: '1',
    name: 'Nguyễn văn name',
    address: '112 cao thắng phường 4 quận 3',
    showInfo: function () {
        console.log(this.id, this.name);
    }
}

//CRUD:
//CREATE + UPDATE: cú pháp giống nhau - nếu chưa có key đó thì sẽ thêm vào cặp value tương ứng, nếu có rỗi thì sẽ cập nhật
SinhVien['age'] = 18;

//delete:
delete SinhVien.address
console.log(SinhVien);

//read: object[key] hoặc object.key
//+ duyệt: for (let key in object)
for (let key in SinhVien) {
    console.log('key', `${key} - ${SinhVien[key]}`)
}

//fetch: gọi dữ liệu từ server giống httpClient trong C#
let res = await fetch('/data/data.json');
let data = await res.json();

console.log(data)

//object collection (array)
let arr = [
    1, 2, 3, 4, 5
];

console.log(arr);

//duyệt vòng lặp js nên dùng for of để lấy ra value mà không cần thong qua index
for (let value of arr) {
    console.log('value', value)
}

//array object
let arrSinhVien = [
    { id: 1, name: 'AAA', age: 19 }, //index: 0
    { id: 2, name: 'BBB', age: 20 }, //index: 1
    { id: 3, name: 'CCC', age: 21 }, //index: 2
]

let arrSinhVien1 = [
    { id: 1, name: 'AAA', age: 19 }, //index: 0
    { id: 2, name: 'BBB', age: 20 }, //index: 1
    { id: 3, name: 'CCC', age: 21 }, //index: 2
]

let arrSinhVien2 = [
    { id: 1, name: 'AAA', age: 19 }, //index: 0
    { id: 2, name: 'BBB', age: 20 }, //index: 1
    { id: 3, name: 'CCC', age: 21 }, //index: 2
]

for (let sv of arrSinhVien) {
    console.log(sv);
}

//crud
//creat: push: thêm vào cuối
arrSinhVien.push({ id: 4, name: 'DDD', age: 22 });

//delete
arrSinhVien.splice(2, 1); //xóa 1 phần tử index = 2

//update
arrSinhVien[1].age = 99;

/*
    Chuyển đổi kiểu dữ liệu giữa string và object
    JSON.stringify(object) => string
    JSONG.parse(string) => object
*/

let str = JSON.stringify(arrSinhVien);

let strOb =  `{"id":1,"name":"iphone"}`;
let obJson = JSON.parse(strOb);

//---------luu tru client-----------

//LocalStoreage: luu tru client khong thoi han
/*
    .set(key, value) luu du lieu
    .get(key) lay du lieu
    .remove(key) xoa du lieeu
    Lưu ý: localstorage chỉ lưu được primitive value (string, number, bool,...)
    Nếu muốn lưu object hoặc collection vào localstorage thì phải chuyển thành string
*/

localStorage.setItem('username','khaitruong123@gmail.com');

if(localStorage.getItem('username')){
    document.querySelector('body').innerHTML = localStorage.getItem('username');
}else {
      document.querySelector('body').innerHTML = 'chưa đăng nhập';
}

localStorage.setItem('arrSinhVien', Json.stringify(arrSinhVien) );

let strArr = localStorage.getItem('arrSinhVien');
console.log(strArr);

//Tương tác http - GET, POST, PUT, DELETE - client side (pc,laptop,mobile app)
/*
    fetch: trình duyện hoặc axios (library)
*/

let result = await fetch('https://svcy.myclass.vn/api/ProductApi/getall');
let jsonResult = await result.json();

console.log(jsonResult);

//post
const dataPost = {
  id: "sv000119",
  name: "string",
  price: "string",
  img: "string",
  description: "string",
  type: "string",
  deleted: true
};
let resultPost = await fetch('https://svcy.myclass.vn/api/ProductApi/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dataPost)
});
let mess = await resultPost.json();
console.log(mess);

//client giao tiếp server qua websocket
console.log(signalR);

