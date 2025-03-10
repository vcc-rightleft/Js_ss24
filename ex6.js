let str = "";   
let choice;   

do {   
    console.log("1. Nhập chuỗi");   
    console.log("2. Hiển thị chuỗi");   
    console.log("3. Tính độ dài của chuỗi");   
    console.log("4. Đếm số lần xuất hiện của một ký tự trong chuỗi");   
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");   
    console.log("6. Chuyển đổi chuỗi thành chữ hoa các ký tự đầu tiên của từ");   
    console.log("7. Thoát chương trình");   
    
    choice = +prompt("Mời bạn nhập lựa chọn");   
    
    switch (choice) {   
        case 1:   
            str = prompt("Nhập chuỗi: ");   
            break;   
        case 2:   
            console.log("Chuỗi hiện tại:", str);   
            break;   
        case 3:   
            console.log("Độ dài của chuỗi:", str.length);   
            break;   
        case 4:   
            let xuathien = prompt("Nhập ký tự cần tìm: ");   
            let count = 0;   
            for (let char of str) {   
                if (char === xuathien) {   
                    count++;   
                }   
            }   
            console.log(`Số lần xuất hiện của ký tự '${xuathien}':`, count);   
            break;   
        case 5:   
            let kiemtra = str === str.split("").reverse().join("");   
            if (kiemtra) {   
                console.log("Chuỗi đối xứng.");   
            } else {   
                console.log("Chuỗi không đối xứng.");   
            }   
            break;   
        case 6:   
            let inhoa = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");   
            console.log("Chuỗi sau khi chuyển đổi thành chữ hoa các ký tự đầu tiên của từ:", inhoa);   
            break;   
        case 7:   
            console.log("Thoát chương trình...");   
            break;   
        default:   
            console.log("Lựa chọn không hợp lệ. Vui lòng lựa chọn lại");   
    }   
} while (choice !== 7);   