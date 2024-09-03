# Đáp án chương 8: Làm việc với chuỗi (String)

### Exercise 1A: Tạo chuỗi mới bao gồm ký tự đầu tiên, giữa và cuối

- **Yêu cầu:** Viết một chương trình tạo ra một chuỗi mới từ chuỗi đầu vào, bao gồm ký tự đầu tiên, giữa và cuối của chuỗi đó.

- **Dữ liệu đầu vào:**

  - `str1 = "James"`

- **Kết quả mong đợi:**

  ```
  Jms
  ```

- **Gợi ý:** Chỉ số của chuỗi luôn bắt đầu từ 0. Sử dụng chỉ số để lấy ký tự tại vị trí đầu tiên, giữa và cuối cùng.

- **Giải pháp:**

```python
str1 = 'James'
print("Chuỗi gốc là:", str1)

# Lấy ký tự đầu tiên
res = str1[0]

# Lấy chiều dài của chuỗi
l = len(str1)
# Lấy chỉ số của ký tự giữa
mi = int(l / 2)
# Lấy ký tự giữa và thêm vào kết quả
res = res + str1[mi]

# Lấy ký tự cuối cùng và thêm vào kết quả
res = res + str1[l - 1]

print("Chuỗi mới:", res)
```

---

### Exercise 1B: Tạo chuỗi mới bao gồm ba ký tự giữa

- **Yêu cầu:** Viết một chương trình tạo ra một chuỗi mới từ chuỗi đầu vào, bao gồm ba ký tự giữa của chuỗi đó.

- **Dữ liệu đầu vào:**

  - `Case 1: str1 = "JhonDipPeta"`
  - `Case 2: str2 = "JaSonAy"`

- **Kết quả mong đợi:**

  - `Dip`
  - `Son`

- **Gợi ý:** Tính chỉ số giữa bằng cách chia chiều dài chuỗi cho 2. Sử dụng slicing để lấy ba ký tự giữa.

- **Giải pháp:**

```python
def get_middle_three_chars(str1):
    print("Chuỗi gốc là:", str1)

    # Lấy chỉ số giữa
    mi = int(len(str1) / 2)

    # Sử dụng slicing để lấy ba ký tự giữa
    res = str1[mi - 1:mi + 2]
    print("Ba ký tự giữa là:", res)

get_middle_three_chars("JhonDipPeta")
get_middle_three_chars("JaSonAy")
```

---

### Exercise 2: Chèn chuỗi mới vào giữa một chuỗi đã cho

- **Yêu cầu:** Viết một chương trình để tạo một chuỗi mới bằng cách chèn chuỗi `s2` vào giữa chuỗi `s1`.

- **Dữ liệu đầu vào:**

  - `s1 = "Ault"`
  - `s2 = "Kelly"`

- **Kết quả mong đợi:**

  ```
  AuKellylt
  ```

- **Gợi ý:** Tính chỉ số giữa của `s1` bằng cách chia chiều dài của nó cho 2, sau đó chèn `s2` vào giữa.

- **Giải pháp:**

```python
def append_middle(s1, s2):
    print("Chuỗi gốc là", s1, s2)

    # Chỉ số giữa của s1
    mi = int(len(s1) / 2)

    # Lấy ký tự từ 0 đến giữa của s1
    x = s1[:mi:]
    # Chèn s2 vào giữa
    x = x + s2
    # Thêm phần còn lại của s1
    x = x + s1[mi:]
    print("Chuỗi mới sau khi chèn:", x)

append_middle("Ault", "Kelly")
```

---

### Exercise 3: Tạo chuỗi mới bao gồm các ký tự đầu tiên, giữa, và cuối của mỗi chuỗi đầu vào

- **Yêu cầu:** Viết một chương trình để trả về một chuỗi mới được tạo từ các ký tự đầu tiên, giữa, và cuối của `s1` và `s2`.

- **Dữ liệu đầu vào:**

  - `s1 = "America"`
  - `s2 = "Japan"`

- **Kết quả mong đợi:**

  ```
  AJrpan
  ```

- **Gợi ý:** Sử dụng chỉ số chuỗi để lấy ký tự đầu tiên, giữa và cuối của mỗi chuỗi.

- **Giải pháp:**

```python
def mix_string(s1, s2):
    # Lấy ký tự đầu tiên từ cả hai chuỗi
    first_char = s1[0] + s2[0]

    # Lấy ký tự giữa từ cả hai chuỗi
    middle_char = s1[int(len(s1) / 2):int(len(s1) / 2) + 1] + s2[int(len(s2) / 2):int(len(s2) / 2) + 1]

    # Lấy ký tự cuối cùng từ cả hai chuỗi
    last_char = s1[len(s1) - 1] + s2[len(s2) - 1]

    # Kết hợp tất cả
    res = first_char + middle_char + last_char
    print("Chuỗi kết hợp là:", res)

s1 = "America"
s2 = "Japan"
mix_string(s1, s2)
```

---

### Exercise 4: Sắp xếp các ký tự của chuỗi sao cho các chữ cái thường đứng trước

- **Yêu cầu:** Viết chương trình để sắp xếp các ký tự của một chuỗi sao cho các chữ cái thường đứng trước các chữ cái hoa.

- **Dữ liệu đầu vào:**

  - `str1 = "PyNaTive"`

- **Kết quả mong đợi:**

  ```
  yaivePNT
  ```

- **Gợi ý:** Duyệt qua từng ký tự của chuỗi, kiểm tra xem ký tự hiện tại là chữ thường hay chữ hoa, sau đó sắp xếp lại.

- **Giải pháp:**

```python
str1 = "PyNaTive"
print('Chuỗi gốc:', str1)
lower = []
upper = []
for char in str1:
    if char.islower():
        # Thêm ký tự thường vào danh sách lower
        lower.append(char)
    else:
        # Thêm ký tự hoa vào danh sách upper
        upper.append(char)

# Kết hợp cả hai danh sách
sorted_str = ''.join(lower + upper)
print('Kết quả:', sorted_str)
```

---

### Exercise 5: Đếm tất cả các chữ cái, chữ số, và ký hiệu đặc biệt từ chuỗi đã cho

- **Yêu cầu:** Viết một chương trình để đếm số lượng các chữ cái, chữ số và ký hiệu đặc biệt trong một chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = "P@#yn26at^&i5ve"`

- **Kết quả mong đợi:**

  ```
  Chars = 8
  Digits = 3
  Symbol = 4
  ```

- **Gợi ý:** Sử dụng các hàm string như `isalpha()` để kiểm tra chữ cái, `isdigit()` để kiểm tra chữ số.

- **Giải pháp:**

```python
def find_digits_chars_symbols(sample_str):
    char_count = 0
    digit_count = 0
    symbol_count = 0
    for char in sample_str:
        if char.isalpha():
            char_count += 1
        elif char.isdigit():
            digit_count += 1
        # Nếu không phải là chữ cái hay chữ số thì đó là ký hiệu đặc biệt
        else:
            symbol_count += 1

    print("Chars =", char_count, "Digits =", digit_count, "Symbol =", symbol_count)

sample_str = "P@#yn26at^&i5ve"
print("Tổng số chữ cái, chữ số và ký hiệu đặc biệt là:")
find_digits_chars_symbols(sample_str)

```

Tôi xin lỗi vì sự thiếu sót. Dưới đây là phần bổ sung đầy đủ các bài tập còn lại với phần gợi ý và giải pháp hoàn chỉnh:

---

### Bài Tập 6: Tạo chuỗi hỗn hợp theo các quy tắc sau

- **Yêu cầu:** Cho hai chuỗi, `s1` và `s2`. Viết chương trình tạo một chuỗi mới `s3` được tạo từ ký tự đầu tiên của `s1`, sau đó là ký tự cuối cùng của `s2`, tiếp theo là ký tự thứ hai của `s1` và ký tự cuối cùng thứ hai của `s2`, và cứ tiếp tục như vậy. Bất kỳ ký tự nào còn lại sẽ được thêm vào cuối kết quả.

- **Dữ liệu đầu vào:**

  - `s1 = "Abc"`
  - `s2 = "Xyz"`

- **Kết quả mong đợi:**

  ```
  AzbycX
  ```

- **Gợi ý:**

  - Đảo ngược chuỗi `s2` để lấy các ký tự theo thứ tự từ cuối lên đầu.
  - Duyệt qua từng ký tự của chuỗi `s1` theo thứ tự bình thường và chuỗi `s2` theo thứ tự đảo ngược.
  - Kết hợp lần lượt các ký tự và ghép chúng lại với nhau.

- **Giải pháp:**

```python
s1 = "Abc"
s2 = "Xyz"

# Lấy chiều dài của chuỗi
s1_length = len(s1)
s2_length = len(s2)

# Lấy chiều dài lớn hơn
length = s1_length nếu s1_length > s2_length else s2_length
result = ""

# Đảo ngược chuỗi s2
s2 = s2[::-1]

# Duyệt qua chuỗi s1 theo thứ tự và chuỗi s2 theo thứ tự đảo ngược
for i in range(length):
    if i < s1_length:
        result = result + s1[i]
    if i < s2_length:
        result = result + s2[i]

print(result)
```

---

### Bài Tập 7: Kiểm tra sự cân bằng ký tự chuỗi

- **Yêu cầu:** Viết chương trình để kiểm tra xem hai chuỗi có cân bằng hay không. Ví dụ, chuỗi `s1` và `s2` là cân bằng nếu tất cả các ký tự trong `s1` đều có mặt trong `s2`. Vị trí của các ký tự không quan trọng.

- **Dữ liệu đầu vào:**

  - `Case 1: s1 = "Yn", s2 = "PYnative"`
  - `Case 2: s1 = "Ynf", s2 = "PYnative"`

- **Kết quả mong đợi:**

  - `True`
  - `False`

- **Gợi ý:**

  - Duyệt qua từng ký tự của chuỗi `s1`.
  - Kiểm tra xem ký tự hiện tại có tồn tại trong chuỗi `s2` hay không.
  - Nếu tất cả các ký tự đều tồn tại, trả về `True`; nếu không, trả về `False`.

- **Giải pháp:**

```python
def string_balance_test(s1, s2):
    flag = True
    for char in s1:
        if char in s2:
            continue
        else:
            flag = False
    return flag

s1 = "Yn"
s2 = "PYnative"
flag = string_balance_test(s1, s2)
print("s1 và s2 cân bằng:", flag)

s1 = "Ynf"
s2 = "PYnative"
flag = string_balance_test(s1, s2)
print("s1 và s2 cân bằng:", flag)
```

---

### Bài Tập 8: Tìm tất cả các lần xuất hiện của một chuỗi con trong một chuỗi bất kể chữ hoa hay chữ thường

- **Yêu cầu:** Viết chương trình để tìm tất cả các lần xuất hiện của chuỗi "USA" trong một chuỗi đã cho bất kể chữ hoa hay chữ thường.

- **Dữ liệu đầu vào:**

  - `str1 = "Welcome to USA. usa awesome, isn't it?"`

- **Kết quả mong đợi:**

  ```
  Số lần xuất hiện của USA là: 2
  ```

- **Gợi ý:**

  - Chuyển chuỗi chính (`str1`) và chuỗi con (`sub_string`) thành chữ thường để tránh việc phân biệt chữ hoa và chữ thường.
  - Sử dụng hàm `count()` để đếm số lần xuất hiện của chuỗi con trong chuỗi chính.

- **Giải pháp:**

```python
str1 = "Welcome to USA. usa awesome, isn't it?"
sub_string = "USA"

# Chuyển chuỗi thành chữ thường
temp_str = str1.lower()

# Sử dụng hàm count
count = temp_str.count(sub_string.lower())
print("Số lần xuất hiện của USA là:", count)
```

---

### Bài Tập 9: Tính tổng và trung bình của các chữ số có trong một chuỗi

- **Yêu cầu:** Cho một chuỗi `s1`, viết chương trình để trả về tổng và trung bình của các chữ số có trong chuỗi, bỏ qua tất cả các ký tự khác.

- **Dữ liệu đầu vào:**

  - `str1 = "PYnative29@#8496"`

- **Kết quả mong đợi:**

  ```
  Tổng là: 38, Trung bình là: 6.333333333333333
  ```

- **Gợi ý:**

  - Duyệt qua từng ký tự của chuỗi `s1`.
  - Sử dụng hàm `isdigit()` để kiểm tra xem ký tự đó có phải là chữ số hay không.
  - Nếu ký tự là chữ số, chuyển đổi thành số nguyên và cộng dồn vào tổng.
  - Tính trung bình bằng cách chia tổng cho số lượng chữ số.

- **Giải pháp 1: Sử dụng hàm chuỗi**

```python
input_str = "PYnative29@#8496"
total = 0
cnt = 0
for char in input_str:
    if char.isdigit():
        total += int(char)
        cnt += 1

# Tính trung bình
avg = total / cnt
print("Tổng là:", total, "Trung bình là:", avg)
```

- **Giải pháp 2: Sử dụng biểu thức chính quy**

```python
import re

input_str = "PYnative29@#8496"
digit_list = [int(num) for num in re.findall(r'\d', input_str)]
print('Các chữ số:', digit_list)

# Tính tổng
total = sum(digit_list)

# Tính trung bình
avg = total / len(digit_list)
print("Tổng là:", total, "Trung bình là:", avg)
```

---

### Bài Tập 10: Đếm số lần xuất hiện của tất cả các ký tự trong một chuỗi

- **Yêu cầu:** Cho chuỗi `str1`, viết chương trình để đếm số lần xuất hiện của tất cả các ký tự trong chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = "Apple"`

- **Kết quả mong đợi:**

  ```
  {'A': 1, 'p': 2, 'l': 1, 'e': 1}
  ```

- **Gợi ý:**

  - Tạo một từ điển trống để lưu trữ kết quả, trong đó ký tự là khóa và số lần xuất hiện là giá trị.
  - Duyệt qua từng ký tự trong chuỗi `str1`.
  - Sử dụng hàm `count()` để đếm số lần xuất hiện của ký tự hiện tại trong chuỗi và lưu vào từ điển.

- **Giải pháp:**

```python
str1 = "Apple"

# Tạo một dictionary kết quả
char_dict = dict()

for char in str1:
    count = str1.count(char)
    # Thêm / cập nhật số lần xuất hiện của một ký tự
    char_dict[char] = count
print('Kết quả:', char_dict)
```

---

### Bài Tập 11: Đảo ngược một chuỗi

- **Yêu cầu:** Viết chương trình để đảo ngược chuỗi `str1`.

- **Dữ liệu đầu vào:**

  - `str1 = "PYnative"`

- **Kết quả mong đợi:**

  ```
  evitanYP
  ```

- **Gợi ý:**

  - Sử dụng slicing với bước là `-1` để đảo ngược chuỗi.
  - Hoặc sử dụng hàm `reversed()` để đảo ngược các ký tự trong chuỗi và kết hợp lại thành chuỗi mới.

- **Giải pháp 1: Slicing ngược**

```python
str1 = "PYnative"
print("Chuỗi gốc là:", str1)

str1 = str1[::-1]
print("Chuỗi đảo ngược là:", str1)
```

- **Giải pháp 2: Sử dụng hàm `reversed()`**

```python
str1 = "PYnative"
print("Chuỗi gốc là:", str1)

str1 = ''.join(reversed(str1))
print("Chuỗi đảo ngược là:", str1)
```

---

###

Bài Tập 12: Tìm vị trí cuối cùng của một chuỗi con đã cho

- **Yêu cầu:** Viết chương trình để tìm vị trí cuối cùng của chuỗi con "Emma" trong một chuỗi đã cho.

- **Dữ liệu đầu vào:**

  - `str1 = "Emma is a data scientist who knows Python. Emma works at google."`

- **Kết quả mong đợi:**

  ```
  Lần xuất hiện cuối cùng của Emma bắt đầu tại chỉ số: 43
  ```

- **Gợi ý:**

  - Sử dụng hàm `rfind()` để tìm vị trí xuất hiện cuối cùng của chuỗi con trong chuỗi chính.

- **Giải pháp:**

```python
str1 = "Emma is a data scientist who knows Python. Emma works at google."
print("Chuỗi gốc là:", str1)

index = str1.rfind("Emma")
print("Lần xuất hiện cuối cùng của Emma bắt đầu tại chỉ số:", index)
```

---

### Bài Tập 13: Tách một chuỗi theo dấu gạch nối

- **Yêu cầu:** Viết chương trình để tách một chuỗi theo dấu gạch nối và hiển thị từng chuỗi con.

- **Dữ liệu đầu vào:**

  - `str1 = "Emma-is-a-data-scientist"`

- **Kết quả mong đợi:**

  ```
  Hiển thị từng chuỗi con:
  Emma
  is
  a
  data
  scientist
  ```

- **Gợi ý:**

  - Sử dụng hàm `split()` để tách chuỗi theo dấu gạch nối và sau đó hiển thị từng phần tử trong danh sách kết quả.

- **Giải pháp:**

```python
str1 = "Emma-is-a-data-scientist"
print("Chuỗi gốc là:", str1)

# Tách chuỗi
sub_strings = str1.split("-")

print("Hiển thị từng chuỗi con:")
for sub in sub_strings:
    print(sub)
```

---

### Bài Tập 14: Loại bỏ các chuỗi trống khỏi danh sách chuỗi

- **Yêu cầu:** Viết chương trình để loại bỏ các chuỗi trống và giá trị `None` khỏi danh sách chuỗi.

- **Dữ liệu đầu vào:**

  - `str_list = ["Emma", "Jon", "", "Kelly", None, "Eric", ""]`

- **Kết quả mong đợi:**

  ```
  Danh sách sau khi loại bỏ chuỗi trống và None:
  ['Emma', 'Jon', 'Kelly', 'Eric']
  ```

- **Gợi ý:**

  - Sử dụng vòng lặp để duyệt qua từng phần tử trong danh sách và kiểm tra điều kiện không phải là chuỗi trống hoặc `None`.
  - Sử dụng hàm `filter()` để lọc ra các giá trị không hợp lệ.

- **Giải pháp 1: Sử dụng vòng lặp và điều kiện**

```python
str_list = ["Emma", "Jon", "", "Kelly", None, "Eric", ""]
res_list = []
for s in str_list:
    # Kiểm tra nếu không phải chuỗi trống hoặc None
    if s:
        res_list.append(s)
print(res_list)
```

- **Giải pháp 2: Sử dụng hàm `filter()`**

```python
str_list = ["Emma", "Jon", "", "Kelly", None, "Eric", ""]

# Sử dụng hàm filter để lọc các giá trị hợp lệ
new_str_list = list(filter(None, str_list))

print("Danh sách sau khi loại bỏ chuỗi trống và None:")
print(new_str_list)
```

---

### Bài Tập 15: Loại bỏ các ký tự đặc biệt và dấu chấm câu khỏi chuỗi

- **Yêu cầu:** Viết chương trình để loại bỏ tất cả các ký tự đặc biệt và dấu chấm câu khỏi một chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = "/*Jon is @developer & musician"`

- **Kết quả mong đợi:**

  ```
  Chuỗi sau khi loại bỏ các ký tự đặc biệt và dấu chấm câu:
  "Jon is developer musician"
  ```

- **Gợi ý:**

  - Sử dụng hàm `translate()` và `maketrans()` để thay thế các ký tự đặc biệt bằng một ký tự trống.
  - Sử dụng biểu thức chính quy để loại bỏ các ký tự không phải là chữ và số.

- **Giải pháp 1: Sử dụng hàm `translate()` và `maketrans()`**

```python
import string

str1 = "/*Jon is @developer & musician"
print("Chuỗi gốc là:", str1)

# Sử dụng translate() và maketrans() để loại bỏ các ký tự đặc biệt
new_str = str1.translate(str.maketrans('', '', string.punctuation))

print("Chuỗi sau khi loại bỏ các ký tự đặc biệt và dấu chấm câu:")
print(new_str)
```

- **Giải pháp 2: Sử dụng biểu thức chính quy**

```python
import re

str1 = "/*Jon is @developer & musician"
print("Chuỗi gốc là:", str1)

# Sử dụng biểu thức chính quy để loại bỏ các ký tự đặc biệt
res = re.sub(r'[^\w\s]', '', str1)
print("Chuỗi sau khi loại bỏ các ký tự đặc biệt và dấu chấm câu:")
print(res)
```

---

### Bài Tập 16: Loại bỏ tất cả các ký tự ngoại trừ chữ số khỏi chuỗi

- **Yêu cầu:** Viết chương trình để loại bỏ tất cả các ký tự ngoại trừ chữ số khỏi chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = 'I am 25 years and 10 months old'`

- **Kết quả mong đợi:**

  ```
  2510
  ```

- **Gợi ý:**

  - Sử dụng hàm `isdigit()` để kiểm tra xem ký tự có phải là chữ số hay không và tạo một chuỗi mới chỉ chứa các chữ số.

- **Giải pháp:**

```python
str1 = 'I am 25 years and 10 months old'
print("Chuỗi gốc là:", str1)

# Loại bỏ các ký tự ngoại trừ chữ số
res = "".join([item for item in str1 if item.isdigit()])

print(res)
```

---

### Bài Tập 17: Tìm các từ có cả chữ cái và số

- **Yêu cầu:** Viết chương trình để tìm các từ có chứa cả chữ cái và số từ một chuỗi đầu vào.

- **Dữ liệu đầu vào:**

  - `str1 = "Emma25 is Data scientist50 and AI Expert"`

- **Kết quả mong đợi:**

  ```
  Emma25
  scientist50
  ```

- **Gợi ý:**

  - Sử dụng hàm `isalpha()` và `isdigit()` kết hợp với hàm `any()` để kiểm tra từng từ trong chuỗi.

- **Giải pháp:**

```python
str1 = "Emma25 is Data scientist50 and AI Expert"
print("Chuỗi gốc là:", str1)

res = []
# Tách chuỗi thành các từ
temp = str1.split()

# Kiểm tra từng từ
for item in temp:
    if any(char.isalpha() for char in item) và any(char.isdigit() for char in item):
        res.append(item)

print("Các từ có cả chữ cái và số:")
for i in res:
    print(i)
```

---

### Bài Tập 18: Thay thế mỗi ký tự đặc biệt bằng dấu

- **Yêu cầu:** Viết chương trình để thay thế mỗi ký tự đặc biệt trong chuỗi bằng dấu `#`.

- **Dữ liệu đầu vào:**

  - `str1 = '/*Jon is @developer & musician!!'`

- **Kết quả mong đợi:**

  ```
  ##Jon is #developer # musician##
  ```

- **Gợi ý:**

  - Sử dụng hàm `replace()` để thay thế các ký tự đặc biệt bằng ký tự `#`.
  - Sử dụng `string.punctuation` để lấy danh sách các ký tự đặc biệt cần thay thế.

- **Giải pháp:**

```python
import string

str1 = '/*Jon is @developer & musician!!'
print("Chuỗi gốc là:", str1)

# Thay thế các ký tự đặc biệt bằng dấu #
replace_char = '#'

# Sử dụng string.punctuation để lấy danh sách các ký tự đặc biệt
for char in string.punctuation:
    str1 = str1.replace(char, replace_char)

print("Chuỗi sau khi thay thế các ký tự đặc biệt bằng dấu #:")
print(str1)
```
