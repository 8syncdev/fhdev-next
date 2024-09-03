# Bài tập chương 16: Testing và Debugging

### Problem 1: Sửa lỗi hiển thị tên đối tượng Model trong Django

**Context:**  
Để thay đổi tên hiển thị của các đối tượng Model trong Django, chúng ta sử dụng hàm `__str__()` trong một model. Hàm `__str__()` trong một model Django trả về một chuỗi được hiển thị dưới dạng tên của các đối tượng model đó.

**Problem:**  
Khi in ra một đối tượng `Comment`, nó hiển thị `[Comment object (1)]` thay vì hiển thị theo định nghĩa trong hàm `__str__()`.

**Code minh họa:**

```python
# imports here

class Listing(models.Model):
  max_bid = models.DecimalField(...)
  ...

  def __str__(self):
    return ...

class Bid(models.Model):
  ...

class User(AbstractUser):
  ...

class Comment(models.Model):
  comment = models.TextField()
  listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def _str__(self):  # LỖI: Tên phương thức sai
    return f'{self.id}: {self.comment}'
```

**Gợi ý:** Kiểm tra kỹ xem tên của phương thức `__str__()` đã được viết chính xác chưa.

---

### Problem 2: Tìm giá trị nhỏ nhất trong danh sách mà không dùng hàm `min`

**Context:**  
Người đồng nghiệp của bạn đang cố gắng tìm giá trị nhỏ nhất trong một danh sách mà không sử dụng hàm `min`.

**Problem:**  
Mã dưới đây không thể tìm ra phần tử nhỏ nhất trong danh sách. Tại sao?

**Code minh họa:**

```python
def minimum(some_list):
    a = 0
    for x in range(1, len(some_list)):
        if some_list[x] < a:
            a = some_list[x]
    return a
```

**Gợi ý:** Xem xét giá trị khởi tạo của biến `a`.

---

### Problem 3: Khắc phục lỗi khi đọc tệp JSON trong Python

**Context:**  
Bạn cần đọc một tệp JSON và chuyển đổi nó thành đối tượng Python để xử lý. Tuy nhiên, khi chạy chương trình, một ngoại lệ được ném ra.

**Problem:**  
Tại sao đoạn mã dưới đây không hoạt động và làm sao để sửa nó?

**Code minh họa:**

```python
import json

with open('data.json') as file:
    data = json.load(file)
    print(data['key'])  # Lỗi xảy ra ở đây
```

**Gợi ý:** Kiểm tra kỹ tệp JSON để xem có khóa `key` không và nếu không có, hãy thêm xử lý ngoại lệ.

---

### Problem 4: Bắt lỗi khi làm việc với hàm đệ quy

**Context:**  
Bạn đang viết một hàm đệ quy để tính giai thừa của một số. Nhưng khi chạy, chương trình bị lỗi và không trả về kết quả.

**Problem:**  
Tại sao đoạn mã dưới đây lại gây ra lỗi và làm thế nào để sửa nó?

**Code minh họa:**

```python
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(0))
```

**Gợi ý:** Xem xét điều kiện cơ sở của hàm đệ quy để đảm bảo rằng nó xử lý được mọi giá trị của `n`.

---

### Problem 5: Xử lý lỗi chia cho 0

**Context:**  
Bạn đang phát triển một ứng dụng máy tính đơn giản và cần xử lý các trường hợp chia cho 0.

**Problem:**  
Viết một đoạn mã để thực hiện phép chia hai số và xử lý lỗi chia cho 0.

**Code minh họa:**

```python
def divide_numbers(a, b):
    return a / b

# Gọi hàm
result = divide_numbers(10, 0)
print(result)
```

**Gợi ý:** Sử dụng cấu trúc `try-except` để bắt và xử lý ngoại lệ.

---

### Problem 6: Khắc phục lỗi khi sử dụng hàm `input`

**Context:**  
Bạn viết một chương trình yêu cầu người dùng nhập một số và kiểm tra xem số đó có phải là số nguyên dương không.

**Problem:**  
Chương trình không hoạt động như mong đợi khi người dùng nhập vào dữ liệu không phải là số.

**Code minh họa:**

```python
number = input("Nhập một số: ")
if number > 0:
    print("Đây là số nguyên dương")
else:
    print("Đây không phải là số nguyên dương")
```

**Gợi ý:** Kiểm tra kiểu dữ liệu của biến `number` sau khi nhận giá trị từ `input()`.

---

### Problem 7: Xử lý lỗi với danh sách rỗng

**Context:**  
Bạn có một hàm để tìm giá trị lớn nhất trong một danh sách, nhưng khi danh sách rỗng, chương trình bị lỗi.

**Problem:**  
Viết lại hàm dưới đây để nó có thể xử lý trường hợp danh sách rỗng mà không bị lỗi.

**Code minh họa:**

```python
def find_max(some_list):
    max_value = some_list[0]
    for number in some_list:
        if number > max_value:
            max_value = number
    return max_value
```

**Gợi ý:** Thêm kiểm tra đầu vào để đảm bảo danh sách không rỗng.

---

### Problem 8: Khắc phục lỗi `IndexError` khi truy cập phần tử của danh sách

**Context:**  
Bạn đang viết một chương trình truy cập các phần tử trong một danh sách. Tuy nhiên, khi chỉ mục lớn hơn độ dài danh sách, chương trình bị lỗi.

**Problem:**  
Viết một đoạn mã để truy cập phần tử tại một chỉ mục cho trước mà không gây ra lỗi `IndexError`.

**Code minh họa:**

```python
some_list = [1, 2, 3, 4, 5]
index = 10
element = some_list[index]  # Lỗi có thể xảy ra ở đây
print(element)
```

**Gợi ý:** Sử dụng cấu trúc `try-except` để bắt và xử lý ngoại lệ `IndexError`.

---

### Problem 9: Khắc phục lỗi khi chuyển đổi chuỗi thành số nguyên

**Context:**  
Bạn cần chuyển đổi một chuỗi nhập vào thành số nguyên để thực hiện tính toán. Tuy nhiên, khi người dùng nhập vào chuỗi không phải số, chương trình bị lỗi.

**Problem:**  
Sửa đoạn mã dưới đây để đảm bảo chương trình không bị lỗi khi người dùng nhập vào giá trị không hợp lệ.

**Code minh họa:**

```python
user_input = input("Nhập một số: ")
number = int(user_input)
print(f"Số bạn vừa nhập là: {number}")
```

**Gợi ý:** Sử dụng `try-except` để bắt lỗi `ValueError` khi chuyển đổi.

---

### Problem 10: Debugging lỗi `TypeError` trong hàm tính tổng

**Context:**  
Bạn viết một hàm để tính tổng của hai số, nhưng chương trình bị lỗi khi chạy với một số đầu vào nhất định.

**Problem:**  
Tại sao đoạn mã dưới đây không hoạt động và làm sao để sửa nó?

**Code minh họa:**

```python
def add_numbers(a, b):
    return a + b

print(add_numbers("2", 3))
```

**Gợi ý:** Kiểm tra kiểu dữ liệu của các tham số đầu vào để đảm bảo chúng tương thích với phép toán cộng.
