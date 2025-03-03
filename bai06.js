
let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));
let delta = b * b - 4 * a * c;
if (a === 0) {
    if (b === 0) {
        alert(c === 0 ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.");
    } else {
        let x = -c / b;
        alert(`Phương trình bậc 1 có nghiệm: x = ${x}`);
    }
} else {
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có hai nghiệm phân biệt:\n x1 = ${x1.toFixed(2)}\n x2 = ${x2.toFixed(2)}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`Phương trình có nghiệm kép: x = ${x.toFixed(2)}`);
    } else {
        alert("Phương trình vô nghiệm.");
    }
}
