# Đáp án chương 2: Cấu trúc chương trình Python

### Bài Tập 1: Viết chương trình Hello World đầu tiên trong Python

- **Yêu cầu:** Viết chương trình Python để in dòng chữ "Hello World".
- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**
  ```
  Hello World
  ```
- **Gợi ý:** Sử dụng hàm `print()` để in dòng chữ ra màn hình.
- **Giải pháp:**

```python
print("Hello World")
```

---

### Bài Tập 2: Viết chương trình tính tổng hai số

- **Yêu cầu:** Viết chương trình Python để tính tổng của hai số nguyên.
- **Dữ liệu đầu vào:** `a = 10`, `b = 20`
- **Kết quả mong đợi:**
  ```
  Tổng của 10 và 20 là 30
  ```
- **Gợi ý:** Sử dụng toán tử `+` để tính tổng của hai số.
- **Giải pháp:**

```python
a = 10
b = 20
print(f"Tổng của {a} và {b} là {a + b}")
```

---

### Bài Tập 3: Tính tổng, hiệu, tích, thương của hai số

- **Yêu cầu:** Viết chương trình Python để tính tổng, hiệu, tích, và thương của hai số nguyên.
- **Dữ liệu đầu vào:** `a = 15`, `b = 5`
- **Kết quả mong đợi:**
  ```
  Tổng: 20
  Hiệu: 10
  Tích: 75
  Thương: 3.0
  ```
- **Gợi ý:** Sử dụng các toán tử `+`, `-`, `*`, `/` để thực hiện các phép toán.
- **Giải pháp:**

```python
a = 15
b = 5
print(f"Tổng: {a + b}")
print(f"Hiệu: {a - b}")
print(f"Tích: {a * b}")
print(f"Thương: {a / b}")
```

---

### Bài Tập 4: Tính diện tích hình chữ nhật

- **Yêu cầu:** Viết chương trình Python để tính diện tích của một hình chữ nhật.
- **Dữ liệu đầu vào:** `length = 10`, `width = 5`
- **Kết quả mong đợi:**
  ```
  Diện tích hình chữ nhật là 50
  ```
- **Gợi ý:** Sử dụng công thức `diện tích = chiều dài * chiều rộng`.
- **Giải pháp:**

```python
length = 10
width = 5
area = length * width
print(f"Diện tích hình chữ nhật là {area}")
```

---

### Bài Tập 5: Khai báo biến trong Python

- **Yêu cầu:** Viết chương trình Python để khai báo một số biến và in giá trị của chúng.
- **Dữ liệu đầu vào:** Không có (sử dụng ví dụ mẫu).
- **Kết quả mong đợi:**
  ```
  Tuổi: 25
  Chiều cao: 1.75
  Tên: John
  ```
- **Gợi ý:** Sử dụng cú pháp `variable_name = value` để khai báo biến.
- **Giải pháp:**

```python
age = 25
height = 1.75
name = "John"
print(f"Tuổi: {age}")
print(f"Chiều cao: {height}")
print(f"Tên: {name}")
```

---

### Bài Tập 6: Nối chuỗi và lặp chuỗi trong Python

- **Yêu cầu:** Viết chương trình Python để nối hai chuỗi và lặp một chuỗi.
- **Dữ liệu đầu vào:** `str1 = "Hello"`, `str2 = "World"`
- **Kết quả mong đợi:**
  ```
  HelloWorld
  HelloHelloHello
  ```
- **Gợi ý:** Sử dụng toán tử `+` để nối chuỗi và toán tử `*` để lặp chuỗi.
- **Giải pháp:**

```python
str1 = "Hello"
str2 = "World"
print(str1 + str2)
print(str1 * 3)
```

---

### Bài Tập 7: Tính chu vi hình chữ nhật

- **Yêu cầu:** Viết chương trình Python để tính chu vi của một hình chữ nhật.
- **Dữ liệu đầu vào:** `length = 10`, `width = 5`
- **Kết quả mong đợi:**
  ```
  Chu vi hình chữ nhật là 30
  ```
- **Gợi ý:** Sử dụng công thức `chu vi = 2 * (chiều dài + chiều rộng)`.
- **Giải pháp:**

```python
length = 10
width = 5
perimeter = 2 * (length + width)
print(f"Chu vi hình chữ nhật là {perimeter}")
```

---

### Bài Tập 8: Nhập và hiển thị tên và tuổi của một người

- **Yêu cầu:** Viết chương trình Python để nhập và hiển thị tên và tuổi của một người.
- **Dữ liệu đầu vào:**
  ```
  Nhập tên: John
  Nhập tuổi: 30
  ```
- **Kết quả mong đợi:**
  ```
  Tên của bạn là John và tuổi của bạn là 30
  ```
- **Gợi ý:** Sử dụng hàm `input()` để lấy dữ liệu từ người dùng.
- **Giải pháp:**

```python
name = input("Nhập tên: ")
age = input("Nhập tuổi: ")
print(f"Tên của bạn là {name} và tuổi của bạn là {age}")
```

---

### Bài Tập 9: Tính chu vi của một hình tròn

- **Yêu cầu:** Viết chương trình Python để tính chu vi của một hình tròn.
- **Dữ liệu đầu vào:** `radius = 7`
- **Kết quả mong đợi:**
  ```
  Chu vi hình tròn là 43.96
  ```
- **Gợi ý:** Sử dụng công thức `chu vi = 2 * pi * bán kính` với `pi = 3.14`.
- **Giải pháp:**

```python
radius = 7
pi = 3.14
circumference = 2 * pi * radius
print(f"Chu vi hình tròn là {circumference}")
```

---

### Bài Tập 10: Hoán đổi giá trị 2 biến

- **Yêu cầu:** Viết chương trình Python để hoán đổi giá trị của hai biến.
- **Dữ liệu đầu vào:** `a = 5`, `b = 10`
- **Kết quả mong đợi:**
  ```
  Giá trị của a: 10
  Giá trị của b: 5
  ```
- **Gợi ý:** Sử dụng cách hoán đổi giá trị của hai biến trong Python.
- **Giải pháp:**

```python
a = 5
b = 10

# Hoán đổi giá trị
a, b = b, a

print(f"Giá trị của a: {a}")
print(f"Giá trị của b: {b}")
```

---

### Bài Tập 11: Tính tổng các số từ 1 đến N

- **Yêu cầu:** Viết chương trình Python để tính tổng các số từ 1 đến N.
- **Dữ liệu đầu vào:** `N = 10`
- **Kết quả mong đợi:**
  ```
  Tổng các số từ 1 đến 10 là 55
  ```
- **Gợi ý:** Sử dụng vòng lặp `for` để tính tổng các số từ 1 đến N.
- **Giải pháp:**

```python
N = 10
total = 0
for i in range(1, N + 1):
    total += i
print(f"Tổng các số từ 1 đến {N} là {total}")
```

---

### Bài Tập 12: Kiểm tra số nguyên tố

- **Yêu cầu:** Viết chương trình Python để kiểm tra xem một số nhập vào có phải là số nguyên tố hay không.
- **Dữ liệu đầu vào:** `num = 7`
- **Kết quả mong đợi:**
  ```
  7 là số nguyên tố
  ```
- **Gợi ý:** Sử dụng vòng lặp và các câu lệnh `if` để kiểm tra tính chia hết của số đó với các số nhỏ hơn.
- **Giải pháp:**

```python
num = 7
if num > 1:
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            print(f"{num} không phải là số nguyên tố")
            break
    else:
        print(f"{num} là số nguyên tố")
else:
    print(f"{num} không phải là số nguyên tố")
```

---

### Bài Tập 13: Tạo

bảng cửu chương

- **Yêu cầu:** Viết chương trình Python để tạo bảng cửu chương của một số nhập vào.
- **Dữ liệu đầu vào:** `num = 5`
- **Kết quả mong đợi:**
  ```
  5 x 1 = 5
  5 x 2 = 10
  ...
  5 x 10 = 50
  ```
- **Gợi ý:** Sử dụng vòng lặp `for` để lặp qua các giá trị từ 1 đến 10.
- **Giải pháp:**

```python
num = 5
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")
```

---

### Bài Tập 14: Tính giai thừa của một số

- **Yêu cầu:** Viết chương trình Python để tính giai thừa của một số nguyên dương N.
- **Dữ liệu đầu vào:** `N = 5`
- **Kết quả mong đợi:**
  ```
  Giai thừa của 5 là 120
  ```
- **Gợi ý:** Sử dụng vòng lặp `for` để tính giai thừa.
- **Giải pháp:**

```python
N = 5
factorial = 1
for i in range(1, N + 1):
    factorial *= i
print(f"Giai thừa của {N} là {factorial}")
```

---

### Bài Tập 15: In các số chẵn từ 1 đến N

- **Yêu cầu:** Viết chương trình Python để in tất cả các số chẵn từ 1 đến N.
- **Dữ liệu đầu vào:** `N = 20`
- **Kết quả mong đợi:**
  ```
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20
  ```
- **Gợi ý:** Sử dụng vòng lặp `for` với điều kiện để kiểm tra số chẵn.
- **Giải pháp:**

```python
N = 20
for i in range(2, N + 1, 2):
    print(i, end=", ")
```

---

### Bài Tập 16: Tính lũy thừa của một số

- **Yêu cầu:** Viết chương trình Python để tính lũy thừa của một số nguyên dương với số mũ cho trước.
- **Dữ liệu đầu vào:** `base = 2`, `exponent = 3`
- **Kết quả mong đợi:**
  ```
  2^3 = 8
  ```
- **Gợi ý:** Sử dụng toán tử `**` để tính lũy thừa.
- **Giải pháp:**

```python
base = 2
exponent = 3
result = base ** exponent
print(f"{base}^{exponent} = {result}")
```

---
