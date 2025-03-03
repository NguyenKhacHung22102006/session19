let season;
let month = parseInt(prompt("Nhập một tháng trong năm (1 - 12):"));
if (isNaN(month) || month < 1 || month > 12) {
    alert("Vui lòng nhập một số từ 1 đến 12!");
} else {
    if (month >= 1 && month <= 3) {
        season = "Mùa xuân";
    } else if (month >= 4 && month <= 6) {
        season = "Mùa hè";
    } else if (month >= 7 && month <= 9) {
        season = "Mùa thu";
    } else {
        season = "Mùa đông";
    }
    alert(`Tháng ${month} thuộc ${season}.`);
}
