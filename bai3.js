let arr = [];
let choice;
do {
  console.log("1. Nhập mảng số nguyên");
  console.log("2. Hiển thị mảng");
  console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
  console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
  console.log("5. Đảo ngược mảng");
  console.log("6. Kiểm tra mảng có đối xứng hay không");
  console.log("7. Thoát chương trình");
  choice = +prompt("Mời bạn nhập lựa chọn");
  switch (choice) {
    case 1:
      let n = +prompt("Nhập số lượng phần tử: ");
      for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);
      }
      break;
    case 2:
      console.log("Các phần tử trong mảng:", arr.join(", "));
      break;
    case 3:
      if (arr.length === 0) {
        console.log("Mảng rỗng.");
        break;
      }
      let max = arr[0];
      let maxIndex = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          maxIndex = i;
        }
      }
      console.log("Số lớn nhất:", max);
      console.log("Chỉ số của số lớn nhất:", maxIndex);
      break;
    case 4:
      if (arr.length === 0) {
        console.log("Mảng rỗng, không thể tính trung bình cộng.");
      } else {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 0) {
            sum += arr[i];
            count++;
          }
        }
        if (count === 0) {
          console.log("Không có số dương trong mảng.");
        } else {
          let average = sum / count;
          console.log("Tổng của các số dương là:", sum);
          console.log("Trung bình cộng của các số dương là:", average);
        }
      }
      break;
    case 5:
      arr.reverse();
      console.log("Mảng sau khi đảo ngược:", arr.join(", "));
      break;
    case 6:
      let doixung = true;
      for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
          doixung = false;
          break;
        }
      }
      if (doixung) {
        console.log("Mảng đối xứng.");
      } else {
        console.log("Mảng không đối xứng.");
      }
      break;
    case 7:
      console.log("Thoát chương trình...");
      break;
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng lựa chọn lại");
  }
} while (choice !== 7);
