# Đáp án chương 4: Vòng lặp

---

### Bài Tập 1: In 10 số tự nhiên đầu tiên sử dụng vòng lặp `while`

- **Yêu cầu:** Viết chương trình Python để in 10 số tự nhiên đầu tiên sử dụng vòng lặp `while`.
- **Dữ liệu đầu vào:** Không có (sử dụng vòng lặp cố định).
- **Kết quả mong đợi:**
  ```
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  ```
- **Gợi ý:** Sử dụng vòng lặp `while` trong Python.
- **Giải pháp:**

```python
i = 1
while i <= 10:
    print(i)
    i += 1
```

---

### Bài Tập 2: In mẫu số theo một cấu trúc

- **Yêu cầu:** Viết chương trình Python để in mẫu số sau đây bằng cách sử dụng vòng lặp.

  ```
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
  ```

- **Dữ liệu đầu vào:** Không có (sử dụng vòng lặp cố định).
- **Kết quả mong đợi:** In mẫu số trên.
- **Gợi ý:**
  1. Xác định số dòng, tức là 5, vì mẫu có năm dòng.
  2. Chạy vòng lặp ngoài 5 lần sử dụng vòng lặp `for` và hàm `range()`.
  3. Chạy vòng lặp trong `i+1` lần sử dụng vòng lặp `for` và hàm `range()`.
- **Giải pháp:**

```python
print("Mẫu Số")

row = 5
for i in range(1, row + 1):
    for j in range(1, i + 1):
        print(j, end=' ')
    print("")
```

---

### Bài Tập 3: Tính tổng của tất cả các số từ 1 đến một số cho trước

- **Yêu cầu:** Viết chương trình chấp nhận một số từ người dùng và tính tổng của tất cả các số từ 1 đến số cho trước.

- **Dữ liệu đầu vào:** Người dùng nhập một số.
- **Kết quả mong đợi:** Nếu người dùng nhập 10, kết quả sẽ là 55 (1+2+3+4+5+6+7+8+9+10).
  ```
  Nhập số 10
  Tổng là: 55
  ```
- **Gợi ý:**

  1. Sử dụng vòng lặp `for` và hàm `range()` để tính tổng.
  2. Sử dụng hàm `sum()` để tính tổng.

- **Giải pháp 1:** Sử dụng vòng lặp `for` và hàm `range()`.

```python
s = 0
n = int(input("Nhập số: "))
for i in range(1, n + 1):
    s += i
print("\nTổng là: ", s)
```

- **Giải pháp 2:** Sử dụng hàm `sum()`.

```python
n = int(input("Nhập số: "))
x = sum(range(1, n + 1))
print('Tổng là:', x)
```

---

### Bài Tập 4: In bảng cửu chương của một số cho trước

- **Yêu cầu:** Viết chương trình in bảng cửu chương của một số cho trước.

- **Dữ liệu đầu vào:**

  - `num = 2`

- **Kết quả mong đợi:**

  ```
  2
  4
  6
  8
  10
  12
  14
  16
  18
  20
  ```

- **Gợi ý:**

  1. Sử dụng vòng lặp `for` để tạo bảng cửu chương cho một số cụ thể.
  2. Trong mỗi vòng lặp, nhân số hiện tại với số đã cho (p = n\*i).

- **Giải pháp:**

```python
n = 2
for i in range(1, 11):
    product = n * i
    print(product)
```

---

### Bài Tập 5: Hiển thị các số từ danh sách sử dụng vòng lặp

- **Yêu cầu:** Viết chương trình để hiển thị chỉ những số từ danh sách thỏa mãn các điều kiện sau:

  - Số phải chia hết cho năm
  - Nếu số lớn hơn 150, bỏ qua và chuyển sang số tiếp theo
  - Nếu số lớn hơn 500, dừng vòng lặp

- **Dữ liệu đầu vào:**

  - `numbers = [12, 75, 150, 180, 145, 525, 50]`

- **Kết quả mong đợi:**

  ```
  75
  150
  145
  ```

- **Gợi ý:**

  1. Sử dụng vòng lặp `for` để duyệt qua từng phần tử trong danh sách.
  2. Sử dụng câu lệnh `break` để dừng vòng lặp nếu số hiện tại lớn hơn 500.
  3. Sử dụng câu lệnh `continue` để bỏ qua số hiện tại nếu số đó lớn hơn 150.
  4. Sử dụng điều kiện `number % 5 == 0` để kiểm tra nếu số chia hết cho 5.

- **Giải pháp:**

```python
numbers = [12, 75, 150, 180, 145, 525, 50]
for item in numbers:
    if item > 500:
        break
    elif item > 150:
        continue
    elif item % 5 == 0:
        print(item)
```

---

### Bài Tập 6: Đếm tổng số chữ số trong một số

- **Yêu cầu:** Viết chương trình để đếm tổng số chữ số trong một số sử dụng vòng lặp `while`.

- **Dữ liệu đầu vào:**

  - Ví dụ: `75869`

- **Kết quả mong đợi:**

  ```
  Tổng số chữ số là: 5
  ```

- **Gợi ý:**

  1. Đặt biến `counter = 0` để lưu trữ số lượng chữ số.
  2. Chạy vòng lặp `while` cho đến khi số không còn lớn hơn 0.
  3. Trong mỗi lần lặp, giảm chữ số cuối cùng khỏi số bằng phép chia `//` và tăng `counter` lên 1.

- **Giải pháp:**

```python
num = 75869
count = 0
while num != 0:
    num = num // 10
    count += 1
print("Tổng số chữ số là:", count)
```

---

### Bài Tập 7: In mẫu số ngược

- **Yêu cầu:** Viết chương trình sử dụng vòng lặp `for` để in mẫu số ngược sau đây:

  ```
  5 4 3 2 1
  4 3 2 1
  3 2 1
  2 1
  1
  ```

- **Dữ liệu đầu vào:** Không có (sử dụng vòng lặp cố định).
- **Kết quả mong đợi:** In mẫu số trên.

- **Gợi ý:**

  1. Đặt `row = 5` vì mẫu trên có năm dòng.
  2. Tạo vòng lặp ngoài để duyệt qua các số từ 1 đến 5.
  3. Tạo vòng lặp trong để giảm dần số lượng lặp trong mỗi lần lặp ngoài.
  4. Trong mỗi vòng lặp trong, in biến đếm của vòng lặp trong.

- **Giải pháp:**

```python
n = 5
k = 5
for i in range(0, n+1):
    for j in range(k-i, 0, -1):
        print(j, end=' ')
    print()
```

---

### Bài Tập 8: In danh sách theo thứ tự ngược lại sử dụng vòng lặp

- **Yêu cầu:** Viết chương trình để in danh sách theo thứ tự ngược lại sử dụng vòng lặp.

- **Dữ liệu đầu vào:**

  - `list1 = [10, 20, 30, 40, 50]`

- **Kết quả mong đợi:**

  ```
  50
  40
  30
  20
  10
  ```

- **Gợi ý:**

  1. Sử dụng hàm `reversed()` để đảo ngược danh sách.
  2. Sử dụng vòng lặp `for` và hàm `len()` để duyệt qua danh sách từ cuối về đầu.

- **Giải pháp 1:** Sử dụng hàm `reversed()` và vòng lặp `for`.

```python
list1 = [10, 20, 30, 40, 50]
new_list = reversed(list1)
for item in new_list:
    print(item)
```

- **Giải pháp 2:** Sử dụng vòng lặp `for` và hàm `len()`.

```python
list1 = [10, 20, 30, 40, 50]
size = len(list1) - 1
for i in range(size, -1, -1):
    print(list1[i])
```

---

### Bài Tập 9: Hiển thị các số từ -10 đến -1 sử dụng vòng lặp `for`

- **Yêu cầu:** Viết chương trình hiển thị các số từ -10 đến -1 sử dụng vòng lặp `for`.

- **Dữ liệu đầu vào:** Không có (sử dụng vòng lặp cố định).
- **Kết quả mong đợi:**

  ```
  -10
  -9
  -8
  -7
  -6
  -5
  -4
  -3
  -2
  -1
  ```

- **Giải pháp:**

```python
for num in range(-10, 0, 1):
    print(num)
```

---

### Bài Tập 10: Sử dụng khối `else` để hiển thị thông báo "Done" sau khi vòng lặp `for` thực thi thành công

- **Yêu cầu:** Viết chương trình sử dụng khối `else` để hiển thị thông báo "Done" sau khi vòng lặp `for` thực thi thành công.

- **Dữ liệu đầu vào:** Không có (sử dụng vòng lặp cố định).
- **Kết quả mong đợi:**

  ```
  0
  1
  2
  3
  4
  Done!
  ```

- **Gợi ý:** Python cho phép sử dụng khối `else` kèm theo vòng lặp `for`. Khối `else` sẽ được thực thi khi vòng lặp kết thúc một cách bình thường.

- **Giải pháp:**

```python
for i in range(5):
    print(i)
else:
    print("Done!")
```

---

### Bài Tập 11: Viết chương trình hiển thị tất cả các số nguyên tố trong một phạm vi

- **Yêu cầu:** Viết chương trình để hiển thị tất cả các số nguyên tố trong một phạm vi.

- **Dữ liệu đầu vào:**

  - `start = 25`
  - `end = 50`

- **Kết quả mong đợi:**

  ```
  Các số nguyên tố trong khoảng từ 25 đến 50 là:
  29
  31
  37
  41
  43
  47
  ```

- **Gợi ý:**

  1. Một số nguyên tố là số tự nhiên lớn hơn 1 và không phải là tích của hai số tự nhiên nhỏ hơn.
  2. Sử dụng vòng lặp để duyệt qua các số trong khoảng từ `start` đến `end`.
  3. Kiểm tra các yếu tố chia hết để xác định số nguyên tố.

- **Giải pháp:**

```python
start = 25
end = 50
print("Các số nguyên tố trong khoảng từ", start, "đến", end, "là:")

for num in range(start, end + 1):
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

---

### Bài Tập 12: Hiển thị chuỗi Fibonacci lên đến 10 số hạng

- **Yêu cầu:** Viết chương trình để hiển thị chuỗi Fibonacci lên đến 10 số hạng.

- **Dữ liệu đầu vào:** Không có (sử dụng vòng lặp cố định).
- **Kết quả mong đợi:**

  ```
  Chuỗi Fibonacci:
  0  1  1  2  3  5  8  13  21  34
  ```

- **Gợi ý:**

  1. Chuỗi Fibonacci là dãy số mà số tiếp theo được tìm thấy bằng cách cộng hai số trước đó.
  2. Sử dụng hai biến `num1` và `num2` để giữ hai số đầu tiên và sử dụng vòng lặp để tính các số tiếp theo.

- **Giải pháp:**

```python
num1, num2 = 0, 1
print("Chuỗi Fibonacci:")
for i in range(10):
    print(num1, end="  ")
    res = num1 + num2
    num1 = num2
    num2 = res
```

---

### Bài Tập 13: Tìm giai thừa của một số cho trước

- **Yêu cầu:** Viết chương trình sử dụng vòng lặp để tìm giai thừa của một số cho trước.

- **Dữ liệu đầu vào:**

  - Ví dụ: `num = 5`

- **Kết quả mong đợi:**

  ```
  120
  ```

- **Gợi ý:**

  1. Giai thừa (ký hiệu: !) có nghĩa là nhân tất cả các số nguyên từ số đã chọn xuống đến 1.
  2. Sử dụng vòng lặp để nhân dần các số và lưu kết quả vào biến `factorial`.

- **Giải pháp:**

```python
num = 5
factorial = 1
if num < 0:
    print("Không tồn tại giai thừa cho số âm")
elif num == 0:
    print("Giai thừa của 0 là 1")
else:
    for i in range(1, num + 1):
        factorial *= i
    print("Giai thừa của", num, "là", factorial)
```

---

### Bài Tập 14: Đảo ngược một số nguyên đã cho

- **Yêu cầu:** Viết chương trình để đảo ngược một số nguyên đã cho.

- **Dữ liệu đầu vào:**

  - Ví dụ: `76542`

- **Kết quả mong đợi:**

  ```
  24567
  ```

- **Giải pháp:**

```python
num = 76542
reverse_number = 0
print("Số đã cho:", num)
while num > 0:
    reminder = num % 10
    reverse_number = (reverse_number * 10) + reminder
    num = num // 10
print("Số đảo ngược:", reverse_number)
```

---

### Bài Tập 15: Sử dụng vòng lặp để hiển thị các phần tử từ một danh sách có chỉ số lẻ

- **Yêu cầu:** Viết chương trình sử dụng vòng lặp để hiển thị các phần tử từ một danh sách có chỉ số lẻ.

- **Dữ liệu đầu vào:**

  - `my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`

- **Kết quả mong đợi:**

  ```
  20 40 60 80 100
  ```

- **Gợi ý:**

  1. Sử dụng cắt danh sách (`list slicing`) để truy cập các phần tử có chỉ số lẻ.

- **Giải pháp:**

```python
my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for i in my_list[1::2]:
    print(i, end=" ")
```

---

### Bài Tập 16: Tính lập phương của tất cả các số từ 1 đến một số cho trước

- **Yêu cầu:** Viết chương trình để tính lập phương của tất cả các số từ 1 đến một số cho trước.

- **Dữ liệu đầu vào:**

  - `input_number = 6`

- **Kết quả mong đợi:**

  ```
  Số hiện tại là: 1  và lập phương là 1
  Số hiện tại là: 2  và lập phương là 8
  Số hiện tại là: 3  và lập phương là 27
  Số hiện tại là: 4  và lập phương là 64
  Số hiện tại là: 5  và lập phương là 125
  Số hiện tại là: 6  và lập phương là 216
  ```

- **Gợi ý:**

  1. Duyệt qua các số từ 1 đến `n` và tính lập phương của mỗi số.

- **Giải pháp:**

```python
input_number = 6
for i in range(1, input_number + 1):
    print("Số hiện tại là:", i, " và lập phương là", (i * i * i))
```

---

### Bài Tập 17: Tính tổng của chuỗi số lên đến `n` số hạng

- **Yêu cầu:** Viết chương trình để tính tổng của chuỗi số lên đến `n` số hạng.

- **Dữ liệu đầu vào:**

- `n = 5`

- **Kết quả mong đợi:**

  ```
  24690
  ```

- **Giải pháp:**

```python
n = 5
sum_series = 0
num = 2
for i in range(0, n):
    sum_series += int(str(num) * (i + 1))
print("Tổng của chuỗi số là:", sum_series)
```

---

### Bài Tập 18: In mẫu sao theo cấu trúc

- **Yêu cầu:** Viết chương trình để in mẫu sao sau đây sử dụng vòng lặp `for`.

  ```
  *
  * *
  * * *
  * * * *
  * * * * *
  * * * *
  * * *
  * *
  *
  ```

- **Dữ liệu đầu vào:** Không có (sử dụng vòng lặp cố định).
- **Kết quả mong đợi:** In mẫu sao trên.

- **Gợi ý:**

  1. Sử dụng hai vòng lặp `for`. Vòng lặp đầu tiên để in phần trên của mẫu và vòng lặp thứ hai để in phần dưới của mẫu.

- **Giải pháp:**

```python
rows = 5
for i in range(0, rows):
    for j in range(0, i + 1):
        print("*", end=' ')
    print("\r")

for i in range(rows, 0, -1):
    for j in range(0, i - 1):
        print("*", end=' ')
    print("\r")
```
