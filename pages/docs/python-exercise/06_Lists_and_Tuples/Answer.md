# Đáp án chương 6: Danh sách và Tuple

## I. List

### Bài Tập 1: Đảo ngược một danh sách trong Python

- **Yêu cầu:** Viết chương trình để đảo ngược một danh sách.

- **Dữ liệu đầu vào:**

  - `list1 = [100, 200, 300, 400, 500]`

- **Kết quả mong đợi:**

  ```
  [500, 400, 300, 200, 100]
  ```

- **Gợi ý:** Sử dụng phương thức `reverse()` của danh sách hoặc cắt danh sách theo chỉ số âm.

- **Giải pháp 1:** Sử dụng phương thức `reverse()` của danh sách.

```python
list1 = [100, 200, 300, 400, 500]
list1.reverse()
print(list1)
```

- **Giải pháp 2:** Sử dụng cắt danh sách theo chỉ số âm.

```python
list1 = [100, 200, 300, 400, 500]
list1 = list1[::-1]
print(list1)
```

---

### Bài Tập 2: Nối hai danh sách theo chỉ số

- **Yêu cầu:** Viết chương trình để nối hai danh sách theo chỉ số. Tạo một danh sách mới chứa phần tử ở chỉ số 0 từ cả hai danh sách, sau đó là phần tử ở chỉ số 1, và tiếp tục cho đến phần tử cuối cùng.

- **Dữ liệu đầu vào:**

  - `list1 = ["M", "na", "i", "Ke"]`
  - `list2 = ["y", "me", "s", "lly"]`

- **Kết quả mong đợi:**

  ```
  ['My', 'name', 'is', 'Kelly']
  ```

- **Gợi ý:** Sử dụng comprehension danh sách với hàm `zip()`.

- **Giải pháp:**

```python
list1 = ["M", "na", "i", "Ke"]
list2 = ["y", "me", "s", "lly"]
list3 = [i + j for i, j in zip(list1, list2)]
print(list3)
```

---

### Bài Tập 3: Biến mỗi phần tử của danh sách thành bình phương của nó

- **Yêu cầu:** Viết chương trình để biến mỗi phần tử của danh sách thành bình phương của nó.

- **Dữ liệu đầu vào:**

  - `numbers = [1, 2, 3, 4, 5, 6, 7]`

- **Kết quả mong đợi:**

  ```
  [1, 4, 9, 16, 25, 36, 49]
  ```

- **Gợi ý:** Duyệt qua các số từ danh sách và tính bình phương của từng số.

- **Giải pháp 1:** Sử dụng vòng lặp và phương thức `append()`.

```python
numbers = [1, 2, 3, 4, 5, 6, 7]
res = []
for i in numbers:
    res.append(i * i)
print(res)
```

- **Giải pháp 2:** Sử dụng comprehension danh sách.

```python
numbers = [1, 2, 3, 4, 5, 6, 7]
res = [x * x for x in numbers]
print(res)
```

---

### Bài Tập 4: Nối hai danh sách theo thứ tự

- **Yêu cầu:** Viết chương trình để nối hai danh sách theo thứ tự đã cho.

- **Dữ liệu đầu vào:**

  - `list1 = ["Hello ", "take "]`
  - `list2 = ["Dear", "Sir"]`

- **Kết quả mong đợi:**

  ```
  ['Hello Dear', 'Hello Sir', 'take Dear', 'take Sir']
  ```

- **Gợi ý:** Sử dụng comprehension danh sách để duyệt qua hai danh sách và nối từng phần tử hiện tại của mỗi danh sách.

- **Giải pháp:**

```python
list1 = ["Hello ", "take "]
list2 = ["Dear", "Sir"]

res = [x + y for x in list1 for y in list2]
print(res)
```

---

### Bài Tập 5: Duyệt qua cả hai danh sách đồng thời

- **Yêu cầu:** Viết chương trình để duyệt qua cả hai danh sách đồng thời và hiển thị các phần tử từ danh sách 1 theo thứ tự gốc và các phần tử từ danh sách 2 theo thứ tự ngược lại.

- **Dữ liệu đầu vào:**

  - `list1 = [10, 20, 30, 40]`
  - `list2 = [100, 200, 300, 400]`

- **Kết quả mong đợi:**

  ```
  10 400
  20 300
  30 200
  40 100
  ```

- **Gợi ý:** Sử dụng hàm `zip()` để kết hợp hai danh sách và cắt ngược danh sách thứ hai.

- **Giải pháp:**

```python
list1 = [10, 20, 30, 40]
list2 = [100, 200, 300, 400]

for x, y in zip(list1, list2[::-1]):
    print(x, y)
```

---

### Bài Tập 6: Loại bỏ các chuỗi rỗng khỏi danh sách

- **Yêu cầu:** Viết chương trình để loại bỏ các chuỗi rỗng khỏi danh sách các chuỗi.

- **Dữ liệu đầu vào:**

  - `list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]`

- **Kết quả mong đợi:**

  ```
  ["Mike", "Emma", "Kelly", "Brad"]
  ```

- **Gợi ý:** Sử dụng hàm `filter()` để loại bỏ các giá trị None hoặc rỗng khỏi danh sách.

- **Giải pháp:**

```python
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
res = list(filter(None, list1))
print(res)
```

---

### Bài Tập 7: Thêm mục mới vào danh sách sau một mục cụ thể

- **Yêu cầu:** Viết chương trình để thêm mục 7000 sau 6000 trong danh sách Python sau.

- **Dữ liệu đầu vào:**

  - `list1 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]`

- **Kết quả mong đợi:**

  ```
  [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]
  ```

- **Gợi ý:** Danh sách cho trước là danh sách lồng nhau. Sử dụng chỉ mục để xác định vị trí của mục cụ thể, sau đó sử dụng phương thức `append()` để thêm mục mới sau nó.

- **Giải pháp:**

```python
list1 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
list1[2][2].append(7000)
print(list1)
```

---

### Bài Tập 8: Mở rộng danh sách lồng nhau bằng cách thêm danh sách con

- **Yêu cầu:** Viết chương trình để mở rộng danh sách lồng nhau bằng cách thêm danh sách con `["h", "i", "j"]` sao cho kết quả giống như danh sách sau.

- **Dữ liệu đầu vào:**

  - `list1 = ["a", "b", ["c", ["d", "e", ["f", "g"], "k"], "l"], "m", "n"]`
  - `sub_list = ["h", "i", "j"]`

- **Kết quả mong đợi:**

  ```
  ['a', 'b', ['c', ['d', 'e', ['f', 'g', 'h', 'i', 'j'], 'k'], 'l'], 'm', 'n']
  ```

- **Gợi ý:** Danh sách cho trước là danh sách lồng nhau. Sử dụng chỉ mục để xác định vị trí của mục con cụ thể, sau đó sử dụng phương thức `extend()` để thêm các mục mới vào sau đó.

- **Giải pháp:**

```python
list1 = ["a", "b", ["c", ["d", "e", ["f", "g"], "k"], "l"], "m", "n"]
sub_list = ["h", "i", "j"]
list1[2][1][2].extend(sub_list)
print(list1)
```

---

### Bài Tập 9: Thay thế mục trong danh sách bằng giá trị mới nếu tìm thấy

- **Yêu cầu:** Viết chương trình để tìm giá trị 20 trong danh sách, và nếu có, thay thế nó bằng 200. Chỉ cập nhật sự

xuất hiện đầu tiên của mục.

- **Dữ liệu đầu vào:**

  - `list1 = [5, 10, 15, 20, 25, 50, 20]`

- **Kết quả mong đợi:**

  ```
  [5, 10, 15, 200, 25, 50, 20]
  ```

- **Gợi ý:** Sử dụng phương thức `index(20)` để lấy số chỉ mục của 20 và sau đó cập nhật mục có mặt tại vị trí đó bằng số chỉ mục.

- **Giải pháp:**

```python
list1 = [5, 10, 15, 20, 25, 50, 20]
index = list1.index(20)
list1[index] = 200
print(list1)
```

---

### Bài Tập 10: Loại bỏ tất cả các sự xuất hiện của một mục cụ thể khỏi danh sách

- **Yêu cầu:** Viết chương trình để loại bỏ tất cả các sự xuất hiện của mục 20 khỏi danh sách.

- **Dữ liệu đầu vào:**

  - `list1 = [5, 20, 15, 20, 25, 50, 20]`

- **Kết quả mong đợi:**

  ```
  [5, 15, 25, 50]
  ```

- **Giải pháp 1:** Sử dụng comprehension danh sách.

```python
list1 = [5, 20, 15, 20, 25, 50, 20]
def remove_value(sample_list, val):
    return [i for i in sample_list if i != val]

res = remove_value(list1, 20)
print(res)
```

- **Giải pháp 2:** Sử dụng vòng lặp `while` (giải pháp chậm).

```python
list1 = [5, 20, 15, 20, 25, 50, 20]
while 20 in list1:
    list1.remove(20)
print(list1)
```

---

## II. Tuple

### Bài Tập 1: Đảo ngược một tuple

- **Yêu cầu:** Viết chương trình để đảo ngược một tuple.

- **Dữ liệu đầu vào:**

  - `tuple1 = (10, 20, 30, 40, 50)`

- **Kết quả mong đợi:**

  ```
  (50, 40, 30, 20, 10)
  ```

- **Gợi ý:** Sử dụng cắt tuple để đảo ngược tuple đã cho. Lưu ý: phần tử cuối cùng bắt đầu từ -1.

- **Giải pháp:**

```python
tuple1 = (10, 20, 30, 40, 50)
tuple1 = tuple1[::-1]
print(tuple1)
```

---

### Bài Tập 2: Truy cập giá trị 20 từ tuple

- **Yêu cầu:** Viết chương trình Python để in giá trị 20 từ tuple lồng nhau đã cho.

- **Dữ liệu đầu vào:**

  - `tuple1 = ("Orange", [10, 20, 30], (5, 15, 25))`

- **Kết quả mong đợi:**

  ```
  20
  ```

- **Gợi ý:** Tuple đã cho là một tuple lồng nhau. Sử dụng chỉ mục để xác định vị trí của mục cụ thể.

- **Giải pháp:**

```python
tuple1 = ("Orange", [10, 20, 30], (5, 15, 25))
print(tuple1[1][1])
```

---

### Bài Tập 3: Tạo một tuple với một mục duy nhất

- **Giải pháp:**

```python
tuple1 = (50, )
print(tuple1)
```

---

### Bài Tập 4: Giải nén tuple thành 4 biến

- **Yêu cầu:** Viết chương trình để giải nén tuple sau thành bốn biến và hiển thị từng biến.

- **Dữ liệu đầu vào:**

  - `tuple1 = (10, 20, 30, 40)`

- **Kết quả mong đợi:**

  ```
  10
  20
  30
  40
  ```

- **Giải pháp:**

```python
tuple1 = (10, 20, 30, 40)
a, b, c, d = tuple1
print(a)
print(b)
print(c)
print(d)
```

---

### Bài Tập 5: Hoán đổi hai tuple trong Python

- **Yêu cầu:** Viết chương trình để hoán đổi hai tuple trong Python.

- **Dữ liệu đầu vào:**

  - `tuple1 = (11, 22)`
  - `tuple2 = (99, 88)`

- **Kết quả mong đợi:**

  ```
  tuple1: (99, 88)
  tuple2: (11, 22)
  ```

- **Giải pháp:**

```python
tuple1 = (11, 22)
tuple2 = (99, 88)
tuple1, tuple2 = tuple2, tuple1
print(tuple1)
print(tuple2)
```

---

### Bài Tập 6: Sao chép các phần tử cụ thể từ một tuple sang một tuple mới

- **Yêu cầu:** Viết chương trình để sao chép các phần tử 44 và 55 từ tuple sau sang một tuple mới.

- **Dữ liệu đầu vào:**

  - `tuple1 = (11, 22, 33, 44, 55, 66)`

- **Kết quả mong đợi:**

  ```
  tuple2: (44, 55)
  ```

- **Giải pháp:**

```python
tuple1 = (11, 22, 33, 44, 55, 66)
tuple2 = tuple1[3:5]
print(tuple2)
```

---

### Bài Tập 7: Sửa đổi tuple

- **Yêu cầu:** Viết chương trình để sửa đổi phần tử đầu tiên (22) của một danh sách bên trong tuple sau thành 222.

- **Dữ liệu đầu vào:**

  - `tuple1 = (11, [22, 33], 44, 55)`

- **Kết quả mong đợi:**

  ```
  tuple1: (11, [222, 33], 44, 55)
  ```

- **Gợi ý:** Tuple cho trước là một tuple lồng nhau. Sử dụng chỉ mục để xác định vị trí của mục cụ thể và sửa đổi nó bằng cách sử dụng toán tử gán.

- **Giải pháp:**

```python
tuple1 = (11, [22, 33], 44, 55)
tuple1[1][0] = 222
print(tuple1)
```

---

### Bài Tập 8: Sắp xếp một tuple các tuple theo phần tử thứ hai

- **Yêu cầu:** Viết chương trình để sắp xếp một tuple các tuple theo phần tử thứ hai.

- **Dữ liệu đầu vào:**

  - `tuple1 = (('a', 23), ('b', 37), ('c', 11), ('d', 29))`

- **Kết quả mong đợi:**

  ```
  (('c', 11), ('a', 23), ('d', 29), ('b', 37))
  ```

- **Giải pháp:**

```python
tuple1 = (('a', 23), ('b', 37), ('c', 11), ('d', 29))
tuple1 = tuple(sorted(list(tuple1), key=lambda x: x[1]))
print(tuple1)
```

---

### Bài Tập 9: Đếm số lần xuất hiện của mục 50 trong một tuple

- **Yêu cầu:** Viết chương trình để đếm số lần xuất hiện của mục 50 trong một tuple.

- **Dữ liệu đầu vào:**

  - `tuple1 = (50, 10, 60, 70, 50)`

- **Kết quả mong đợi:**

  ```
  2
  ```

- **Gợi ý:** Sử dụng phương thức `count()` của tuple.

- **Giải pháp:**

```python
tuple1 = (50, 10, 60, 70, 50)
print(tuple1.count(50))
```

---

### Bài Tập 10: Kiểm tra nếu tất cả các mục trong tuple đều giống nhau

- **Dữ liệu đầu vào:**

  - `tuple1 = (45, 45, 45, 45)`

- **Kết quả mong đợi:**

  ```
  True
  ```

- **Giải pháp:**

```python
def check(t):
    return all(i == t[0] for i in t)

tuple1 = (45, 45, 45, 45)
print(check(tuple1))
```
