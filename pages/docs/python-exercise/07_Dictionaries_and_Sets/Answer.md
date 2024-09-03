# Đáp án chương 7: Dictionary và Set

### I. Dictionary

#### Bài Tập 1: Chuyển đổi hai danh sách thành một từ điển

- **Yêu cầu:** Viết một chương trình Python để chuyển đổi hai danh sách dưới đây thành một từ điển, sao cho phần tử từ list1 là khóa và phần tử từ list2 là giá trị.

- **Dữ liệu đầu vào:**

  - `keys = ['Ten', 'Twenty', 'Thirty']`
  - `values = [10, 20, 30]`

- **Kết quả mong đợi:**

  ```
  {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
  ```

- **Gợi ý:** Sử dụng hàm `zip()` để kết hợp hai danh sách. Hoặc, duyệt qua danh sách bằng vòng lặp `for` và phương thức `update()` của từ điển.

- **Giải pháp 1:** Sử dụng hàm `zip()` và constructor `dict()`.

```python
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

res_dict = dict(zip(keys, values))
print(res_dict)
```

- **Giải pháp 2:** Sử dụng vòng lặp và phương thức `update()` của từ điển.

```python
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

res_dict = dict()

for i in range(len(keys)):
    res_dict.update({keys[i]: values[i]})
print(res_dict)
```

---

#### Bài Tập 2: Gộp hai từ điển Python thành một

- **Yêu cầu:** Viết chương trình để gộp hai từ điển dưới đây thành một.

- **Dữ liệu đầu vào:**

  - `dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}`
  - `dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}`

- **Kết quả mong đợi:**

  ```
  {'Ten': 10, 'Twenty': 20, 'Thirty': 30, 'Fourty': 40, 'Fifty': 50}
  ```

- **Giải pháp 1:** Dành cho Python 3.5+.

```python
dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

dict3 = {**dict1, **dict2}
print(dict3)
```

- **Giải pháp 2:** Sử dụng phương thức `update()`.

```python
dict1 = {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
dict2 = {'Thirty': 30, 'Fourty': 40, 'Fifty': 50}

dict3 = dict1.copy()
dict3.update(dict2)
print(dict3)
```

---

#### Bài Tập 3: In giá trị của khóa ‘history’ từ từ điển dưới đây

- **Yêu cầu:** Viết chương trình để in giá trị của khóa ‘history’ từ từ điển lồng nhau dưới đây.

- **Dữ liệu đầu vào:**

  - `sampleDict = {"class": {"student": {"name": "Mike", "marks": {"physics": 70, "history": 80}}}}`

- **Kết quả mong đợi:**

  ```
  80
  ```

- **Gợi ý:** Sử dụng chuỗi các khóa để định vị cặp khóa-giá trị cụ thể.

- **Giải pháp:**

```python
sampleDict = {
    "class": {
        "student": {
            "name": "Mike",
            "marks": {
                "physics": 70,
                "history": 80
            }
        }
    }
}
print(sampleDict['class']['student']['marks']['history'])
```

---

#### Bài Tập 4: Khởi tạo từ điển với các giá trị mặc định

- **Yêu cầu:** Viết chương trình để khởi tạo các khóa của từ điển với cùng một giá trị mặc định.

- **Dữ liệu đầu vào:**

  - `employees = ['Kelly', 'Emma']`
  - `defaults = {"designation": 'Developer', "salary": 8000}`

- **Kết quả mong đợi:**

  ```
  {'Kelly': {'designation': 'Developer', 'salary': 8000}, 'Emma': {'designation': 'Developer', 'salary': 8000}}
  ```

- **Gợi ý:** Sử dụng phương thức `fromkeys()` của từ điển.

- **Giải pháp:**

```python
employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}

res = dict.fromkeys(employees, defaults)
print(res)

# Dữ liệu cá nhân
print(res["Kelly"])
```

---

#### Bài Tập 5: Tạo từ điển bằng cách trích xuất các khóa từ một từ điển cho trước

- **Yêu cầu:** Viết chương trình để tạo một từ điển mới bằng cách trích xuất các khóa được chỉ định từ từ điển dưới đây.

- **Dữ liệu đầu vào:**

  - `sample_dict = {"name": "Kelly", "age": 25, "salary": 8000, "city": "New york"}`
  - `keys = ["name", "salary"]`

- **Kết quả mong đợi:**

  ```
  {'name': 'Kelly', 'salary': 8000}
  ```

- **Gợi ý:** Sử dụng comprehension từ điển hoặc phương thức `update()`.

- **Giải pháp 1:** Sử dụng comprehension từ điển.

```python
sampleDict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york" }

keys = ["name", "salary"]

newDict = {k: sampleDict[k] for k in keys}
print(newDict)
```

- **Giải pháp 2:** Sử dụng phương thức `update()` và vòng lặp.

```python
sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New york"}

keys = ["name", "salary"]

res = dict()

for k in keys:
    res.update({k: sample_dict[k]})
print(res)
```

---

#### Bài Tập 6: Xóa danh sách các khóa khỏi từ điển

- **Yêu cầu:** Viết chương trình để xóa danh sách các khóa được chỉ định khỏi từ điển dưới đây.

- **Dữ liệu đầu vào:**

  - `sample_dict = {"name": "Kelly", "age": 25, "salary": 8000, "city": "New york"}`
  - `keys = ["name", "salary"]`

- **Kết quả mong đợi:**

  ```
  {'city': 'New york', 'age': 25}
  ```

- **Gợi ý:** Sử dụng vòng lặp và phương thức `pop()` của từ điển hoặc sử dụng comprehension từ điển.

- **Giải pháp 1:** Sử dụng phương thức `pop()` và vòng lặp.

```python
sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New york"
}
keys = ["name", "salary"]

for k in keys:
    sample_dict.pop(k)
print(sample_dict)
```

- **Giải pháp 2:** Sử dụng comprehension từ điển.

```python
sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New york"
}
keys = ["name", "salary"]

sample_dict = {k: sample_dict[k] for k in sample_dict.keys() - keys}
print(sample_dict)
```

---

#### Bài Tập 7: Kiểm tra xem một giá trị có tồn tại trong từ điển hay không

- **Yêu cầu:** Viết chương trình Python để kiểm tra xem giá trị 200 có tồn tại trong từ điển dưới đây hay không.

- **Dữ liệu đầu vào:**

  - `sample_dict = {'a': 100, 'b': 200, 'c': 300}`

- **Kết quả mong đợi:**

  ```
  200 present in a dict
  ```

- **Gợi ý:** Sử dụng phương thức `values()` để lấy tất cả các giá trị của từ điển dưới dạng danh sách và sử dụng câu lệnh `if` để kiểm tra.

- **Giải pháp:**

```python
sample_dict = {'a': 100, 'b': 200, 'c': 300}
if 200 in sample_dict.values():
    print('200 present in a dict')
```

---

#### Bài Tập 8: Đổi tên khóa của một từ điển

- \*\*Yêu cầu

:\*\* Viết chương trình để đổi tên khóa `city` thành `location` trong từ điển dưới đây.

- **Dữ liệu đầu vào:**

  - `sample_dict = {"name": "Kelly", "age":25, "salary": 8000, "city": "New york"}`

- **Kết quả mong đợi:**

  ```
  {'name': 'Kelly', 'age': 25, 'salary': 8000, 'location': 'New york'}
  ```

- **Gợi ý:** Xóa `city` khỏi từ điển và thêm một khóa mới `location` với cùng giá trị.

- **Giải pháp:**

```python
sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New york"
}

sample_dict['location'] = sample_dict.pop('city')
print(sample_dict)
```

---

#### Bài Tập 9: Lấy khóa của giá trị nhỏ nhất từ từ điển dưới đây

- **Yêu cầu:** Viết chương trình để lấy khóa của giá trị nhỏ nhất từ từ điển dưới đây.

- **Dữ liệu đầu vào:**

  - `sample_dict = {'Physics': 82, 'Math': 65, 'history': 75}`

- **Kết quả mong đợi:**

  ```
  Math
  ```

- **Gợi ý:** Sử dụng hàm `min()` của Python.

- **Giải pháp:**

```python
sample_dict = {
    'Physics': 82,
    'Math': 65,
    'history': 75
}
print(min(sample_dict, key=sample_dict.get))
```

---

#### Bài Tập 10: Thay đổi giá trị của một khóa trong từ điển lồng nhau

- **Yêu cầu:** Viết chương trình Python để thay đổi lương của Brad thành 8500 trong từ điển dưới đây.

- **Dữ liệu đầu vào:**

  - `sample_dict = {'emp1': {'name': 'Jhon', 'salary': 7500}, 'emp2': {'name': 'Emma', 'salary': 8000}, 'emp3': {'name': 'Brad', 'salary': 500}}`

- **Kết quả mong đợi:**

  ```
  {'emp1': {'name': 'Jhon', 'salary': 7500}, 'emp2': {'name': 'Emma', 'salary': 8000}, 'emp3': {'name': 'Brad', 'salary': 8500}}
  ```

- **Giải pháp:**

```python
sample_dict = {
    'emp1': {'name': 'Jhon', 'salary': 7500},
    'emp2': {'name': 'Emma', 'salary': 8000},
    'emp3': {'name': 'Brad', 'salary': 500}
}

sample_dict['emp3']['salary'] = 8500
print(sample_dict)
```

---

### II. Set

#### Bài Tập 1: Thêm danh sách các phần tử vào một set

- **Yêu cầu:** Viết chương trình để thêm tất cả các phần tử của danh sách dưới đây vào một set đã cho.

- **Dữ liệu đầu vào:**

  - `sample_set = {"Yellow", "Orange", "Black"}`
  - `sample_list = ["Blue", "Green", "Red"]`

- **Kết quả mong đợi:**

  ```
  {'Green', 'Yellow', 'Black', 'Orange', 'Red', 'Blue'}
  ```

- **Gợi ý:** Sử dụng phương thức `update()` của set.

- **Giải pháp:**

```python
sample_set = {"Yellow", "Orange", "Black"}
sample_list = ["Blue", "Green", "Red"]

sample_set.update(sample_list)
print(sample_set)
```

---

#### Bài Tập 2: Trả về một set mới với các phần tử giống nhau từ hai set

- **Yêu cầu:** Viết chương trình để trả về một set mới với các phần tử giống nhau từ hai set dưới đây.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30, 40, 50}`
  - `set2 = {30, 40, 50, 60, 70}`

- **Kết quả mong đợi:**

  ```
  {40, 50, 30}
  ```

- **Gợi ý:** Sử dụng phương thức `intersection()` của set.

- **Giải pháp:**

```python
set1 = {10, 20, 30, 40, 50}
set2 = {30, 40, 50, 60, 70}

print(set1.intersection(set2))
```

---

#### Bài Tập 3: Chỉ lấy các phần tử duy nhất từ hai set

- **Yêu cầu:** Viết chương trình Python để trả về một set mới với các phần tử duy nhất từ cả hai set dưới đây, loại bỏ các phần tử trùng lặp.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30, 40, 50}`
  - `set2 = {30, 40, 50, 60, 70}`

- **Kết quả mong đợi:**

  ```
  {70, 40, 10, 50, 20, 60, 30}
  ```

- **Gợi ý:** Sử dụng phương thức `union()` của set.

- **Giải pháp:**

```python
set1 = {10, 20, 30, 40, 50}
set2 = {30, 40, 50, 60, 70}

print(set1.union(set2))
```

---

#### Bài Tập 4: Cập nhật set1 với các phần tử không tồn tại trong set2

- **Yêu cầu:** Viết chương trình Python để cập nhật set1 với các phần tử chỉ tồn tại trong set1 và không có trong set2.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30}`
  - `set2 = {20, 40, 50}`

- **Kết quả mong đợi:**

  ```
  {10, 30}
  ```

- **Gợi ý:** Sử dụng phương thức `difference_update()` của set.

- **Giải pháp:**

```python
set1 = {10, 20, 30}
set2 = {20, 40, 50}

set1.difference_update(set2)
print(set1)
```

---

#### Bài Tập 5: Xóa các phần tử khỏi set cùng một lúc

- **Yêu cầu:** Viết chương trình Python để xóa các phần tử 10, 20, 30 khỏi set dưới đây cùng một lúc.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30, 40, 50}`

- **Kết quả mong đợi:**

  ```
  {40, 50}
  ```

- **Gợi ý:** Sử dụng phương thức `difference_update()` của set.

- **Giải pháp:**

```python
set1 = {10, 20, 30, 40, 50}
set1.difference_update({10, 20, 30})
print(set1)
```

---

#### Bài Tập 6: Trả về một set các phần tử có mặt trong Set A hoặc B, nhưng không phải cả hai

- **Yêu cầu:** Viết chương trình Python để trả về một set các phần tử có mặt trong Set A hoặc B, nhưng không phải cả hai.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30, 40, 50}`
  - `set2 = {30, 40, 50, 60, 70}`

- **Kết quả mong đợi:**

  ```
  {20, 70, 10, 60}
  ```

- **Gợi ý:** Sử dụng phương thức `symmetric_difference()` của set.

- **Giải pháp:**

```python
set1 = {10, 20, 30, 40, 50}
set2 = {30, 40, 50, 60, 70}

print(set1.symmetric_difference(set2))
```

---

#### Bài Tập 7: Kiểm tra xem hai set có phần tử chung nào không. Nếu có, hiển thị các phần tử chung

- **Yêu cầu:** Viết chương trình Python để kiểm tra xem hai set có phần tử chung nào không. Nếu có, hiển thị các phần tử chung.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30, 40, 50}`
  - `set2 = {60, 70, 80, 90, 10}`

- **Kết quả mong đợi:**

  ```
  Two sets have items in common
  {10}
  ```

- **Gợi ý:** Sử dụng phương thức `isdisjoint()` để kiểm tra nếu các set có phần tử chung. Nếu điều kiện trên đúng, thì sử dụng phương thức `intersection()` để hiển thị các phần tử chung.

- **Giải pháp:**

```python
set1 = {10,

 20, 30, 40, 50}
set2 = {60, 70, 80, 90, 10}

if set1.isdisjoint(set2):
  print("Two sets have no items in common")
else:
  print("Two sets have items in common")
  print(set1.intersection(set2))
```

---

#### Bài Tập 8: Cập nhật set1 bằng cách thêm các phần tử từ set2, ngoại trừ các phần tử chung

- **Yêu cầu:** Viết chương trình Python để cập nhật set1 bằng cách thêm các phần tử từ set2, ngoại trừ các phần tử chung.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30, 40, 50}`
  - `set2 = {30, 40, 50, 60, 70}`

- **Kết quả mong đợi:**

  ```
  {70, 10, 20, 60}
  ```

- **Gợi ý:** Sử dụng phương thức `symmetric_difference_update()` của set.

- **Giải pháp:**

```python
set1 = {10, 20, 30, 40, 50}
set2 = {30, 40, 50, 60, 70}

set1.symmetric_difference_update(set2)
print(set1)
```

---

#### Bài Tập 9: Xóa các phần tử khỏi set1 mà không có mặt trong cả set1 và set2

- **Yêu cầu:** Viết chương trình Python để xóa các phần tử khỏi set1 mà không có mặt trong cả set1 và set2.

- **Dữ liệu đầu vào:**

  - `set1 = {10, 20, 30, 40, 50}`
  - `set2 = {30, 40, 50, 60, 70}`

- **Kết quả mong đợi:**

  ```
  {40, 50, 30}
  ```

- **Gợi ý:** Sử dụng phương thức `intersection_update()` của set.

- **Giải pháp:**

```python
set1 = {10, 20, 30, 40, 50}
set2 = {30, 40, 50, 60, 70}

set1.intersection_update(set2)
print(set1)
```
