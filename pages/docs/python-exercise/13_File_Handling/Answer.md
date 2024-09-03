# Đáp án chương 13: Xử lý file

### Bài Tập 1: Đọc toàn bộ tệp văn bản

**Yêu cầu:** Viết một chương trình Python để đọc toàn bộ tệp văn bản.

**Điều kiện:** Tệp văn bản phải tồn tại trong thư mục làm việc hiện tại.

**Input mẫu:**

```python
# Nội dung của 'example.txt'
```

**Output mẫu:**

```python
This is the content of the example.txt file.
```

**Đáp án:**

```python
# Đọc toàn bộ tệp văn bản
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
```

---

### Bài Tập 2: Đọc n dòng đầu tiên của tệp

**Yêu cầu:** Viết một chương trình Python để đọc n dòng đầu tiên của tệp.

**Điều kiện:** n phải nhỏ hơn hoặc bằng tổng số dòng trong tệp.

**Input mẫu:**

```python
n = 5
```

**Output mẫu:**

```python
This is the first line.
This is the second line.
...
This is the fifth line.
```

**Đáp án:**

```python
# Đọc n dòng đầu tiên của tệp
n = 5
with open('example.txt', 'r') as file:
    for i in range(n):
        print(file.readline(), end='')
```

---

### Bài Tập 3: Thêm văn bản vào tệp và hiển thị văn bản

**Yêu cầu:** Viết một chương trình Python để thêm văn bản vào tệp và hiển thị văn bản.

**Điều kiện:** Tệp phải tồn tại và có thể ghi thêm nội dung.

**Input mẫu:**

```python
text_to_append = "\nThis is a new line."
```

**Output mẫu:**

```python
This is the original content.
This is a new line.
```

**Đáp án:**

```python
# Thêm văn bản vào tệp và hiển thị nội dung
text_to_append = "\nThis is a new line."
with open('example.txt', 'a') as file:
    file.write(text_to_append)

with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
```

---

### Bài Tập 4: Đọc n dòng cuối cùng của tệp

**Yêu cầu:** Viết một chương trình Python để đọc n dòng cuối cùng của tệp.

**Điều kiện:** n phải nhỏ hơn hoặc bằng tổng số dòng trong tệp.

**Input mẫu:**

```python
n = 5
```

**Output mẫu:**

```python
This is the last line minus four.
This is the last line minus three.
...
This is the last line.
```

**Đáp án:**

```python
# Đọc n dòng cuối cùng của tệp
n = 5
with open('example.txt', 'r') as file:
    lines = file.readlines()
    for line in lines[-n:]:
        print(line, end='')
```

---

### Bài Tập 5: Đọc từng dòng của tệp và lưu vào danh sách

**Yêu cầu:** Viết một chương trình Python để đọc từng dòng của tệp và lưu nó vào một danh sách.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
['This is the first line.', 'This is the second line.', ...]
```

**Đáp án:**

```python
# Đọc từng dòng của tệp và lưu vào danh sách
lines = []
with open('example.txt', 'r') as file:
    lines = file.readlines()

print(lines)
```

---

### Bài Tập 6: Đọc từng dòng của tệp và lưu vào biến

**Yêu cầu:** Viết một chương trình Python để đọc từng dòng của tệp và lưu nó vào một biến.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
This is the first line.
This is the second line.
...
```

**Đáp án:**

```python
# Đọc từng dòng của tệp và lưu vào biến
with open('example.txt', 'r') as file:
    content = file.read()

print(content)
```

---

### Bài Tập 7: Đọc từng dòng của tệp và lưu vào mảng

**Yêu cầu:** Viết một chương trình Python để đọc từng dòng của tệp và lưu nó vào một mảng.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
['This is the first line.', 'This is the second line.', ...]
```

**Đáp án:**

```python
# Đọc từng dòng của tệp và lưu vào mảng
array = []
with open('example.txt', 'r') as file:
    for line in file:
        array.append(line.strip())

print(array)
```

---

### Bài Tập 8: Tìm từ dài nhất

**Yêu cầu:** Viết một chương trình Python để tìm từ dài nhất trong tệp.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
longest_word
```

**Đáp án:**

```python
# Tìm từ dài nhất trong tệp
def longest_word(filename):
    with open(filename, 'r') as file:
        words = file.read().split()
    longest = max(words, key=len)
    return longest

print(longest_word('example.txt'))
```

---

### Bài Tập 9: Đếm số dòng trong tệp văn bản

**Yêu cầu:** Viết một chương trình Python để đếm số dòng trong tệp văn bản.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
Số dòng trong tệp: 10
```

**Đáp án:**

```python
# Đếm số dòng trong tệp văn bản
with open('example.txt', 'r') as file:
    lines = file.readlines()
    line_count = len(lines)

print(f"Số dòng trong tệp: {line_count}")
```

---

### Bài Tập 10: Đếm tần suất từ trong tệp

**Yêu cầu:** Viết một chương trình Python để đếm tần suất xuất hiện của các từ trong tệp.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
Counter({'word1': 3, 'word2': 2, ...})
```

**Đáp án:**

```python
# Đếm tần suất từ trong tệp
from collections import Counter

with open('example.txt', 'r') as file:
    words = file.read().split()
    word_count = Counter(words)

print(word_count)
```

---

### Bài Tập 11: Lấy kích thước của tệp

**Yêu cầu:** Viết một chương trình Python để lấy kích thước của tệp văn bản.

**Điều kiện:** Tệp phải tồn tại.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
Kích thước của tệp: 1024 bytes
```

**Đáp án:**

```python
# Lấy kích thước của tệp
import os

file_size = os.path.getsize('example.txt')
print(f"Kích thước của tệp: {file_size} bytes")
```

---

### Bài Tập 12: Ghi danh sách vào tệp

**Yêu cầu:** Viết một chương trình Python để ghi một danh sách vào tệp.

**Điều kiện:** Tệp phải có thể ghi được.

**Input mẫu:**

```python
my_list = ['Python', 'Java', 'C++', 'JavaScript']
```

**Output mẫu:** Nội dung của `output.txt`:

```python
Python
Java
C++
JavaScript
```

**Đáp án:**

```python
# Ghi danh sách vào tệp
my_list = ['Python', 'Java', 'C++', 'JavaScript']

with open('output.txt', 'w') as file:
    for item in my_list:
        file.write(f"{item}\n")
```

---

### Bài Tập 13: Sao chép nội dung từ tệp này sang tệp khác

**Yêu cầu:** Viết một chương trình Python để sao chép nội dung của một tệp sang tệp khác.

**Điều kiện:** Cả tệp nguồn và tệp đích phải có thể truy cập và đọc/ghi được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:** Nội dung của `destination.txt` giống với `example.txt`.

**Đáp án:**

```python
# Sao chép nội dung từ tệp này sang tệp khác
with open('example.txt', 'r') as source_file:
    content

 = source_file.read()

with open('destination.txt', 'w') as destination_file:
    destination_file.write(content)
```

---

### Bài Tập 14: Kết hợp từng dòng của tệp đầu tiên với dòng tương ứng trong tệp thứ hai

**Yêu cầu:** Viết một chương trình Python để kết hợp từng dòng của tệp đầu tiên với dòng tương ứng trong tệp thứ hai.

**Điều kiện:** Hai tệp phải có cùng số dòng.

**Input mẫu:** Nội dung của `file1.txt` và `file2.txt`.

**Output mẫu:**

```python
This is file1 line1 This is file2 line1
This is file1 line2 This is file2 line2
...
```

**Đáp án:**

```python
# Kết hợp từng dòng của tệp đầu tiên với dòng tương ứng trong tệp thứ hai
with open('file1.txt', 'r') as file1, open('file2.txt', 'r') as file2:
    for line1, line2 in zip(file1, file2):
        print(line1.strip() + " " + line2.strip())
```

---

### Bài Tập 15: Đọc một dòng ngẫu nhiên từ tệp

**Yêu cầu:** Viết một chương trình Python để đọc một dòng ngẫu nhiên từ tệp.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:** Một dòng ngẫu nhiên từ tệp `example.txt`.

**Đáp án:**

```python
# Đọc một dòng ngẫu nhiên từ tệp
import random

with open('example.txt', 'r') as file:
    lines = file.readlines()
    random_line = random.choice(lines)
    print(random_line.strip())
```

---

### Bài Tập 16: Kiểm tra xem tệp có được đóng hay không

**Yêu cầu:** Viết một chương trình Python để kiểm tra xem tệp có được đóng hay không.

**Điều kiện:** Tệp phải tồn tại.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
False
True
```

**Đáp án:**

```python
# Kiểm tra xem tệp có được đóng hay không
file = open('example.txt', 'r')
print(file.closed)  # Output: False
file.close()
print(file.closed)  # Output: True
```

---

### Bài Tập 17: Xóa ký tự xuống dòng khỏi tệp

**Yêu cầu:** Viết một chương trình Python để xóa các ký tự xuống dòng (`\n`) khỏi tệp.

**Điều kiện:** Tệp phải tồn tại và có thể đọc/ghi được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:** Nội dung của tệp sau khi xóa tất cả các ký tự xuống dòng.

**Đáp án:**

```python
# Xóa ký tự xuống dòng khỏi tệp
with open('example.txt', 'r') as file:
    lines = file.readlines()

with open('example.txt', 'w') as file:
    for line in lines:
        file.write(line.strip() + " ")
```

---

### Bài Tập 18: Đếm số từ trong tệp văn bản

**Yêu cầu:** Viết một chương trình Python nhận đầu vào là một tệp văn bản và trả về số từ trong tệp.

**Điều kiện:** Tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:**

```python
Số từ trong tệp: 100
```

**Đáp án:**

```python
# Đếm số từ trong tệp văn bản
with open('example.txt', 'r') as file:
    content = file.read()
    words = content.split()
    word_count = len(words)

print(f"Số từ trong tệp: {word_count}")
```

---

### Bài Tập 19: Trích xuất ký tự từ nhiều tệp văn bản và đưa chúng vào danh sách

**Yêu cầu:** Viết một chương trình Python để trích xuất các ký tự từ nhiều tệp văn bản và đưa chúng vào một danh sách.

**Điều kiện:** Các tệp phải tồn tại và có thể đọc được.

**Input mẫu:** Tên các tệp văn bản cần trích xuất.

**Output mẫu:**

```python
['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', ...]
```

**Đáp án:**

```python
# Trích xuất ký tự từ nhiều tệp văn bản và đưa chúng vào danh sách
files = ['file1.txt', 'file2.txt']
characters = []

for file_name in files:
    with open(file_name, 'r') as file:
        characters.extend(list(file.read()))

print(characters)
```

---

### Bài Tập 20: Tạo 26 tệp văn bản từ A.txt đến Z.txt

**Yêu cầu:** Viết một chương trình Python để tạo 26 tệp văn bản có tên từ A.txt, B.txt, và tiếp tục cho đến Z.txt.

**Điều kiện:** Tệp có thể ghi được.

**Input mẫu:** Không yêu cầu input từ người dùng.

**Output mẫu:** 26 tệp văn bản có tên từ A.txt đến Z.txt.

**Đáp án:**

```python
# Tạo 26 tệp văn bản từ A.txt đến Z.txt
import string

for letter in string.ascii_uppercase:
    with open(f"{letter}.txt", 'w') as file:
        file.write(f"This is file {letter}.txt")
```

---

### Bài Tập 21: Tạo một tệp chứa tất cả các chữ cái trong bảng chữ cái tiếng Anh theo số lượng chữ cái trên mỗi dòng

**Yêu cầu:** Viết một chương trình Python để tạo một tệp mà tất cả các chữ cái trong bảng chữ cái tiếng Anh được liệt kê theo số lượng chữ cái trên mỗi dòng.

**Điều kiện:** Tệp có thể ghi được.

**Input mẫu:**

```python
line_length = 5
```

**Output mẫu:** Nội dung của `alphabet.txt`:

```python
ABCDE
FGHIJ
KLMNO
PQRST
UVWXY
Z
```

**Đáp án:**

```python
# Tạo một tệp chứa tất cả các chữ cái trong bảng chữ cái tiếng Anh theo số lượng chữ cái trên mỗi dòng
import string

letters = string.ascii_uppercase
line_length = 5

with open('alphabet.txt', 'w') as file:
    for i in range(0, len(letters), line_length):
        file.write(letters[i:i + line_length] + '\n')
```
