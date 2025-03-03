let result = "javascript" + 5; 
// Kết quả: "javascript5"
// Giải thích: Toán tử + khi gặp chuỗi sẽ thực hiện phép nối chuỗi (concatenation), nên "javascript" được ghép với 5 thành "javascript5".

let result = "javascript" - 1; 
// Kết quả: NaN
// Giải thích: Toán tử - chỉ hoạt động với số, nhưng "javascript" không thể chuyển đổi thành số, nên kết quả là NaN (Not-a-Number).

let result = "3" + 2; 
// Kết quả: "32"
// Giải thích: Toán tử + khi có chuỗi sẽ thực hiện phép nối chuỗi, nên "3" được ghép với 2 thành "32".

let result = "5" - 4; 
// Kết quả: 1
// Giải thích: Toán tử - chỉ hoạt động với số, nên JavaScript cố gắng chuyển "5" thành số 5, rồi thực hiện phép trừ 5 - 4 = 1.

let result = isNaN("123"); 
// Kết quả: false
// Giải thích: "123" là một chuỗi số hợp lệ và có thể chuyển thành số, nên isNaN("123") trả về false.

let result = isNaN("hello"); 
// Kết quả: true
// Giải thích: "hello" không thể chuyển đổi thành số, nên isNaN("hello") trả về true.

let result = Number.isNaN("123"); 
// Kết quả: false
// Giải thích: Number.isNaN("123") kiểm tra xem giá trị có thực sự là NaN hay không. Vì "123" là chuỗi và không phải NaN, nên kết quả là false.

let result = Number.isNaN(NaN); 
// Kết quả: true
// Giải thích: NaN chính là NaN, nên Number.isNaN(NaN) trả về true.