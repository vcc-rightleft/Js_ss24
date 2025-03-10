let arr = [];
let choice;
do {
  console.log("1. Nhập mảng số nguyên");
  console.log("2. Hiển thị mảng");
  console.log("3. Tìm các phần tử chẵn và lẻ");
  console.log("4. Tính trung bình cộng của mảng");
  console.log("5. Xóa phần tử tại vị trí chỉ định");
  console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
      let sochan = [];
      let sole = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          sochan.push(arr[i]);
        } else {
          sole.push(arr[i]);
        }
      }
      console.log("Các số chẵn:", sochan.join(", "));
      console.log("Các số lẻ :", sole.join(", "));
      break;
    case 4:
      if (arr.length === 0) {
        console.log("Mảng rỗng, không thể tính trung bình cộng.");
      } else {
        let sum = arr.reduce((acc, val) => acc + val, 0);
        let average = sum / arr.length;
        console.log("Trung bình cộng của mảng là:", average);
      }
      break;
    case 5:
      let mangxoa = parseInt(prompt("Nhập vị trí cần xóa: "));
      if (mangxoa >= 0 && mangxoa < arr.length) {
        arr.splice(mangxoa, 1);
        console.log("Mảng sau khi xóa:", arr.join(", "));
      } else {
        console.log("Vị trí không hợp lệ.");
      }
      break;
    case 6:
      if (arr.length < 2) {
        console.log("Mảng không đủ phần tử để tìm phần tử lớn thứ hai.");
      } else {
        let sortedArr = [...arr].sort((a, b) => b - a);
        console.log("Phần tử lớn thứ hai trong mảng là:", sortedArr[1]);
      }
      break;
    case 7:
      console.log("Thoát chương trình...");
      break;
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng lựa chọn lại");
  }
} while (choice !== 7);
