# Đáp án chương 12: Đa hình

### Bài Tập 1: Khái niệm đa hình cơ bản

**Yêu cầu:**  
Viết hai lớp Python `Dog` và `Cat`, mỗi lớp có phương thức `sound()`. Trong lớp `Dog`, phương thức `sound()` in ra "Woof", và trong lớp `Cat`, phương thức `sound()` in ra "Meow". Tạo một danh sách chứa các đối tượng của cả `Dog` và `Cat`, sau đó lặp qua danh sách và gọi phương thức `sound()` cho từng đối tượng.

**Giải pháp:**

```python
class Dog:
    def sound(self):
        # Phương thức sound() của lớp Dog
        print("Woof")

class Cat:
    def sound(self):
        # Phương thức sound() của lớp Cat
        print("Meow")

# Tạo danh sách chứa các đối tượng Dog và Cat
animals = [Dog(), Cat(), Dog()]

# Lặp qua danh sách và gọi phương thức sound() cho từng đối tượng
for animal in animals:
    animal.sound()
```

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

**Giải thích:**  
Đa hình cho phép chúng ta gọi cùng một phương thức `sound()` từ các đối tượng khác nhau mà không cần quan tâm đến kiểu lớp cụ thể của chúng. Mỗi lớp `Dog` và `Cat` đều có phương thức `sound()` riêng của mình.

---

### Bài Tập 2: Ghi đè phương thức với đa hình

**Yêu cầu:**  
Viết một lớp Python `Vehicle` với phương thức `move()` in ra "The vehicle is moving". Tạo hai lớp con `Car` và `Boat` kế thừa từ `Vehicle` và ghi đè phương thức `move()` trong `Car` để in ra "The car is driving" và trong `Boat` để in ra "The boat is sailing". Tạo một danh sách chứa các đối tượng của `Car` và `Boat`, sau đó gọi phương thức `move()` từ danh sách đó.

**Giải pháp:**

```python
class Vehicle:
    def move(self):
        # Phương thức move() của lớp Vehicle
        print("The vehicle is moving")

class Car(Vehicle):
    def move(self):
        # Ghi đè phương thức move() trong lớp Car
        print("The car is driving")

class Boat(Vehicle):
    def move(self):
        # Ghi đè phương thức move() trong lớp Boat
        print("The boat is sailing")

# Tạo danh sách chứa các đối tượng Car và Boat
vehicles = [Car(), Boat(), Car()]

# Lặp qua danh sách và gọi phương thức move() cho từng đối tượng
for vehicle in vehicles:
    vehicle.move()
```

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

**Giải thích:**  
Phương thức `move()` được ghi đè trong các lớp `Car` và `Boat` để thể hiện hành vi cụ thể của từng loại phương tiện. Đa hình cho phép chúng ta gọi phương thức `move()` từ các đối tượng `Car` và `Boat` mà không cần quan tâm đến kiểu lớp cụ thể của chúng.

---

### Bài Tập 3: Nạp chồng toán tử (Operator Overloading)

**Yêu cầu:**  
Viết một lớp Python `Point` để đại diện cho một điểm trong không gian 2D với các thuộc tính `x` và `y`. Nạp chồng toán tử `+` để cộng hai đối tượng `Point` lại với nhau, kết quả là một điểm mới với tọa độ x và y là tổng của các tọa độ tương ứng.

**Giải pháp:**

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        # Nạp chồng toán tử + để cộng hai đối tượng Point
        return Point(self.x + other.x, self.y + other.y)

    def __str__(self):
        # Phương thức để in ra tọa độ của điểm
        return f"({self.x}, {self.y})"

# Tạo hai đối tượng Point
p1 = Point(1, 2)
p2 = Point(3, 4)

# Cộng hai đối tượng Point
p3 = p1 + p2
print(p3)  # Kết quả: (4, 6)
```

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

**Giải thích:**  
Nạp chồng toán tử `+` được thực hiện bằng cách định nghĩa phương thức đặc biệt `__add__()` trong lớp `Point`. Phương thức này cho phép cộng hai đối tượng `Point` lại với nhau để tạo ra một đối tượng `Point` mới với tọa độ là tổng của các tọa độ tương ứng.

---

### Bài Tập 4: Đa hình với nạp chồng toán tử

**Yêu cầu:**  
Viết một lớp Python `Vector` với các thuộc tính `x`, `y`, và `z`. Nạp chồng toán tử `*` để tính tích vô hướng (dot product) của hai đối tượng `Vector`. Tạo hai đối tượng `Vector` và tính tích vô hướng của chúng.

**Giải pháp:**

```python
class Vector:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

    def __mul__(self, other):
        # Nạp chồng toán tử * để tính tích vô hướng của hai đối tượng Vector
        return self.x * other.x + self.y * other.y + self.z * other.z

    def __str__(self):
        return f"({self.x}, {self.y}, {self.z})"

# Tạo hai đối tượng Vector
v1 = Vector(1, 2, 3)
v2 = Vector(4, 5, 6)

# Tính tích vô hướng của hai đối tượng Vector
dot_product = v1 * v2
print(f"Tích vô hướng: {dot_product}")  # Kết quả: 32
```

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

**Giải thích:**  
Nạp chồng toán tử `*` được thực hiện bằng cách định nghĩa phương thức đặc biệt `__mul__()` trong lớp `Vector`. Phương thức này cho phép tính tích vô hướng của hai đối tượng `Vector` bằng cách nhân các thành phần tương ứng và tính tổng.

---

### Bài Tập 5: Đa hình với nhiều phương thức

**Yêu cầu:**  
Viết một lớp cơ bản `Shape` với phương thức `area()` trả về giá trị 0. Tạo các lớp con `Rectangle` và `Circle` kế thừa từ `Shape`. Trong lớp `Rectangle`, ghi đè phương thức `area()` để tính diện tích hình chữ nhật. Trong lớp `Circle`, ghi đè phương thức `area()` để tính diện tích hình tròn. Sử dụng đa hình để tính diện tích của các đối tượng `Rectangle` và `Circle` mà không cần biết kiểu lớp cụ thể của chúng.

**Giải pháp:**

```python
class Shape:
    def area(self):
        # Phương thức area() mặc định của lớp Shape
        return 0

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        # Ghi đè phương thức area() để tính diện tích hình chữ nhật
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        # Ghi đè phương thức area() để tính diện tích hình tròn
        return 3.14159 * (self.radius ** 2)

# Tạo danh sách chứa các đối tượng Shape
shapes = [Rectangle(3, 4), Circle(5)]

#

 Lặp qua danh sách và gọi phương thức area() cho từng đối tượng
for shape in shapes:
    print(f"Diện tích: {shape.area()}")
```

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

**Giải thích:**  
Phương thức `area()` được ghi đè trong các lớp `Rectangle` và `Circle` để tính diện tích cụ thể cho từng loại hình. Đa hình cho phép chúng ta gọi phương thức `area()` từ các đối tượng `Shape` mà không cần quan tâm đến kiểu lớp cụ thể của chúng.

---

### Bài Tập 6: Đa hình với lớp trừu tượng

**Yêu cầu:**  
Viết một lớp trừu tượng `Employee` với phương thức trừu tượng `calculate_pay()`. Tạo các lớp con `HourlyEmployee` và `SalariedEmployee` kế thừa từ `Employee`. Trong lớp `HourlyEmployee`, ghi đè phương thức `calculate_pay()` để tính lương theo giờ. Trong lớp `SalariedEmployee`, ghi đè phương thức `calculate_pay()` để trả về lương cố định hàng tháng. Tạo danh sách chứa các đối tượng của cả `HourlyEmployee` và `SalariedEmployee`, sau đó tính toán lương cho tất cả các nhân viên trong danh sách.

**Giải pháp:**

```python
from abc import ABC, abstractmethod

class Employee(ABC):
    @abstractmethod
    def calculate_pay(self):
        pass

class HourlyEmployee(Employee):
    def __init__(self, name, hours_worked, hourly_rate):
        self.name = name
        self.hours_worked = hours_worked
        self.hourly_rate = hourly_rate

    def calculate_pay(self):
        # Tính lương theo giờ
        return self.hours_worked * self.hourly_rate

class SalariedEmployee(Employee):
    def __init__(self, name, monthly_salary):
        self.name = name
        self.monthly_salary = monthly_salary

    def calculate_pay(self):
        # Trả về lương cố định hàng tháng
        return self.monthly_salary

# Tạo danh sách các đối tượng Employee
employees = [
    HourlyEmployee("Alice", 120, 15),
    SalariedEmployee("Bob", 3000)
]

# Tính toán lương cho từng nhân viên
for employee in employees:
    print(f"Lương của {employee.name}: {employee.calculate_pay()}")
```

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

**Giải thích:**  
Lớp `Employee` là một lớp trừu tượng với phương thức trừu tượng `calculate_pay()`. Các lớp con `HourlyEmployee` và `SalariedEmployee` ghi đè phương thức này để tính lương theo các cách khác nhau. Đa hình cho phép chúng ta tính toán lương cho từng nhân viên mà không cần biết kiểu lớp cụ thể của họ.

---

### Bài Tập 7: Đa hình với hàm callback

**Yêu cầu:**  
Viết một hàm Python `apply_operation()` nhận một danh sách số và một hàm callback làm tham số. Hàm callback sẽ được áp dụng lên từng phần tử trong danh sách và trả về kết quả. Tạo hai hàm callback `double()` và `square()`, một để nhân đôi và một để tính bình phương giá trị đầu vào. Sử dụng đa hình để áp dụng cả hai hàm callback lên danh sách số đã cho.

**Giải pháp:**

```python
def double(n):
    return n * 2

def square(n):
    return n ** 2

def apply_operation(numbers, operation):
    return [operation(n) for n in numbers]

# Danh sách số
numbers = [1, 2, 3, 4, 5]

# Áp dụng hàm double và square lên danh sách số
doubled_numbers = apply_operation(numbers, double)
squared_numbers = apply_operation(numbers, square)

print(f"Nhân đôi: {doubled_numbers}")  # Kết quả: [2, 4, 6, 8, 10]
print(f"Bình phương: {squared_numbers}")  # Kết quả: [1, 4, 9, 16, 25]
```

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

**Giải thích:**  
Hàm `apply_operation()` nhận một danh sách số và một hàm callback, sau đó áp dụng hàm callback lên từng phần tử trong danh sách. Đa hình cho phép chúng ta sử dụng cùng một hàm `apply_operation()` để áp dụng các hàm callback khác nhau như `double()` và `square()`.

---

### Bài Tập 8: Đa hình với giao diện (Interface) và module `abc`

**Yêu cầu:**  
Viết một giao diện `Drawable` với phương thức `draw()`. Tạo các lớp `Circle`, `Square`, và `Triangle` thực thi giao diện `Drawable`. Mỗi lớp sẽ có một phương thức `draw()` riêng để vẽ hình tương ứng. Sử dụng đa hình để gọi phương thức `draw()` cho các đối tượng `Circle`, `Square`, và `Triangle` mà không cần biết kiểu lớp cụ thể của chúng.

**Giải pháp:**

```python
from abc import ABC, abstractmethod

class Drawable(ABC):
    @abstractmethod
    def draw(self):
        pass

class Circle(Drawable):
    def draw(self):
        print("Drawing a circle")

class Square(Drawable):
    def draw(self):
        print("Drawing a square")

class Triangle(Drawable):
    def draw(self):
        print("Drawing a triangle")

# Tạo danh sách các đối tượng Drawable
shapes = [Circle(), Square(), Triangle()]

# Lặp qua danh sách và gọi phương thức draw() cho từng đối tượng
for shape in shapes:
    shape.draw()
```

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

**Giải thích:**  
Giao diện `Drawable` được định nghĩa bằng cách sử dụng module `abc`, và các lớp `Circle`, `Square`, và `Triangle` thực thi giao diện này bằng cách cung cấp phương thức `draw()` riêng của mình. Đa hình cho phép chúng ta gọi phương thức `draw()` từ các đối tượng `Drawable` mà không cần quan tâm đến kiểu lớp cụ thể của chúng.
