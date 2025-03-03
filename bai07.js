
let a = parseFloat(prompt("Nhập số thứ nhất:"));
let b = parseFloat(prompt("Nhập số thứ hai:"));
let c = parseFloat(prompt("Nhập số thứ ba:"));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập đúng 3 số hợp lệ!");
} else {
    let max = Math.max(a, b, c);
    alert(`Số lớn nhất trong 3 số là: ${max}`);
}
