# Bài tập chương 3: Câu lệnh điều kiện

### Bài Tập 1: Kiểm tra số dương hoặc âm

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem một số nhập vào là số dương, số âm, hay bằng không.
- **Dữ liệu đầu vào:** `num = -5`
- **Kết quả mong đợi:** `Số âm`
- **Gợi ý:** Sử dụng câu lệnh `if`, `elif`, và `else` để so sánh giá trị của số với 0.

---

### Bài Tập 2: Kiểm tra tính chẵn lẻ của một số

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem một số nhập vào là số chẵn hay số lẻ.
- **Dữ liệu đầu vào:** `num = 8`
- **Kết quả mong đợi:** `Số chẵn`
- **Gợi ý:** Sử dụng toán tử modulo `%` để kiểm tra xem số chia hết cho 2 hay không.

---

### Bài Tập 3: Tính tổng các số lớn hơn 10

- **Yêu cầu:** Viết một chương trình Python để nhập hai số và tính tổng của chúng. Nếu tổng lớn hơn 10, in ra "Tổng lớn hơn 10", ngược lại in ra "Tổng không lớn hơn 10".
- **Dữ liệu đầu vào:**

  ```python
  num1 = 6
  num2 = 7
  ```

- **Kết quả mong đợi:** `Tổng lớn hơn 10`
- **Gợi ý:** Sử dụng câu lệnh `if-else` để so sánh tổng với 10.

---

### Bài Tập 4: Xác định năm nhuận

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem một năm nhập vào có phải là năm nhuận hay không.
- **Dữ liệu đầu vào:** `year = 2024`
- **Kết quả mong đợi:** `Đây là năm nhuận`
- **Gợi ý:** Sử dụng câu lệnh `if-else` và các điều kiện kiểm tra năm nhuận (chia hết cho 4, nhưng không chia hết cho 100 trừ khi chia hết cho 400).

---

### Bài Tập 5: Phân loại học sinh dựa trên điểm số

- **Yêu cầu:** Viết một chương trình Python để nhập điểm của học sinh và phân loại thành "Giỏi", "Khá", "Trung bình", hoặc "Yếu".
- **Dữ liệu đầu vào:** `score = 8.7`
- **Kết quả mong đợi:** `Giỏi`
- **Gợi ý:** Sử dụng các câu lệnh `if-elif-else` để so sánh điểm số với các ngưỡng điểm đã định trước.

---

### Bài Tập 6: So sánh ba số

- **Yêu cầu:** Viết một chương trình Python để nhập ba số và tìm số lớn nhất trong ba số đó.
- **Dữ liệu đầu vào:**

  ```python
  a = 12
  b = 7
  c = 20
  ```

- **Kết quả mong đợi:** `Số lớn nhất là: 20`
- **Gợi ý:** Sử dụng các câu lệnh `if-elif-else` để so sánh ba số và xác định số lớn nhất.

---

### Bài Tập 7: Tính thuế thu nhập cá nhân

- **Yêu cầu:** Viết một chương trình Python để tính thuế thu nhập cá nhân dựa trên mức thu nhập. Sử dụng các mức thuế khác nhau cho các khoảng thu nhập khác nhau.
- **Dữ liệu đầu vào:** `income = 12000000`
- **Kết quả mong đợi:** `Thuế phải nộp là: 1800000.0`
- **Gợi ý:** Sử dụng các câu lệnh `if-elif-else` để áp dụng các mức thuế phù hợp.

---

### Bài Tập 8: Kiểm tra một số có nằm trong khoảng nhất định không

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem một số nhập vào có nằm trong khoảng từ 1 đến 100 không.
- **Dữ liệu đầu vào:** `num = 50`
- **Kết quả mong đợi:** `Số nằm trong khoảng từ 1 đến 100`
- **Gợi ý:** Sử dụng các toán tử so sánh và câu lệnh `if-else` để kiểm tra khoảng giá trị.

---

### Bài Tập 9: Kiểm tra tính hợp lệ của tam giác

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem ba cạnh nhập vào có tạo thành một tam giác hợp lệ hay không.
- **Dữ liệu đầu vào:**

  ```python
  a = 3
  b = 4
  c = 5
  ```

- **Kết quả mong đợi:** `Ba cạnh tạo thành một tam giác hợp lệ`
- **Gợi ý:** Sử dụng điều kiện tổng hai cạnh phải lớn hơn cạnh còn lại và sử dụng các câu lệnh `if-else`.

---

### Bài Tập 10: Tính lãi suất ngân hàng

- **Yêu cầu:** Viết một chương trình Python để tính lãi suất ngân hàng dựa trên số tiền gửi ban đầu và khoảng thời gian gửi tiền. Sử dụng các mức lãi suất khác nhau cho các khoảng thời gian khác nhau.
- **Dữ liệu đầu vào:**

  ```python
  principal = 10000000
  time = 12
  ```

- **Kết quả mong đợi:** `Số tiền lãi là: 600000.0`
- **Gợi ý:** Sử dụng các câu lệnh `if-elif-else` để áp dụng các mức lãi suất phù hợp.

---

### Bài Tập 11: Kiểm tra số nguyên tố

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem một số nhập vào có phải là số nguyên tố hay không.
- **Dữ liệu đầu vào:** `num = 29`
- **Kết quả mong đợi:** `29 là số nguyên tố`
- **Gợi ý:** Sử dụng vòng lặp và các câu lệnh `if` để kiểm tra tính chia hết của số đó với các số nhỏ hơn.

---

### Bài Tập 12: Tính điểm trung bình và xếp loại học lực

- **Yêu cầu:** Viết một chương trình Python để tính điểm trung bình của ba môn học và xếp loại học lực của học sinh dựa trên điểm trung bình đó.
- **Dữ liệu đầu vào:**

  ```python
  subject1 = 8.0
  subject2 = 7.5
  subject3 = 9.0
  ```

- **Kết quả mong đợi:** `Học lực: Giỏi`
- **Gợi ý:** Sử dụng câu lệnh `if-elif-else` để phân loại học lực dựa trên điểm trung bình.

---

### Bài Tập 13: Kiểm tra tính đối xứng của một số

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem một số có đối xứng hay không (ví dụ: 121, 1331 là số đối xứng).
- **Dữ liệu đầu vào:** `num = 121`
- **Kết quả mong đợi:** `121 là số đối xứng`
- **Gợi ý:** Chuyển số thành chuỗi và so sánh chuỗi đó với chuỗi đảo ngược của chính nó.

---

### Bài Tập 14: Kiểm tra tính hợp lệ của mật khẩu

- **Yêu cầu:** Viết một chương trình Python để kiểm tra xem một mật khẩu nhập vào có hợp lệ hay không. Mật khẩu hợp lệ cần có ít nhất 8 ký tự, bao gồm cả chữ hoa, chữ thường và số.
- **Dữ liệu đầu vào:** `password = "Abc12345"`
- **Kết quả mong đợi:** `Mật khẩu hợp lệ`
- **Gợi ý:** Sử dụng các câu lệnh `if-elif-else` để kiểm tra các điều kiện.

---

### Bài Tập 15: Tính điểm cuối cùng của sinh viên

- **Yêu cầu:** Viết một chương trình Python để tính điểm cuối cùng của sinh viên dựa trên điểm kiểm tra giữa kỳ, điểm kiểm tra cuối kỳ và điểm bài tập. Điểm cuối cùng được tính bằng công thức:
  ```
  Điểm cuối cùng = (0.3 * điểm giữa kỳ) + (0.4 * điểm cuối kỳ) + (0.3 * điểm bài tập)
  ```
- **Dữ liệu đầu vào:**

  ```python
  mid_term = 7.0
  final_term = 8.5
  assignment = 9.0
  ```

- **Kết quả mong đợi:** `Điểm cuối cùng là: 8.0`
- **Gợi ý:** Sử dụng công thức trên để tính điểm cuối cùng.

---

### Bài Tập 16: Kiểm tra số ngày trong tháng

- **Yêu cầu:** Viết một chương trình Python để nhập tháng

và năm, sau đó cho biết tháng đó có bao nhiêu ngày.

- **Dữ liệu đầu vào:** `month = 2`, `year = 2024`
- **Kết quả mong đợi:** `Tháng 2 năm 2024 có 29 ngày`
- **Gợi ý:** Sử dụng câu lệnh `if-elif-else` và kiểm tra năm nhuận nếu tháng là 2.

---
