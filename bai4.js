let a;
let b;
let c;
let arr = [];
do {
    a = Number(
        prompt("Moi nhap vao lua chon\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n7. Thoát chương trình"));

    switch (a) {
    case 1:
        b = Number(prompt("Nhap so hang:"));
            c = Number(prompt("Nhap so cot:"));
            arr = [];
        for (let i = 0; i < b; i++) {
            arr[i] = [];
            for (let j = 0; j < c; j++) {
            arr[i][j] = Number(
                prompt("Nhập giá trị cho phần tử [" + i + "][" + j + "]:")
            );
            }
        }
        break;

    case 2:
            console.table(arr);
            break;
    case 3:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập!");
                break;
            }
            let sum = 0;
            for (let i = 0; i < b; i++) {
                for (let j = 0; j < c; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng:", sum);
            break;
    case 7:
        break;
    default:
        console.log("Lựa chọn không hợp lệ!");
    }
} while (a != 7);
