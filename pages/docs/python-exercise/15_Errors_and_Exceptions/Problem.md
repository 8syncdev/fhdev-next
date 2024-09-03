# Bài tập chương 15: Lỗi và ngoại lệ

### Bài Tập 1: Bắt lỗi chia cho 0

**Yêu cầu:** Viết một chương trình Python để thực hiện phép chia hai số. Sử dụng cấu trúc `try-except` để bắt lỗi chia cho 0.  
**Gợi ý:** Sử dụng `ZeroDivisionError` để bắt lỗi khi mẫu số bằng 0.

---

### Bài Tập 2: Bắt lỗi nhập liệu

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập một số. Sử dụng cấu trúc `try-except` để bắt lỗi khi người dùng nhập vào không phải là số.  
**Gợi ý:** Sử dụng `ValueError` để bắt lỗi khi chuyển đổi đầu vào không thành công.

---

### Bài Tập 3: Bắt lỗi chỉ mục không tồn tại

**Yêu cầu:** Viết một chương trình Python để truy cập một phần tử trong danh sách. Sử dụng `try-except` để bắt lỗi khi truy cập vào chỉ mục không tồn tại.  
**Gợi ý:** Sử dụng `IndexError` để bắt lỗi chỉ mục không hợp lệ.

---

### Bài Tập 4: Xử lý nhiều ngoại lệ

**Yêu cầu:** Viết một chương trình Python có thể bắt nhiều loại lỗi (chia cho 0, nhập liệu sai, chỉ mục không tồn tại) và in ra thông báo lỗi tương ứng.  
**Gợi ý:** Sử dụng nhiều khối `except` để xử lý từng loại lỗi.

---

### Bài Tập 5: Bắt lỗi và tiếp tục chương trình

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào hai số và thực hiện phép chia. Nếu có lỗi xảy ra, chương trình vẫn tiếp tục yêu cầu người dùng nhập liệu.  
**Gợi ý:** Sử dụng vòng lặp `while` để liên tục yêu cầu nhập liệu cho đến khi thành công.

---

### Bài Tập 6: Sử dụng khối `finally`

**Yêu cầu:** Viết một chương trình Python để mở một tệp và đọc nội dung của nó. Sử dụng `try-except-finally` để đảm bảo rằng tệp luôn được đóng sau khi xử lý, ngay cả khi có lỗi xảy ra.  
**Gợi ý:** Sử dụng khối `finally` để đảm bảo tệp được đóng.

---

### Bài Tập 7: Kiểm tra lỗi có xảy ra hay không

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào một số nguyên. Sử dụng `try-except-else` để kiểm tra xem lỗi có xảy ra hay không và in ra một thông báo thích hợp.  
**Gợi ý:** Sử dụng khối `else` để in thông báo nếu không có lỗi xảy ra.

---

### Bài Tập 8: Tạo ngoại lệ tùy chỉnh đơn giản

**Yêu cầu:** Viết một ngoại lệ tùy chỉnh tên là `NegativeNumberError`, được kích hoạt khi người dùng nhập vào một số âm.  
**Gợi ý:** Sử dụng cú pháp `class` để tạo ngoại lệ tùy chỉnh kế thừa từ `Exception`.

---

### Bài Tập 9: Kích hoạt ngoại lệ tùy chỉnh

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào một số dương. Nếu người dùng nhập vào số âm, kích hoạt ngoại lệ `NegativeNumberError` đã tạo ở bài tập trước.  
**Gợi ý:** Sử dụng từ khóa `raise` để kích hoạt ngoại lệ tùy chỉnh.

---

### Bài Tập 10: Xử lý ngoại lệ tùy chỉnh

**Yêu cầu:** Sử dụng ngoại lệ `NegativeNumberError` đã tạo ở bài tập trước, bắt và xử lý ngoại lệ này trong một chương trình Python yêu cầu người dùng nhập một số dương.  
**Gợi ý:** Sử dụng `try-except` để xử lý ngoại lệ tùy chỉnh.

---

### Bài Tập 11: Bắt ngoại lệ từ nhiều chức năng

**Yêu cầu:** Viết một chương trình Python có nhiều chức năng. Một trong các chức năng này sẽ kích hoạt ngoại lệ (chẳng hạn chia cho 0), và ngoại lệ này cần được bắt ở chức năng khác.  
**Gợi ý:** Sử dụng `try-except` ở mức cao hơn để bắt lỗi từ nhiều chức năng.

---

### Bài Tập 12: Ngoại lệ và hàm đệ quy

**Yêu cầu:** Viết một chương trình Python sử dụng hàm đệ quy để tính giai thừa của một số. Sử dụng `try-except` để xử lý trường hợp người dùng nhập vào một số âm, kích hoạt ngoại lệ tùy chỉnh `NegativeNumberError`.  
**Gợi ý:** Sử dụng đệ quy và bắt lỗi để xử lý số âm.

---

### Bài Tập 13: Kết hợp ngoại lệ tùy chỉnh với ngoại lệ hệ thống

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào hai số. Nếu người dùng nhập vào số âm, kích hoạt ngoại lệ `NegativeNumberError`. Nếu người dùng nhập sai loại dữ liệu, bắt lỗi `ValueError`.  
**Gợi ý:** Sử dụng nhiều khối `except` để xử lý cả ngoại lệ tùy chỉnh và ngoại lệ hệ thống.

---

### Bài Tập 14: Bắt và xử lý ngoại lệ lồng nhau

**Yêu cầu:** Viết một chương trình Python để bắt và xử lý ngoại lệ lồng nhau, chẳng hạn như ngoại lệ xảy ra bên trong một ngoại lệ khác.  
**Gợi ý:** Sử dụng `try-except` lồng nhau để bắt các ngoại lệ khác nhau.

---

### Bài Tập 15: Ghi log ngoại lệ

**Yêu cầu:** Viết một chương trình Python để bắt ngoại lệ và ghi log lỗi vào một tệp log.  
**Gợi ý:** Sử dụng thư viện `logging` để ghi log lỗi.

---

### Bài Tập 16: Tạo một ứng dụng nhỏ với nhiều ngoại lệ

**Yêu cầu:** Viết một chương trình Python giả lập một máy tính đơn giản với các phép toán cộng, trừ, nhân, chia. Xử lý các ngoại lệ như chia cho 0, nhập sai loại dữ liệu, và ngoại lệ tùy chỉnh cho trường hợp nhập số âm.  
**Gợi ý:** Kết hợp nhiều ngoại lệ và ngoại lệ tùy chỉnh để tạo một ứng dụng hoàn chỉnh.

---

### Bài Tập 17: Tạo một hệ thống đăng nhập với ngoại lệ

**Yêu cầu:** Viết một chương trình Python mô phỏng hệ thống đăng nhập. Nếu người dùng nhập sai mật khẩu quá 3 lần, kích hoạt một ngoại lệ tùy chỉnh `LoginFailedError`.  
**Gợi ý:** Sử dụng vòng lặp và ngoại lệ tùy chỉnh để xử lý logic đăng nhập.

---

### Bài Tập 18: Tạo một thư viện xử lý ngoại lệ

**Yêu cầu:** Viết một thư viện Python chứa nhiều loại ngoại lệ tùy chỉnh và các hàm xử lý ngoại lệ cho các tình huống khác nhau, chẳng hạn như xử lý lỗi kết nối, lỗi cơ sở dữ liệu, lỗi tệp tin.  
**Gợi ý:** Tạo nhiều ngoại lệ tùy chỉnh và gói chúng thành một thư viện để sử dụng trong các dự án khác.
