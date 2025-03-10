let a;
let arr = [];
do {
  a = Number(
    prompt(
      "1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất\n4. Tính tổng\n5. Đếm số lần xuất hiện\n6. Sắp xếp mảng tăng dần\n7. Thoát"
    )
  );

  if (Number.isInteger(a) && a > 0) {
    switch (a) {
      case 1:
        let length = Number(prompt("Nhập số lượng phần tử:"));
        if (Number.isInteger(length) && length > 0) {
          arr = []; 
          for (let i = 0; i < length; i++) {
            let number = Number(prompt(`Nhập giá trị phần tử thứ ${i + 1}:`));
            arr.push(number);
          }
        } else {
          alert("Vui lòng nhập số nguyên dương.");
        }
        break;

      case 2:
        if (arr.length === 0) {
          alert("Mảng rỗng!");
        } else {
          alert("Mảng hiện tại: " + arr.join(", "));
        }
        break;

        case 3:
            let b = arr[0];
            let c = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (b > arr[i]) {
                    b = arr[i];
                }
                if (c < arr[i]) {
                    c = arr[i];
                }
            }
            alert("be nhat" + b + " lon nhat" + c);
            break;

      case 4:
        let sum = 0;
            for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            }
            alert(sum);
            break;

      case 5:
        if (arr.length === 0) {
          alert("Mảng rỗng!");
          break;
        }
        let numToCount = Number(prompt("Nhập số cần đếm:"));
        if (isNaN(numToCount)) {
          alert("Vui lòng nhập một số hợp lệ.");
          break;
        }
        let count = arr.filter((item) => item === numToCount).length;
        alert(`Số ${numToCount} xuất hiện ${count} lần.`);
        break;

      case 6:
        if (arr.length === 0) {
          alert("Mảng rỗng, không thể sắp xếp!");
          break;
        }
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
        alert("Mảng sau khi sắp xếp: " + arr.join(", "));
        break;

      case 7:
        alert("Thoát chương trình.");
        a = 8; 
        break;

      default:
        alert("Lựa chọn không hợp lệ, vui lòng nhập từ 1 đến 7.");
        break;
    }
  }
} while (a !== 8);
