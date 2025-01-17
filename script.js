function calculateDays() {
    // Lấy giá trị tháng từ input
    const month = parseInt(document.getElementById("month").value);

    // Kiểm tra giá trị nhập vào
    if (isNaN(month) || month < 1 || month > 12) {
        document.getElementById("result").innerText = "Vui lòng nhập một tháng hợp lệ (1-12)!";
        return;
    }

    let days;
    // Sử dụng switch-case để xác định số ngày trong tháng
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = "28 hoặc 29 (năm nhuận)";
            break;
        default:
            days = "Không xác định";
    }

    // Hiển thị kết quả
    document.getElementById("result").innerText = `Tháng ${month} có ${days} ngày.`;
}