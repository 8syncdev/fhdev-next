# Đáp Án Chương 9: Giới Thiệu Về Lập Trình Hướng Đối Tượng

### Bài Tập 1: Tạo lớp và đối tượng cơ bản

**Yêu cầu:**  
Viết một lớp Python có tên `Person` với thuộc tính `name`. Tạo một đối tượng của lớp `Person` và gán giá trị cho thuộc tính `name`, sau đó in ra tên của người đó.

**Điều kiện:**

- Thuộc tính `name` phải được khởi tạo trong phương thức `__init__`.
- Đối tượng phải có khả năng truy cập thuộc tính `name`.

**Input mẫu:**

```python
person = Person("An")
```

**Output mẫu:**

```
An
```

**Giải pháp:**

```python
class Person:
    def __init__(self, name):
        # Khởi tạo thuộc tính name
        self.name = name

# Tạo đối tượng Person
person = Person("An")
print(person.name)  # Kết quả: An
```

---

### Bài Tập 2: Phương thức trong lớp

**Yêu cầu:**  
Viết một lớp Python có tên `Dog` với các thuộc tính `name` và `age`. Thêm một phương thức `bark()` để in ra "Woof!". Tạo một đối tượng của lớp `Dog`, gán giá trị cho các thuộc tính, và gọi phương thức `bark()`.

**Điều kiện:**

- Thuộc tính `name` và `age` phải được khởi tạo trong phương thức `__init__`.
- Phương thức `bark()` phải in ra chuỗi `"Woof!"`.

**Input mẫu:**

```python
dog = Dog("Rex", 2)
dog.bark()
```

**Output mẫu:**

```
Woof!
```

**Giải pháp:**

```python
class Dog:
    def __init__(self, name, age):
        # Khởi tạo các thuộc tính name và age
        self.name = name
        self.age = age

    def bark(self):
        # Phương thức bark in ra "Woof!"
        print("Woof!")

# Tạo đối tượng Dog
dog = Dog("Rex", 2)
print(f"Tên chó: {dog.name}, Tuổi: {dog.age}")
dog.bark()  # Kết quả: Woof!
```

---

### Bài Tập 3: Phương thức khởi tạo (`__init__`)

**Yêu cầu:**  
Viết một lớp Python có tên `Car` với các thuộc tính `make`, `model`, và `year`. Sử dụng phương thức `__init__` để khởi tạo các thuộc tính này khi tạo đối tượng. Tạo một đối tượng của lớp `Car` và in ra thông tin của chiếc xe.

**Điều kiện:**

- Thuộc tính `make`, `model`, và `year` phải được khởi tạo trong phương thức `__init__`.
- Đối tượng phải có khả năng truy cập các thuộc tính trên.

**Input mẫu:**

```python
car = Car("Toyota", "Corolla", 2020)
```

**Output mẫu:**

```
Hãng xe: Toyota, Mẫu xe: Corolla, Năm sản xuất: 2020
```

**Giải pháp:**

```python
class Car:
    def __init__(self, make, model, year):
        # Khởi tạo các thuộc tính make, model, và year
        self.make = make
        self.model = model
        self.year = year

# Tạo đối tượng Car
car = Car("Toyota", "Corolla", 2020)
print(f"Hãng xe: {car.make}, Mẫu xe: {car.model}, Năm sản xuất: {car.year}")
```

---

### Bài Tập 4: Thêm phương thức vào lớp

**Yêu cầu:**  
Viết một lớp Python có tên `Rectangle` với các thuộc tính `width` và `height`. Thêm các phương thức `area()` để tính diện tích và `perimeter()` để tính chu vi của hình chữ nhật. Tạo một đối tượng của lớp `Rectangle` và gọi các phương thức này.

**Điều kiện:**

- Thuộc tính `width` và `height` phải được khởi tạo trong phương thức `__init__`.
- Phương thức `area()` phải trả về diện tích, `perimeter()` trả về chu vi của hình chữ nhật.

**Input mẫu:**

```python
rect = Rectangle(4, 7)
```

**Output mẫu:**

```
Diện tích: 28
Chu vi: 22
```

**Giải pháp:**

```python
class Rectangle:
    def __init__(self, width, height):
        # Khởi tạo các thuộc tính width và height
        self.width = width
        self.height = height

    def area(self):
        # Phương thức tính diện tích hình chữ nhật
        return self.width * self.height

    def perimeter(self):
        # Phương thức tính chu vi hình chữ nhật
        return 2 * (self.width + self.height)

# Tạo đối tượng Rectangle
rect = Rectangle(4, 7)
print(f"Diện tích: {rect.area()}")       # Kết quả: 28
print(f"Chu vi: {rect.perimeter()}")    # Kết quả: 22
```

---

### Bài Tập 5: Thuộc tính private và phương thức getter/setter

**Yêu cầu:**  
Viết một lớp Python có tên `BankAccount` với thuộc tính private `_balance`. Thêm phương thức `deposit(amount)` để thêm tiền vào tài khoản, `withdraw(amount)` để rút tiền từ tài khoản, và `get_balance()` để trả về số dư hiện tại. Tạo một đối tượng của lớp `BankAccount` và thực hiện các giao dịch.

**Điều kiện:**

- Thuộc tính `_balance` phải là private.
- Phương thức `deposit(amount)` tăng giá trị `_balance`, `withdraw(amount)` giảm giá trị `_balance`, và `get_balance()` trả về giá trị `_balance`.

**Input mẫu:**

```python
account = BankAccount(100)
account.deposit(50)
account.withdraw(70)
```

**Output mẫu:**

```
Số dư sau khi nạp tiền: 150
Số dư sau khi rút tiền: 80
```

**Giải pháp:**

```python
class BankAccount:
    def __init__(self, initial_balance=0):
        # Khởi tạo thuộc tính private _balance
        self._balance = initial_balance

    def deposit(self, amount):
        # Phương thức nạp tiền vào tài khoản
        self._balance += amount

    def withdraw(self, amount):
        # Phương thức rút tiền từ tài khoản
        if amount > self._balance:
            print("Số dư không đủ!")
        else:
            self._balance -= amount

    def get_balance(self):
        # Phương thức trả về số dư hiện tại
        return self._balance

# Tạo đối tượng BankAccount và thực hiện giao dịch
account = BankAccount(100)
account.deposit(50)
print(f"Số dư sau khi nạp tiền: {account.get_balance()}")  # Kết quả: 150

account.withdraw(70)
print(f"Số dư sau khi rút tiền: {account.get_balance()}")  # Kết quả: 80
```

---

### Bài Tập 6: Kế thừa đơn giản

**Yêu cầu:**  
Viết một lớp cơ bản `Animal` với phương thức `sound()`. Tạo hai lớp con `Dog` và `Cat` kế thừa từ `Animal`, và ghi đè phương thức `sound()` để in ra tiếng kêu của từng loại động vật. Tạo các đối tượng của `Dog` và `Cat` và gọi phương thức `sound()`.

**Điều kiện:**

- Phương thức `sound()` phải được ghi đè trong các lớp con để in ra tiếng kêu tương ứng.

**Input mẫu:**

```python
dog = Dog()
cat = Cat()
```

**Output mẫu:**

```
Woof
Meow
```

**Giải pháp:**

```python
class Animal:
    def sound(self):
        # Phương thức sound() của lớp Animal
        return "Some sound"

class Dog(Animal):
    def sound(self):
        # Ghi đè phương thức sound() trong lớp Dog
        return "Woof"

class Cat(Animal):
    def sound(self):
        # Ghi đè phương thức sound() trong lớp Cat
        return "Meow"

# Tạo đối tượng Dog và Cat
dog = Dog()
cat = Cat()

print(dog.sound())  # Kết quả: Woof
print(cat.sound())  # Kết quả: Meow
```

---

### Bài Tập 7: Ghi đè phương thức

**Yêu cầu:**  
Viết một lớp `Shape` với phương thức `area()` trả về giá trị 0. Tạo các lớp con `Rectangle` và `Circle` kế thừa từ `Shape`. Ghi đè phương thức `area()` để tính diện tích của hình chữ nhật và hình tròn.

**Điều kiện:**

- Phương thức `area()` trong các lớp con phải được ghi đè để trả về giá trị

diện tích cụ thể.

**Input mẫu:**

```python
rect = Rectangle(4, 7)
circ = Circle(5)
```

**Output mẫu:**

```
Diện tích hình chữ nhật: 28
Diện tích hình tròn: 78.53975
```

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

# Tạo đối tượng Rectangle và Circle
rect = Rectangle(4, 7)
circ = Circle(5)

# Tính diện tích của hình chữ nhật và hình tròn
print(f"Diện tích hình chữ nhật: {rect.area()}")  # Kết quả: 28
print(f"Diện tích hình tròn: {circ.area()}")     # Kết quả: 78.53975
```

---

### Bài Tập 8: Tạo đối tượng từ lớp con

**Yêu cầu:**  
Viết một lớp `Person` với thuộc tính `name` và `age`. Tạo lớp con `Student` kế thừa từ `Person` và thêm thuộc tính `student_id`. Tạo đối tượng của lớp `Student` và in ra thông tin của sinh viên đó.

**Điều kiện:**

- Thuộc tính `name` và `age` phải được khởi tạo thông qua lớp cha (`Person`).
- Thuộc tính `student_id` phải được khởi tạo trong lớp con (`Student`).

**Input mẫu:**

```python
student = Student("An", 20, "S12345")
```

**Output mẫu:**

```
Tên: An, Tuổi: 20, Mã sinh viên: S12345
```

**Giải pháp:**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

# Tạo đối tượng Student
student = Student("An", 20, "S12345")
print(f"Tên: {student.name}, Tuổi: {student.age}, Mã sinh viên: {student.student_id}")
```

---

### Bài Tập 9: Phương thức tĩnh (`@staticmethod`)

**Yêu cầu:**  
Viết một lớp `MathOperations` với phương thức tĩnh `add(x, y)` để tính tổng của hai số. Gọi phương thức này mà không cần tạo đối tượng của lớp.

**Điều kiện:**

- Phương thức `add(x, y)` phải là phương thức tĩnh (`@staticmethod`).
- Phương thức có thể được gọi trực tiếp từ lớp mà không cần tạo đối tượng.

**Input mẫu:**

```python
result = MathOperations.add(5, 10)
```

**Output mẫu:**

```
Tổng: 15
```

**Giải pháp:**

```python
class MathOperations:
    @staticmethod
    def add(x, y):
        # Phương thức tĩnh để tính tổng hai số
        return x + y

# Gọi phương thức tĩnh add() mà không cần tạo đối tượng
result = MathOperations.add(5, 10)
print(f"Tổng: {result}")  # Kết quả: 15
```

---

### Bài Tập 10: Phương thức lớp (`@classmethod`)

**Yêu cầu:**  
Viết một lớp `Person` với thuộc tính `population` để đếm số lượng đối tượng được tạo ra. Thêm phương thức lớp `get_population()` để trả về giá trị của `population`. Tạo một số đối tượng `Person` và kiểm tra giá trị của `population`.

**Điều kiện:**

- Thuộc tính `population` phải là thuộc tính lớp.
- Phương thức `get_population()` phải là phương thức lớp (`@classmethod`).

**Input mẫu:**

```python
person1 = Person("An")
person2 = Person("Binh")
```

**Output mẫu:**

```
Số lượng đối tượng: 2
```

**Giải pháp:**

```python
class Person:
    population = 0  # Thuộc tính lớp để đếm số đối tượng

    def __init__(self, name):
        self.name = name
        Person.population += 1  # Tăng giá trị population khi tạo đối tượng

    @classmethod
    def get_population(cls):
        # Phương thức lớp trả về số lượng đối tượng được tạo ra
        return cls.population

# Tạo đối tượng Person
person1 = Person("An")
person2 = Person("Binh")

# Kiểm tra giá trị của population
print(f"Số lượng đối tượng: {Person.get_population()}")  # Kết quả: 2
```

---

### Bài Tập 11: Đa hình với kế thừa

**Yêu cầu:**  
Viết một lớp `Vehicle` với phương thức `start_engine()`. Tạo các lớp con `Car` và `Motorcycle` kế thừa từ `Vehicle`, và ghi đè phương thức `start_engine()` để in ra hành vi cụ thể của từng loại phương tiện. Tạo danh sách các đối tượng `Vehicle` và gọi phương thức `start_engine()` cho từng đối tượng.

**Điều kiện:**

- Phương thức `start_engine()` phải được ghi đè trong các lớp con để in ra hành vi cụ thể.

**Input mẫu:**

```python
vehicles = [Car(), Motorcycle()]
```

**Output mẫu:**

```
Starting engine of the car...
Starting engine of the motorcycle...
```

**Giải pháp:**

```python
class Vehicle:
    def start_engine(self):
        # Phương thức mặc định start_engine của Vehicle
        print("Starting engine of the vehicle...")

class Car(Vehicle):
    def start_engine(self):
        # Ghi đè phương thức start_engine cho Car
        print("Starting engine of the car...")

class Motorcycle(Vehicle):
    def start_engine(self):
        # Ghi đè phương thức start_engine cho Motorcycle
        print("Starting engine of the motorcycle...")

# Tạo danh sách các đối tượng Vehicle
vehicles = [Car(), Motorcycle()]

# Gọi phương thức start_engine() cho từng đối tượng
for vehicle in vehicles:
    vehicle.start_engine()
```

---

### Bài Tập 12: Sử dụng `super()` để mở rộng phương thức

**Yêu cầu:**  
Viết một lớp `Employee` với phương thức `work()` in ra "Working". Tạo lớp `Manager` kế thừa từ `Employee` và ghi đè phương thức `work()` để in ra "Managing work" và sau đó gọi phương thức `work()` của lớp cha. Tạo đối tượng của lớp `Manager` và gọi phương thức `work()`.

**Điều kiện:**

- Phương thức `work()` phải được ghi đè và mở rộng trong lớp con (`Manager`).
- Phương thức `work()` của lớp cha (`Employee`) phải được gọi bằng `super()`.

**Input mẫu:**

```python
manager = Manager()
manager.work()
```

**Output mẫu:**

```
Managing work
Working
```

**Giải pháp:**

```python
class Employee:
    def work(self):
        # Phương thức work() của Employee
        print("Working")

class Manager(Employee):
    def work(self):
        # Ghi đè phương thức work() và mở rộng chức năng
        print("Managing work")
        super().work()  # Gọi phương thức work() của lớp cha

# Tạo đối tượng Manager và gọi phương thức work()
manager = Manager()
manager.work()
```
