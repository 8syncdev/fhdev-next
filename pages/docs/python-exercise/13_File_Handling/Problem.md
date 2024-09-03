# Bài tập chương 13: Xử lý file

### Bài Tập 1: Đọc toàn bộ tệp văn bản

**Yêu cầu:** Viết một chương trình Python để đọc toàn bộ tệp văn bản.  
**Gợi ý:** Sử dụng hàm `open()` với chế độ `'r'` để đọc toàn bộ nội dung của tệp.  
**Điều kiện:** Tệp văn bản phải tồn tại trong thư mục làm việc hiện tại.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Nội dung toàn bộ tệp.

---

### Bài Tập 2: Đọc n dòng đầu tiên của tệp

**Yêu cầu:** Viết một chương trình Python để đọc n dòng đầu tiên của tệp.  
**Gợi ý:** Sử dụng phương thức `readlines()` để đọc nhiều dòng và cắt lấy n dòng đầu tiên.  
**Điều kiện:** n phải nhỏ hơn hoặc bằng tổng số dòng trong tệp.  
**Input:** Đường dẫn tệp cần đọc và số lượng dòng n.  
**Output:** Nội dung n dòng đầu tiên.

---

### Bài Tập 3: Thêm văn bản vào tệp và hiển thị văn bản

**Yêu cầu:** Viết một chương trình Python để thêm văn bản vào tệp và hiển thị văn bản.  
**Gợi ý:** Sử dụng hàm `open()` với chế độ `'a'` để thêm văn bản vào tệp, sau đó đọc lại nội dung tệp.  
**Điều kiện:** Tệp phải tồn tại và có thể ghi thêm nội dung.  
**Input:** Đường dẫn tệp cần ghi và văn bản cần thêm.  
**Output:** Nội dung tệp sau khi thêm.

---

### Bài Tập 4: Đọc n dòng cuối cùng của tệp

**Yêu cầu:** Viết một chương trình Python để đọc n dòng cuối cùng của tệp.  
**Gợi ý:** Sử dụng phương thức `readlines()` để đọc toàn bộ tệp, sau đó cắt lấy n dòng cuối.  
**Điều kiện:** n phải nhỏ hơn hoặc bằng tổng số dòng trong tệp.  
**Input:** Đường dẫn tệp cần đọc và số lượng dòng n.  
**Output:** Nội dung n dòng cuối cùng.

---

### Bài Tập 5: Đọc từng dòng của tệp và lưu vào danh sách

**Yêu cầu:** Viết một chương trình Python để đọc từng dòng của tệp và lưu nó vào một danh sách.  
**Gợi ý:** Sử dụng vòng lặp `for` để đọc từng dòng và phương thức `append()` để thêm dòng vào danh sách.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Danh sách chứa các dòng của tệp.

---

### Bài Tập 6: Đọc từng dòng của tệp và lưu vào biến

**Yêu cầu:** Viết một chương trình Python để đọc từng dòng của tệp và lưu nó vào một biến.  
**Gợi ý:** Sử dụng phương thức `read()` để đọc toàn bộ tệp và lưu vào một biến.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Nội dung tệp dưới dạng chuỗi.

---

### Bài Tập 7: Đọc từng dòng của tệp và lưu vào mảng

**Yêu cầu:** Viết một chương trình Python để đọc từng dòng của tệp và lưu nó vào một mảng.  
**Gợi ý:** Sử dụng vòng lặp `for` và phương thức `append()` để thêm dòng vào mảng.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Mảng chứa các dòng của tệp.

---

### Bài Tập 8: Tìm từ dài nhất

**Yêu cầu:** Viết một chương trình Python để tìm từ dài nhất trong tệp.  
**Gợi ý:** Sử dụng vòng lặp để duyệt qua từng từ và tìm từ có độ dài lớn nhất.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Từ dài nhất trong tệp.

---

### Bài Tập 9: Đếm số dòng trong tệp văn bản

**Yêu cầu:** Viết một chương trình Python để đếm số dòng trong tệp văn bản.  
**Gợi ý:** Sử dụng phương thức `readlines()` và `len()` để đếm số dòng.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Số dòng trong tệp.

---

### Bài Tập 10: Đếm tần suất từ trong tệp

**Yêu cầu:** Viết một chương trình Python để đếm tần suất xuất hiện của các từ trong tệp.  
**Gợi ý:** Sử dụng từ điển để lưu tần suất từ và vòng lặp để đếm.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Từ điển chứa tần suất xuất hiện của các từ trong tệp.

---

### Bài Tập 11: Lấy kích thước của tệp

**Yêu cầu:** Viết một chương trình Python để lấy kích thước của tệp văn bản.  
**Gợi ý:** Sử dụng phương thức `os.path.getsize()` để lấy kích thước của tệp.  
**Điều kiện:** Tệp phải tồn tại.  
**Input:** Đường dẫn tệp cần kiểm tra.  
**Output:** Kích thước của tệp (tính bằng bytes).

---

### Bài Tập 12: Ghi danh sách vào tệp

**Yêu cầu:** Viết một chương trình Python để ghi một danh sách vào tệp.  
**Gợi ý:** Sử dụng vòng lặp `for` để ghi từng phần tử của danh sách vào tệp.  
**Điều kiện:** Tệp có thể ghi được.  
**Input:** Danh sách cần ghi và đường dẫn tệp đích.  
**Output:** Tệp chứa các phần tử của danh sách.

---

### Bài Tập 13: Sao chép nội dung từ tệp này sang tệp khác

**Yêu cầu:** Viết một chương trình Python để sao chép nội dung của một tệp sang tệp khác.  
**Gợi ý:** Sử dụng phương thức `read()` để đọc và `write()` để ghi nội dung vào tệp mới.  
**Điều kiện:** Cả tệp nguồn và tệp đích phải có thể truy cập và đọc/ghi được.  
**Input:** Đường dẫn tệp nguồn và tệp đích.  
**Output:** Tệp đích chứa nội dung của tệp nguồn.

---

### Bài Tập 14: Kết hợp từng dòng của tệp đầu tiên với dòng tương ứng trong tệp thứ hai

**Yêu cầu:** Viết một chương trình Python để kết hợp từng dòng của tệp đầu tiên với dòng tương ứng trong tệp thứ hai.  
**Gợi ý:** Sử dụng vòng lặp `zip()` để kết hợp từng dòng từ hai tệp.  
**Điều kiện:** Hai tệp phải có cùng số dòng.  
**Input:** Đường dẫn của hai tệp cần kết hợp.  
**Output:** Nội dung kết hợp của hai tệp.

---

### Bài Tập 15: Đọc một dòng ngẫu nhiên từ tệp

**Yêu cầu:** Viết một chương trình Python để đọc một dòng ngẫu nhiên từ tệp.  
**Gợi ý:** Sử dụng `random.choice()` để chọn một dòng ngẫu nhiên từ danh sách các dòng.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:** Một dòng ngẫu nhiên từ tệp.

---

### Bài Tập 16: Kiểm tra xem tệp có được đóng hay không

**Yêu cầu:** Viết một chương trình Python để kiểm tra xem tệp có được đóng hay không.  
**Gợi ý:** Sử dụng thuộc tính `closed` của đối tượng tệp để kiểm tra.  
**Điều kiện:** Tệp phải tồn tại.  
**Input:** Đường dẫn tệp cần kiểm tra.  
**Output:** Trạng thái tệp (True nếu tệp đã đóng, False nếu tệp còn mở).

---

### Bài Tập 17: Xóa ký tự xuống dòng khỏi tệp

**Yêu cầu:** Viết một chương trình Python để xóa các ký tự xuống dòng (`\n`) khỏi tệp.  
**Gợi ý:** Sử dụng phương thức `strip()` để xóa các ký tự xuống dòng.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc/ghi được.  
**Input:** Đường dẫn tệp cần chỉnh sửa.  
**Output:** Nội dung tệp sau khi xóa ký tự xuống dòng.

---

### Bài Tập 18: Đếm số từ trong tệp văn bản

\*\*Y

êu cầu:** Viết một chương trình Python nhận đầu vào là một tệp văn bản và trả về số từ trong tệp.  
**Gợi ý:** Sử dụng phương thức `split()` để tách các từ và `len()` để đếm số từ.  
**Điều kiện:** Tệp phải tồn tại và có thể đọc được.  
**Input:** Đường dẫn tệp cần đọc.  
**Output:\*\* Số từ trong tệp.

---

### Bài Tập 19: Trích xuất ký tự từ nhiều tệp văn bản và đưa chúng vào danh sách

**Yêu cầu:** Viết một chương trình Python để trích xuất các ký tự từ nhiều tệp văn bản và đưa chúng vào một danh sách.  
**Gợi ý:** Sử dụng vòng lặp để duyệt qua các tệp và phương thức `read()` để đọc các ký tự.  
**Điều kiện:** Các tệp phải tồn tại và có thể đọc được.  
**Input:** Danh sách đường dẫn tệp cần đọc.  
**Output:** Danh sách chứa các ký tự từ các tệp.

---

### Bài Tập 20: Tạo 26 tệp văn bản từ A.txt đến Z.txt

**Yêu cầu:** Viết một chương trình Python để tạo 26 tệp văn bản có tên từ A.txt, B.txt, và tiếp tục cho đến Z.txt.  
**Gợi ý:** Sử dụng vòng lặp `for` để tạo từng tệp với tên tương ứng.  
**Điều kiện:** Tệp có thể ghi được.  
**Input:** Không yêu cầu input từ người dùng.  
**Output:** 26 tệp văn bản có tên từ A.txt đến Z.txt.

---

### Bài Tập 21: Tạo một tệp chứa tất cả các chữ cái trong bảng chữ cái tiếng Anh theo số lượng chữ cái trên mỗi dòng

**Yêu cầu:** Viết một chương trình Python để tạo một tệp mà tất cả các chữ cái trong bảng chữ cái tiếng Anh được liệt kê theo số lượng chữ cái trên mỗi dòng.  
**Gợi ý:** Sử dụng vòng lặp và slicing để cắt các chữ cái và ghi vào tệp.  
**Điều kiện:** Tệp có thể ghi được.  
**Input:** Số lượng chữ cái trên mỗi dòng (ví dụ: 5).  
**Output:** Tệp chứa các chữ cái theo định dạng đã cho.
