# Bài tập chương 5: Hàm

---

### Bài Tập 1: Tạo một hàm trong Python

- **Yêu cầu:** Viết chương trình để tạo một hàm nhận hai tham số, tên và tuổi, và in giá trị của chúng.

- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**

  ```
  Ben 25
  ```

- **Gợi ý:** Sử dụng từ khóa `def` với tên hàm để định nghĩa một hàm. Tiếp theo, nhận hai tham số và in chúng bằng cách sử dụng hàm `print()`. Gọi hàm bằng cách truyền tên và tuổi.

---

### Bài Tập 2: Tạo một hàm với độ dài tham số thay đổi

- **Yêu cầu:** Viết chương trình để tạo hàm `func1()` nhận độ dài tham số thay đổi và in giá trị của chúng.

- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**

  ```
  In các giá trị
  20
  40
  60

  In các giá trị
  80
  100
  ```

- **Gợi ý:** Để chấp nhận độ dài tham số vị trí thay đổi, sử dụng `*args` làm tham số. Tất cả các giá trị này được đại diện dưới dạng một tuple.

---

### Bài Tập 3: Trả về nhiều giá trị từ một hàm

- **Yêu cầu:** Viết chương trình để tạo hàm `calculation()` sao cho nó có thể nhận hai biến và tính toán phép cộng và trừ. Hàm phải trả về cả phép cộng và trừ trong một lệnh trả về duy nhất.

- **Dữ liệu đầu vào:**

  - `a = 40`
  - `b = 10`

- **Kết quả mong đợi:**

  ```
  50, 30
  ```

- **Gợi ý:** Tách các giá trị trả về bằng dấu phẩy.

---

### Bài Tập 4: Tạo hàm với tham số mặc định

- **Yêu cầu:** Viết chương trình để tạo hàm `show_employee()` theo các điều kiện sau:

  - Hàm nhận tên nhân viên và mức lương, sau đó hiển thị cả hai.
  - Nếu mức lương không được truyền vào khi gọi hàm, thì gán giá trị mặc định là 9000.

- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**

  ```
  Name: Ben salary: 12000
  Name: Jessa salary: 9000
  ```

- **Gợi ý:** Tham số mặc định nhận giá trị mặc định trong quá trình gọi hàm nếu chúng ta không truyền vào. Ta có thể gán giá trị mặc định cho một tham số trong định nghĩa hàm sử dụng toán tử `=`.

---

### Bài Tập 5: Tạo một hàm bên trong để tính phép cộng theo cách sau

- **Yêu cầu:** Tạo một hàm ngoài sẽ nhận hai tham số, `a` và `b`. Sau đó, tạo một hàm bên trong bên trong hàm ngoài để tính tổng của `a` và `b`. Cuối cùng, hàm ngoài sẽ cộng thêm 5 vào kết quả của phép cộng và trả về kết quả cuối cùng.

- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**

  ```
  20
  ```

- **Gợi ý:** Trong Python, ta có thể tạo hàm lồng nhau bên trong một hàm khác. Ta có thể sử dụng hàm lồng nhau để thực hiện các tác vụ phức tạp nhiều lần trong một hàm khác hoặc tránh lặp mã.

---

### Bài Tập 6: Tạo một hàm đệ quy

- **Yêu cầu:** Viết chương trình để tạo hàm đệ quy tính tổng các số từ 0 đến 10.

- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**

  ```
  55
  ```

- **Gợi ý:** Hàm đệ quy là hàm gọi chính nó lặp đi lặp lại.

---

### Bài Tập 7: Gán một tên khác cho hàm và gọi nó thông qua tên mới

- **Yêu cầu:** Bên dưới là hàm `display_student(name, age)`. Hãy gán tên mới `show_student(name, age)` cho nó và gọi hàm này bằng tên mới.

- **Dữ liệu đầu vào:**

  - `name = Emma`
  - `age = 26`

- **Kết quả mong đợi:**

  ```
  Emma 26
  ```

- **Gợi ý:** Gán một tên khác cho hàm sử dụng toán tử gán `=`.

---

### Bài Tập 8: Tạo danh sách các số chẵn từ 4 đến 30 trong Python

- **Yêu cầu:** Viết chương trình để tạo một danh sách các số chẵn từ 4 đến 30.

- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**

  ```
  [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]
  ```

- **Gợi ý:** Sử dụng hàm `range()` để tạo dãy số từ 4 đến số cuối cùng với bước là 2 để lấy các số chẵn. Sau đó, truyền hàm `range()` vào hàm `list()` để tạo danh sách.

---

### Bài Tập 9: Tìm phần tử lớn nhất trong danh sách đã cho

- **Yêu cầu:** Viết chương trình để tìm phần tử lớn nhất trong danh sách đã cho.

- **Dữ liệu đầu vào:**

  - `x = [4, 6, 8, 24, 12, 2]`

- **Kết quả mong đợi:**

  ```
  24
  ```

- **Gợi ý:** Sử dụng hàm `max()` để lấy số lớn nhất từ danh sách.

---
