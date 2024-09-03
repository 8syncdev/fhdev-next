# Đáp án chương 16: Testing và Debugging

### Problem 1: Sửa lỗi hiển thị tên đối tượng Model trong Django

**Problem:**  
Khi in ra một đối tượng `Comment`, nó hiển thị `[Comment object (1)]` thay vì hiển thị theo định nghĩa trong hàm `__str__()`.

**Code ban đầu:**

```python
class Comment(models.Model):
  comment = models.TextField()
  listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def _str__(self):  # LỖI: Tên phương thức sai
    return f'{self.id}: {self.comment}'
```

**Code đã sửa:**

```python
class Comment(models.Model):
  comment = models.TextField()
  listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):  # Sửa tên phương thức thành __str__()
    return f'{self.id}: {self.comment}'
```

**Giải thích:**  
Tên phương thức `__str__()` đã bị viết sai thành `_str__()`. Việc sửa lại tên phương thức đúng sẽ giúp Django hiển thị chuỗi đại diện mong muốn cho đối tượng `Comment`.

---

### Problem 2: Tìm giá trị nhỏ nhất trong danh sách mà không dùng hàm `min`

**Problem:**  
Code dưới đây không thể tìm ra phần tử nhỏ nhất trong danh sách.

**Code ban đầu:**

```python
def minimum(some_list):
    a = 0
    for x in range(1, len(some_list)):
        if some_list[x] < a:
            a = some_list[x]
    return a
```

**Code đã sửa:**

```python
def minimum(some_list):
    a = some_list[0]  # Khởi tạo a với phần tử đầu tiên trong danh sách
    for x in range(1, len(some_list)):
        if some_list[x] < a:
            a = some_list[x]
    return a
```

**Giải thích:**  
Biến `a` được khởi tạo với giá trị `0` thay vì phần tử đầu tiên của danh sách, dẫn đến việc so sánh sai. Việc khởi tạo `a` với giá trị của phần tử đầu tiên trong danh sách sẽ khắc phục lỗi này.

---

### Problem 3: Khắc phục lỗi khi đọc tệp JSON trong Python

**Problem:**  
Tại sao đoạn Code dưới đây không hoạt động và làm sao để sửa nó?

**Code ban đầu:**

```python
import json

with open('data.json') as file:
    data = json.load(file)
    print(data['key'])  # Lỗi xảy ra ở đây
```

**Code đã sửa:**

```python
import json

try:
    with open('data.json') as file:
        data = json.load(file)
        print(data['key'])  # Kiểm tra sự tồn tại của khóa trước khi in
except KeyError:
    print("Khóa 'key' không tồn tại trong tệp JSON.")
except FileNotFoundError:
    print("Tệp JSON không tồn tại.")
```

**Giải thích:**  
Kiểm tra kỹ lưỡng sự tồn tại của khóa trước khi truy cập để tránh lỗi `KeyError`. Nếu tệp JSON không có khóa `key`, chương trình sẽ thông báo lỗi thay vì gây ra ngoại lệ.

---

### Problem 4: Bắt lỗi khi làm việc với hàm đệ quy

**Problem:**  
Tại sao đoạn Code dưới đây lại gây ra lỗi và làm thế nào để sửa nó?

**Code ban đầu:**

```python
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(0))
```

**Code đã sửa:**

```python
def factorial(n):
    if n == 0:  # Thêm điều kiện cơ sở cho n = 0
        return 1
    elif n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(0))
```

**Giải thích:**  
Hàm đệ quy cần một điều kiện cơ sở để dừng đệ quy. Điều kiện cơ sở cho trường hợp `n = 0` đã bị bỏ qua, gây ra lỗi khi gọi hàm `factorial(0)`. Việc thêm điều kiện cơ sở cho `n = 0` sẽ khắc phục vấn đề.

---

### Problem 5: Xử lý lỗi chia cho 0

**Problem:**  
Viết một đoạn Code để thực hiện phép chia hai số và xử lý lỗi chia cho 0.

**Code ban đầu:**

```python
def divide_numbers(a, b):
    return a / b

# Gọi hàm
result = divide_numbers(10, 0)
print(result)
```

**Code đã sửa:**

```python
def divide_numbers(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Lỗi: Không thể chia cho 0!"

# Gọi hàm
result = divide_numbers(10, 0)
print(result)
```

**Giải thích:**  
Sử dụng cấu trúc `try-except` để bắt lỗi `ZeroDivisionError` khi thực hiện phép chia. Nếu xảy ra lỗi chia cho 0, chương trình sẽ trả về thông báo lỗi thay vì gây ra ngoại lệ.

---

### Problem 6: Khắc phục lỗi khi sử dụng hàm `input`

**Problem:**  
Chương trình không hoạt động như mong đợi khi người dùng nhập vào dữ liệu không phải là số.

**Code ban đầu:**

```python
number = input("Nhập một số: ")
if number > 0:
    print("Đây là số nguyên dương")
else:
    print("Đây không phải là số nguyên dương")
```

**Code đã sửa:**

```python
try:
    number = int(input("Nhập một số: "))  # Chuyển đổi đầu vào thành số nguyên
    if number > 0:
        print("Đây là số nguyên dương")
    else:
        print("Đây không phải là số nguyên dương")
except ValueError:
    print("Lỗi: Vui lòng nhập một số hợp lệ.")
```

**Giải thích:**  
Hàm `input()` trả về một chuỗi, do đó cần chuyển đổi chuỗi thành số nguyên bằng `int()` trước khi so sánh. Sử dụng `try-except` để bắt lỗi nếu người dùng nhập vào dữ liệu không hợp lệ.

---

### Problem 7: Xử lý lỗi với danh sách rỗng

**Problem:**  
Viết lại hàm dưới đây để nó có thể xử lý trường hợp danh sách rỗng mà không bị lỗi.

**Code ban đầu:**

```python
def find_max(some_list):
    max_value = some_list[0]
    for number in some_list:
        if number > max_value:
            max_value = number
    return max_value
```

**Code đã sửa:**

```python
def find_max(some_list):
    if not some_list:  # Kiểm tra nếu danh sách rỗng
        return "Danh sách rỗng!"

    max_value = some_list[0]
    for number in some_list:
        if number > max_value:
            max_value = number
    return max_value
```

**Giải thích:**  
Trước khi thực hiện tìm giá trị lớn nhất, cần kiểm tra xem danh sách có rỗng không. Nếu danh sách rỗng, chương trình sẽ trả về thông báo thích hợp thay vì gây ra lỗi.

---

### Problem 8: Khắc phục lỗi `IndexError` khi truy cập phần tử của danh sách

**Problem:**  
Viết một đoạn Code để truy cập phần tử tại một chỉ mục cho trước mà không gây ra lỗi `IndexError`.

**Code ban đầu:**

```python
some_list = [1, 2, 3, 4, 5]
index = 10
element = some_list[index]  # Lỗi có thể xảy ra ở đây
print(element)
```

**Code đã sửa:**

```python
some_list = [1, 2, 3, 4, 5]
index = 10

try:
    element = some_list[index]  # Thử truy cập phần tử tại chỉ mục
    print(element)
except IndexError:
    print(f"Chỉ mục {index} vượt quá giới hạn của danh sách.")
```

**Giải thích:**  
Khi truy cập phần tử của danh sách với chỉ mục không tồn tại, lỗi `IndexError` có thể xảy ra. Sử dụng `try-except` để bắt lỗi này và thông báo lỗi một cách rõ ràng.

---

### Problem 9: Khắc phục lỗi khi chuyển đổi chuỗi thành số nguyên

**Problem:**  
Sửa đoạn Code dưới đây để đảm bảo chương trình không bị lỗi khi người dùng nhập vào giá trị không hợp lệ.

**Code ban đầu:**

```python
user_input =

 input("Nhập một số: ")
number = int(user_input)
print(f"Số bạn vừa nhập là: {number}")
```

**Code đã sửa:**

```python
try:
    user_input = input("Nhập một số: ")
    number = int(user_input)  # Chuyển đổi chuỗi thành số nguyên
    print(f"Số bạn vừa nhập là: {number}")
except ValueError:
    print("Lỗi: Vui lòng nhập một số hợp lệ.")
```

**Giải thích:**  
Khi người dùng nhập vào giá trị không hợp lệ (không thể chuyển đổi thành số nguyên), chương trình sẽ gây ra lỗi `ValueError`. Sử dụng `try-except` để bắt và xử lý lỗi này.

---

### Problem 10: Debugging lỗi `TypeError` trong hàm tính tổng

**Problem:**  
Tại sao đoạn Code dưới đây không hoạt động và làm sao để sửa nó?

**Code ban đầu:**

```python
def add_numbers(a, b):
    return a + b

print(add_numbers("2", 3))
```

**Code đã sửa:**

```python
def add_numbers(a, b):
    try:
        return int(a) + int(b)  # Chuyển đổi cả hai tham số thành số nguyên trước khi cộng
    except ValueError:
        return "Lỗi: Cả hai tham số phải là số."

print(add_numbers("2", 3))
```

**Giải thích:**  
Lỗi `TypeError` xảy ra khi cố gắng cộng một chuỗi với một số. Chuyển đổi cả hai tham số thành số nguyên trước khi thực hiện phép cộng sẽ khắc phục vấn đề này. Nếu một trong hai tham số không thể chuyển đổi thành số, chương trình sẽ trả về thông báo lỗi thích hợp.
