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
