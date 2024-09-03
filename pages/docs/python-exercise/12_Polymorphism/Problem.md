# Bài tập chương 12: Đa hình

### Bài Tập 1: Khái niệm đa hình cơ bản

**Yêu cầu:**  
Viết hai lớp Python `Dog` và `Cat`, mỗi lớp có phương thức `sound()`. Trong lớp `Dog`, phương thức `sound()` in ra "Woof", và trong lớp `Cat`, phương thức `sound()` in ra "Meow". Tạo một danh sách chứa các đối tượng của cả `Dog` và `Cat`, sau đó lặp qua danh sách và gọi phương thức `sound()` cho từng đối tượng.

**Gợi ý:**  
Sử dụng đa hình để gọi phương thức `sound()` từ các đối tượng khác nhau trong danh sách mà không cần quan tâm đến kiểu lớp cụ thể của chúng.

**Điều kiện:**

- Các lớp `Dog` và `Cat` phải có phương thức `sound()`.

**Input mẫu:**

```python
animals = [Dog(), Cat(), Dog()]
for animal in animals:
    animal.sound()
```

**Output mẫu:**

```
Woof
Meow
Woof
```

---

### Bài Tập 2: Ghi đè phương thức với đa hình

**Yêu cầu:**  
Viết một lớp Python `Vehicle` với phương thức `move()` in ra "The vehicle is moving". Tạo hai lớp con `Car` và `Boat` kế thừa từ `Vehicle` và ghi đè phương thức `move()` trong `Car` để in ra "The car is driving" và trong `Boat` để in ra "The boat is sailing". Tạo một danh sách chứa các đối tượng của `Car` và `Boat`, sau đó gọi phương thức `move()` từ danh sách đó.

**Gợi ý:**  
Ghi đè phương thức `move()` trong các lớp con để thể hiện hành vi cụ thể của từng loại phương tiện.

**Điều kiện:**

- Phương thức `move()` phải được ghi đè trong các lớp `Car` và `Boat`.

**Input mẫu:**

```python
vehicles = [Car(), Boat(), Car()]
for vehicle in vehicles:
    vehicle.move()
```

**Output mẫu:**

```
The car is driving
The boat is sailing
The car is driving
```

---

### Bài Tập 3: Nạp chồng toán tử (Operator Overloading)

**Yêu cầu:**  
Viết một lớp Python `Point` để đại diện cho một điểm trong không gian 2D với các thuộc tính `x` và `y`. Nạp chồng toán tử `+` để cộng hai đối tượng `Point` lại với nhau, kết quả là một điểm mới với tọa độ x và y là tổng của các tọa độ tương ứng.

**Gợi ý:**  
Sử dụng phương thức đặc biệt `__add__()` để nạp chồng toán tử `+`.

**Điều kiện:**

- Toán tử `+` phải được nạp chồng để cộng hai đối tượng `Point`.

**Input mẫu:**

```python
p1 = Point(1, 2)
p2 = Point(3, 4)
p3 = p1 + p2
print(p3)
```

**Output mẫu:**

```
(4, 6)
```

---

### Bài Tập 4: Đa hình với nạp chồng toán tử

**Yêu cầu:**  
Viết một lớp Python `Vector` với các thuộc tính `x`, `y`, và `z`. Nạp chồng toán tử `*` để tính tích vô hướng (dot product) của hai đối tượng `Vector`. Tạo hai đối tượng `Vector` và tính tích vô hướng của chúng.

**Gợi ý:**  
Sử dụng phương thức đặc biệt `__mul__()` để nạp chồng toán tử `*` cho các đối tượng `Vector`.

**Điều kiện:**

- Toán tử `*` phải được nạp chồng để tính tích vô hướng của hai đối tượng `Vector`.

**Input mẫu:**

```python
v1 = Vector(1, 2, 3)
v2 = Vector(4, 5, 6)
dot_product = v1 * v2
print(f"Tích vô hướng: {dot_product}")
```

**Output mẫu:**

```
Tích vô hướng: 32
```

---

### Bài Tập 5: Đa hình với nhiều phương thức

**Yêu cầu:**  
Viết một lớp cơ bản `Shape` với phương thức `area()` trả về giá trị 0. Tạo các lớp con `Rectangle` và `Circle` kế thừa từ `Shape`. Trong lớp `Rectangle`, ghi đè phương thức `area()` để tính diện tích hình chữ nhật. Trong lớp `Circle`, ghi đè phương thức `area()` để tính diện tích hình tròn. Sử dụng đa hình để tính diện tích của các đối tượng `Rectangle` và `Circle` mà không cần biết kiểu lớp cụ thể của chúng.

**Gợi ý:**  
Ghi đè phương thức `area()` trong mỗi lớp con để thực hiện các phép tính cụ thể, sau đó sử dụng đa hình để gọi phương thức này từ các đối tượng `Shape`.

**Điều kiện:**

- Các lớp `Rectangle` và `Circle` phải ghi đè phương thức `area()`.

**Input mẫu:**

```python
shapes = [Rectangle(3, 4), Circle(5)]
for shape in shapes:
    print(f"Diện tích: {shape.area()}")
```

**Output mẫu:**

```
Diện tích: 12
Diện tích: 78.53975
```

---

### Bài Tập 6: Đa hình với lớp trừu tượng

**Yêu cầu:**  
Viết một lớp trừu tượng `Employee` với phương thức trừu tượng `calculate_pay()`. Tạo các lớp con `HourlyEmployee` và `SalariedEmployee` kế thừa từ `Employee`. Trong lớp `HourlyEmployee`, ghi đè phương thức `calculate_pay()` để tính lương theo giờ. Trong lớp `SalariedEmployee`, ghi đè phương thức `calculate_pay()` để trả về lương cố định hàng tháng. Tạo danh sách chứa các đối tượng của cả `HourlyEmployee` và `SalariedEmployee`, sau đó tính toán lương cho tất cả các nhân viên trong danh sách.

**Gợi ý:**  
Sử dụng module `abc` để định nghĩa lớp trừu tượng và phương thức trừu tượng. Ghi đè phương thức `calculate_pay()` trong các lớp con để thực hiện các phép tính lương cụ thể.

**Điều kiện:**

- Phương thức `calculate_pay()` phải được ghi đè trong các lớp `HourlyEmployee` và `SalariedEmployee`.

**Input mẫu:**

```python
employees = [
    HourlyEmployee("Alice", 120, 15),
    SalariedEmployee("Bob", 3000)
]
for employee in employees:
    print(f"Lương của {employee.name}: {employee.calculate_pay()}")
```

**Output mẫu:**

```
Lương của Alice: 1800
Lương của Bob: 3000
```

---

### Bài Tập 7: Đa hình với hàm callback

**Yêu cầu:**  
Viết một hàm Python `apply_operation()` nhận một danh sách số và một hàm callback làm tham số. Hàm callback sẽ được áp dụng lên từng phần tử trong danh sách và trả về kết quả. Tạo hai hàm callback `double()` và `square()`, một để nhân đôi và một để tính bình phương giá trị đầu vào. Sử dụng đa hình để áp dụng cả hai hàm callback lên danh sách số đã cho.

**Gợi ý:**  
Hàm callback là một hàm được truyền như một đối số cho một hàm khác. Bạn có thể sử dụng đa hình để áp dụng các hàm callback khác nhau lên cùng một danh sách số.

**Điều kiện:**

- Hàm `apply_operation()` phải có khả năng nhận bất kỳ hàm callback nào và áp dụng lên danh sách số.

**Input mẫu:**

```python
numbers = [1, 2, 3, 4, 5]
doubled_numbers = apply_operation(numbers, double)
squared_numbers = apply_operation(numbers, square)
print(f"Nhân đôi: {doubled_numbers}")
print(f"Bình phương: {squared_numbers}")
```

**Output mẫu:**

```
Nhân đôi: [2, 4, 6, 8, 10]
Bình phương: [1, 4, 9, 16, 25]
```

---

### Bài Tập 8: Đa hình với giao diện (Interface) và module `abc`

**Yêu cầu:**  
Viết một giao diện `Drawable` với phương thức `draw()`. Tạo các lớp `Circle`, `Square`, và `Triangle` thực thi giao diện `Drawable`. Mỗi lớp sẽ có một phương thức `draw()` riêng để vẽ hình tương ứng. Sử dụng đa hình để gọi phương thức `draw()` cho các đối tượng `Circle`, `Square`, và `Triangle` mà không cần biết kiểu lớp cụ thể của chúng.

**Gợi ý:**  
Sử dụng module `abc` để định nghĩa giao diện `Drawable`. Ghi đè phương thức `draw()` trong mỗi lớp để thực hiện

hành động cụ thể của lớp đó.

**Điều kiện:**

- Các lớp `Circle`, `Square`, và `Triangle` phải thực thi giao diện `Drawable` và ghi đè phương thức `draw()`.

**Input mẫu:**

```python
shapes = [Circle(), Square(), Triangle()]
for shape in shapes:
    shape.draw()
```

**Output mẫu:**

```
Drawing a circle
Drawing a square
Drawing a triangle
```
