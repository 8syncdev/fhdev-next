# Đáp án chương 15: Lỗi và ngoại lệ

### Bài Tập 1: Bắt lỗi chia cho 0

**Yêu cầu:** Viết một chương trình Python để thực hiện phép chia hai số. Sử dụng cấu trúc `try-except` để bắt lỗi chia cho 0.

**Đáp án:**

```python
try:
    numerator = float(input("Nhập tử số: "))  # Yêu cầu người dùng nhập tử số
    denominator = float(input("Nhập mẫu số: "))  # Yêu cầu người dùng nhập mẫu số
    result = numerator / denominator  # Thực hiện phép chia
    print(f"Kết quả: {result}")  # In kết quả
except ZeroDivisionError:  # Bắt lỗi chia cho 0
    print("Lỗi: Không thể chia cho 0!")  # Thông báo lỗi nếu mẫu số bằng 0
```

---

### Bài Tập 2: Bắt lỗi nhập liệu

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập một số. Sử dụng cấu trúc `try-except` để bắt lỗi khi người dùng nhập vào không phải là số.

**Đáp án:**

```python
try:
    number = float(input("Nhập một số: "))  # Yêu cầu người dùng nhập một số
    print(f"Số bạn đã nhập là: {number}")  # In ra số vừa nhập
except ValueError:  # Bắt lỗi khi đầu vào không phải là số
    print("Lỗi: Bạn phải nhập một số!")  # Thông báo lỗi
```

---

### Bài Tập 3: Bắt lỗi chỉ mục không tồn tại

**Yêu cầu:** Viết một chương trình Python để truy cập một phần tử trong danh sách. Sử dụng `try-except` để bắt lỗi khi truy cập vào chỉ mục không tồn tại.

**Đáp án:**

```python
my_list = [1, 2, 3, 4, 5]  # Tạo một danh sách ví dụ

try:
    index = int(input("Nhập chỉ mục muốn truy cập: "))  # Yêu cầu người dùng nhập chỉ mục
    print(f"Phần tử tại chỉ mục {index} là {my_list[index]}")  # Truy cập phần tử tại chỉ mục đó
except IndexError:  # Bắt lỗi khi chỉ mục không tồn tại
    print("Lỗi: Chỉ mục không tồn tại!")  # Thông báo lỗi
```

---

### Bài Tập 4: Xử lý nhiều ngoại lệ

**Yêu cầu:** Viết một chương trình Python có thể bắt nhiều loại lỗi (chia cho 0, nhập liệu sai, chỉ mục không tồn tại) và in ra thông báo lỗi tương ứng.

**Đáp án:**

```python
try:
    number = int(input("Nhập một số nguyên: "))  # Yêu cầu người dùng nhập một số nguyên
    divisor = int(input("Nhập số chia: "))  # Yêu cầu người dùng nhập số chia
    result = number / divisor  # Thực hiện phép chia
    print(f"Kết quả: {result}")
    index = int(input("Nhập chỉ mục muốn truy cập: "))  # Yêu cầu người dùng nhập chỉ mục
    print(f"Phần tử tại chỉ mục {index} là {my_list[index]}")  # Truy cập phần tử tại chỉ mục đó
except ZeroDivisionError:  # Bắt lỗi chia cho 0
    print("Lỗi: Không thể chia cho 0!")  # Thông báo lỗi chia cho 0
except ValueError:  # Bắt lỗi nhập liệu không phải là số
    print("Lỗi: Bạn phải nhập một số nguyên!")  # Thông báo lỗi nhập liệu
except IndexError:  # Bắt lỗi khi chỉ mục không tồn tại
    print("Lỗi: Chỉ mục không tồn tại!")  # Thông báo lỗi chỉ mục
```

---

### Bài Tập 5: Bắt lỗi và tiếp tục chương trình

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào hai số và thực hiện phép chia. Nếu có lỗi xảy ra, chương trình vẫn tiếp tục yêu cầu người dùng nhập liệu.

**Đáp án:**

```python
while True:  # Vòng lặp để tiếp tục yêu cầu nhập liệu
    try:
        numerator = float(input("Nhập tử số: "))  # Yêu cầu người dùng nhập tử số
        denominator = float(input("Nhập mẫu số: "))  # Yêu cầu người dùng nhập mẫu số
        result = numerator / denominator  # Thực hiện phép chia
        print(f"Kết quả: {result}")
        break  # Thoát khỏi vòng lặp nếu không có lỗi
    except ZeroDivisionError:  # Bắt lỗi chia cho 0
        print("Lỗi: Không thể chia cho 0! Vui lòng thử lại.")  # Thông báo lỗi và yêu cầu nhập lại
    except ValueError:  # Bắt lỗi khi nhập không phải là số
        print("Lỗi: Vui lòng nhập một số hợp lệ.")  # Thông báo lỗi và yêu cầu nhập lại
```

---

### Bài Tập 6: Sử dụng khối `finally`

**Yêu cầu:** Viết một chương trình Python để mở một tệp và đọc nội dung của nó. Sử dụng `try-except-finally` để đảm bảo rằng tệp luôn được đóng sau khi xử lý, ngay cả khi có lỗi xảy ra.

**Đáp án:**

```python
try:
    file = open('example.txt', 'r')  # Mở tệp để đọc
    content = file.read()  # Đọc nội dung tệp
    print(content)
except FileNotFoundError:  # Bắt lỗi nếu tệp không tồn tại
    print("Lỗi: Không tìm thấy tệp.")  # Thông báo lỗi
finally:
    file.close()  # Đảm bảo tệp luôn được đóng
    print("Tệp đã được đóng.")  # Thông báo rằng tệp đã đóng
```

---

### Bài Tập 7: Kiểm tra lỗi có xảy ra hay không

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào một số nguyên. Sử dụng `try-except-else` để kiểm tra xem lỗi có xảy ra hay không và in ra một thông báo thích hợp.

**Đáp án:**

```python
try:
    number = int(input("Nhập một số nguyên: "))  # Yêu cầu người dùng nhập một số nguyên
except ValueError:  # Bắt lỗi nếu nhập không phải là số nguyên
    print("Lỗi: Đó không phải là một số nguyên!")  # Thông báo lỗi
else:
    print(f"Bạn đã nhập số {number} thành công.")  # Nếu không có lỗi, in thông báo thành công
```

---

### Bài Tập 8: Tạo ngoại lệ tùy chỉnh đơn giản

**Yêu cầu:** Viết một ngoại lệ tùy chỉnh tên là `NegativeNumberError`, được kích hoạt khi người dùng nhập vào một số âm.

**Đáp án:**

```python
# Tạo ngoại lệ tùy chỉnh kế thừa từ lớp Exception
class NegativeNumberError(Exception):
    pass

def check_positive(number):
    if number < 0:  # Kiểm tra nếu số là số âm
        raise NegativeNumberError("Lỗi: Bạn đã nhập một số âm.")  # Kích hoạt ngoại lệ tùy chỉnh
    return number

try:
    num = int(input("Nhập một số dương: "))  # Yêu cầu người dùng nhập một số
    check_positive(num)  # Kiểm tra số đó có phải là số dương không
except NegativeNumberError as e:  # Bắt ngoại lệ tùy chỉnh
    print(e)  # In thông báo lỗi
```

---

### Bài Tập 9: Kích hoạt ngoại lệ tùy chỉnh

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào một số dương. Nếu người dùng nhập vào số âm, kích hoạt ngoại lệ `NegativeNumberError` đã tạo ở bài tập trước.

**Đáp án:**

```python
try:
    num = int(input("Nhập một số dương: "))  # Yêu cầu người dùng nhập một số
    check_positive(num)  # Kiểm tra số đó có phải là số dương không
except NegativeNumberError as e:  # Bắt ngoại lệ tùy chỉnh
    print(e)  # In thông báo lỗi
```

---

### Bài Tập 10: Xử lý ngoại lệ tùy chỉnh

**Yêu cầu:** Sử dụng ngoại lệ `NegativeNumberError` đã tạo ở bài tập trước, bắt và xử lý ngoại lệ này trong một chương trình Python yêu cầu người dùng nhập một số dương.

**Đáp án:**

```python
try:
    num = int(input("Nhập một số dương: "))  # Yêu cầu người dùng nhập một số
    check_positive(num)  # Kiểm tra số đó có phải là số dương không
except NegativeNumberError as e:  # Bắt

 ngoại lệ tùy chỉnh
    print(f"Đã xảy ra ngoại lệ: {e}")  # In thông báo lỗi
else:
    print(f"Số bạn đã nhập là {num}")  # Nếu không có lỗi, in thông báo thành công
```

---

### Bài Tập 11: Bắt ngoại lệ từ nhiều chức năng

**Yêu cầu:** Viết một chương trình Python có nhiều chức năng. Một trong các chức năng này sẽ kích hoạt ngoại lệ (chẳng hạn chia cho 0), và ngoại lệ này cần được bắt ở chức năng khác.

**Đáp án:**

```python
def divide_numbers(a, b):
    return a / b  # Hàm thực hiện phép chia hai số

def process_division():
    try:
        a = float(input("Nhập số thứ nhất: "))  # Yêu cầu người dùng nhập số thứ nhất
        b = float(input("Nhập số thứ hai: "))  # Yêu cầu người dùng nhập số thứ hai
        result = divide_numbers(a, b)  # Thực hiện phép chia
        print(f"Kết quả: {result}")
    except ZeroDivisionError:  # Bắt lỗi chia cho 0
        print("Lỗi: Không thể chia cho 0!")

process_division()  # Gọi hàm để thực hiện chương trình
```

---

### Bài Tập 12: Ngoại lệ và hàm đệ quy

**Yêu cầu:** Viết một chương trình Python sử dụng hàm đệ quy để tính giai thừa của một số. Sử dụng `try-except` để xử lý trường hợp người dùng nhập vào một số âm, kích hoạt ngoại lệ tùy chỉnh `NegativeNumberError`.

**Đáp án:**

```python
def factorial(n):
    if n < 0:  # Kiểm tra nếu số là số âm
        raise NegativeNumberError("Lỗi: Số âm không có giai thừa.")  # Kích hoạt ngoại lệ tùy chỉnh
    elif n == 0 hoặc n == 1:
        return 1  # Giai thừa của 0 và 1 là 1
    else:
        return n * factorial(n-1)  # Đệ quy tính giai thừa

try:
    num = int(input("Nhập một số nguyên không âm: "))  # Yêu cầu người dùng nhập một số nguyên
    result = factorial(num)  # Tính giai thừa
    print(f"Giai thừa của {num} là {result}")
except NegativeNumberError as e:  # Bắt ngoại lệ tùy chỉnh
    print(e)  # In thông báo lỗi
```

---

### Bài Tập 13: Kết hợp ngoại lệ tùy chỉnh với ngoại lệ hệ thống

**Yêu cầu:** Viết một chương trình Python để yêu cầu người dùng nhập vào hai số. Nếu người dùng nhập vào số âm, kích hoạt ngoại lệ `NegativeNumberError`. Nếu người dùng nhập sai loại dữ liệu, bắt lỗi `ValueError`.

**Đáp án:**

```python
try:
    a = int(input("Nhập số thứ nhất: "))  # Yêu cầu người dùng nhập số thứ nhất
    check_positive(a)  # Kiểm tra số đó có phải là số dương không
    b = int(input("Nhập số thứ hai: "))  # Yêu cầu người dùng nhập số thứ hai
    check_positive(b)  # Kiểm tra số đó có phải là số dương không
    result = a / b  # Thực hiện phép chia
    print(f"Kết quả: {result}")
except NegativeNumberError as e:  # Bắt ngoại lệ tùy chỉnh
    print(e)  # In thông báo lỗi
except ValueError:  # Bắt lỗi khi nhập không phải là số nguyên
    print("Lỗi: Bạn phải nhập một số nguyên!")  # Thông báo lỗi
```

---

### Bài Tập 14: Bắt và xử lý ngoại lệ lồng nhau

**Yêu cầu:** Viết một chương trình Python để bắt và xử lý ngoại lệ lồng nhau, chẳng hạn như ngoại lệ xảy ra bên trong một ngoại lệ khác.

**Đáp án:**

```python
try:
    try:
        num = int(input("Nhập một số: "))  # Yêu cầu người dùng nhập một số
        result = 10 / num  # Thực hiện phép chia
    except ZeroDivisionError:  # Bắt lỗi chia cho 0
        print("Lỗi: Không thể chia cho 0!")
        raise  # Kích hoạt lại ngoại lệ
except Exception as e:  # Bắt mọi ngoại lệ khác
    print(f"Một lỗi đã xảy ra: {e}")  # In thông báo lỗi
```

---

### Bài Tập 15: Ghi log ngoại lệ

**Yêu cầu:** Viết một chương trình Python để bắt ngoại lệ và ghi log lỗi vào một tệp log.

**Đáp án:**

```python
import logging  # Nhập thư viện logging

logging.basicConfig(filename='error.log', level=logging.ERROR)  # Thiết lập cấu hình ghi log

try:
    num = int(input("Nhập một số: "))  # Yêu cầu người dùng nhập một số
    result = 10 / num  # Thực hiện phép chia
except Exception as e:  # Bắt mọi ngoại lệ
    logging.error(f"Đã xảy ra lỗi: {e}")  # Ghi lỗi vào tệp log
    print("Đã ghi lỗi vào tệp log.")  # Thông báo lỗi đã được ghi
```

---

### Bài Tập 16: Tạo một ứng dụng nhỏ với nhiều ngoại lệ

**Yêu cầu:** Viết một chương trình Python giả lập một máy tính đơn giản với các phép toán cộng, trừ, nhân, chia. Xử lý các ngoại lệ như chia cho 0, nhập sai loại dữ liệu, và ngoại lệ tùy chỉnh cho trường hợp nhập số âm.

**Đáp án:**

```python
def calculator():
    try:
        a = float(input("Nhập số thứ nhất: "))  # Yêu cầu người dùng nhập số thứ nhất
        b = float(input("Nhập số thứ hai: "))  # Yêu cầu người dùng nhập số thứ hai
        operation = input("Chọn phép toán (+, -, *, /): ")  # Yêu cầu chọn phép toán

        if operation == '+':
            result = a + b  # Thực hiện phép cộng
        elif operation == '-':
            result = a - b  # Thực hiện phép trừ
        elif operation == '*':
            result = a * b  # Thực hiện phép nhân
        elif operation == '/':
            result = a / b  # Thực hiện phép chia
        else:
            print("Phép toán không hợp lệ.")
            return

        print(f"Kết quả: {result}")

    except ZeroDivisionError:  # Bắt lỗi chia cho 0
        print("Lỗi: Không thể chia cho 0!")
    except ValueError:  # Bắt lỗi khi nhập không phải là số
        print("Lỗi: Vui lòng nhập số hợp lệ.")
    except NegativeNumberError as e:  # Bắt ngoại lệ tùy chỉnh
        print(e)  # In thông báo lỗi

calculator()  # Gọi hàm để thực hiện chương trình
```

---

### Bài Tập 17: Tạo một hệ thống đăng nhập với ngoại lệ

**Yêu cầu:** Viết một chương trình Python mô phỏng hệ thống đăng nhập. Nếu người dùng nhập sai mật khẩu quá 3 lần, kích hoạt một ngoại lệ tùy chỉnh `LoginFailedError`.

**Đáp án:**

```python
class LoginFailedError(Exception):  # Tạo ngoại lệ tùy chỉnh cho lỗi đăng nhập
    pass

def login_system():
    correct_password = "python123"  # Mật khẩu đúng
    attempts = 0

    while attempts < 3:  # Giới hạn số lần thử
        password = input("Nhập mật khẩu: ")  # Yêu cầu người dùng nhập mật khẩu
        if password == correct_password:  # Kiểm tra mật khẩu đúng hay không
            print("Đăng nhập thành công!")  # Thông báo đăng nhập thành công
            return
        else:
            print("Mật khẩu sai!")  # Thông báo mật khẩu sai
            attempts += 1  # Tăng số lần thử

    raise LoginFailedError("Lỗi: Bạn đã nhập sai mật khẩu quá 3 lần.")  # Kích hoạt ngoại lệ sau 3 lần thử

try:
    login_system()  # Gọi hàm đăng nhập
except LoginFailedError as e:  # Bắt ngoại lệ đăng nhập
    print(e)  # In thông báo lỗi
```

---

### Bài Tập 18: Tạo một thư viện xử lý ngoại lệ

**Yêu cầu:** Viết một thư viện Python chứa nhiều loại ngoại lệ tùy chỉnh và các hàm xử lý ngoại lệ cho các tình huống khác nhau, chẳng hạn như xử lý lỗi kết nối, lỗi cơ sở dữ liệu, lỗi tệp tin.

**Đáp án:**

```python
# custom_exceptions.py

# Tạo các ngoại lệ tùy chỉnh cho các tình huống khác nhau
class ConnectionError(Exception):
    pass

class DatabaseError(Exception):
    pass

class FileNotFoundErrorCustom(Exception):
    pass

def connect_to_server(server):
    if server != "localhost":  # Kiểm

 tra nếu server không phải localhost
        raise ConnectionError("Không thể kết nối tới server.")  # Kích hoạt ngoại lệ kết nối

def access_database(db):
    if db != "my_database":  # Kiểm tra nếu cơ sở dữ liệu không phải my_database
        raise DatabaseError("Lỗi cơ sở dữ liệu.")  # Kích hoạt ngoại lệ cơ sở dữ liệu

def open_file(file):
    if file != "example.txt":  # Kiểm tra nếu tệp không phải example.txt
        raise FileNotFoundErrorCustom("Tệp không tồn tại.")  # Kích hoạt ngoại lệ tệp không tìm thấy

# main.py
from custom_exceptions import *  # Import các ngoại lệ tùy chỉnh từ file custom_exceptions

try:
    connect_to_server("remote_server")  # Thử kết nối tới server
except ConnectionError as e:  # Bắt lỗi kết nối
    print(e)  # In thông báo lỗi

try:
    access_database("unknown_db")  # Thử truy cập cơ sở dữ liệu
except DatabaseError as e:  # Bắt lỗi cơ sở dữ liệu
    print(e)  # In thông báo lỗi

try:
    open_file("non_existent_file.txt")  # Thử mở một tệp không tồn tại
except FileNotFoundErrorCustom as e:  # Bắt lỗi tệp không tìm thấy
    print(e)  # In thông báo lỗi
```
