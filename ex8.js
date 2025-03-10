let str = "";  
let choice;  
do {  
    console.log("1. Nhập chuỗi ký tự");  
    console.log("2. Hiển thị chuỗi ký tự");  
    console.log("3. Tìm tất cả các ký tự trùng lặp trong chuỗi và số lần xuất hiện");  
    console.log("4. Tìm các ký tự có độ dài lớn nhất và nhỏ nhất trong chuỗi");  
    console.log("5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi");  
    console.log("6. Chuyển đổi chuỗi ký tự thành dạng snake_case");  
    console.log("7. Thoát chương trình");  
    choice = +prompt("Mời bạn nhập lựa chọn");  

    switch (choice) {  
        case 1:  
            str = prompt("Nhập chuỗi ký tự: ");  
            break;  
        case 2:  
            console.log("Chuỗi ký tự:", str);  
            break;  
        case 3:  
            let trunglap = {};  
            for (let char of str) {  
                trunglap[char] = (trunglap[char] || 0) + 1;  
            }  
            console.log("Ký tự trùng lặp và số lần xuất hiện:", charCount);  
            break;  
        case 4:  
            let dodai = Array.from(new Set(str.split("")));  
            let lengths = dodai.map(char => str.split(char).length - 1);  
            let maxLength = Math.max(...lengths);  
            let minLength = Math.min(...lengths.filter(l => l > 0));  
            console.log("Ký tự lớn nhất:", dodai[lengths.indexOf(maxLength)]);  
            console.log("Ký tự nhỏ nhất:", dodai[lengths.indexOf(minLength)]);  
            break;  
        case 5:  
            let xuathien = {};  
            for (let char of str) {  
                if (xuathien[char]) {  
                    xuathien[char]++;  
                } else {  
                    xuathien[char] = 1;  
                }  
            }  
            let maxchar = Object.keys(xuathien).reduce((a, b) => xuathien[a] > xuathien[b] ? a : b);  
            console.log("Ký tự xuất hiện nhiều nhất:", xuathien, "với số lần xuất hiện:", xuathien[maxchar]);  
            break;  
        case 6:  
            let snakecase = str.split(" ").join("_").toLowerCase();  
            console.log("Dạng snake_case:", snakecase);  
            break;  
        case 7:  
            console.log("Thoát chương trình...");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng lựa chọn lại");  
    }  
} while (choice !== 7);  