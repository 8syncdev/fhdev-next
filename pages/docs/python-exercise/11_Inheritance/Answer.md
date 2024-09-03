# Đáp án chương 11: Kế thừa

### Bài Tập 1: Khái niệm kế thừa cơ bản

**Yêu cầu:**  
Viết một lớp Python có tên `Animal` với phương thức `sound()` in ra "Animal sound". Sau đó, tạo một lớp `Dog` kế thừa từ `Animal` và gọi phương thức `sound()` từ một đối tượng của lớp `Dog`.

**Gợi ý:**  
Lớp con kế thừa phương thức từ lớp cha mà không cần định nghĩa lại nếu không có thay đổi gì.

**Điều kiện:**

- Lớp `Dog` phải kế thừa từ lớp `Animal`.
- Phương thức `sound()` của lớp `Animal` sẽ được sử dụng bởi lớp `Dog` mà không cần ghi đè.

**Input mẫu:**

```python
dog = Dog()
dog.sound()
```

**Output mẫu:**

```
Animal sound
```

**Giải pháp:**

```python
class Animal:
    def sound(self):
        # Phương thức sound() của lớp Animal
        print("Animal sound")

class Dog(Animal):
    pass  # Lớp Dog kế thừa từ Animal mà không cần thêm phương thức mới

# Tạo đối tượng Dog và gọi phương thức sound()
dog = Dog()
dog.sound()  # Kết quả: Animal sound
```

**Giải thích:**  
Lớp `Dog` kế thừa từ lớp `Animal` và do đó có thể sử dụng phương thức `sound()` của lớp cha mà không cần phải định nghĩa lại trong lớp con.

---

### Bài Tập 2: Tạo lớp con từ lớp cha

**Yêu cầu:**  
Viết một lớp Python `Person` với thuộc tính `name` và phương thức `introduce()` in ra "Hello, my name is [name]". Tạo một lớp `Student` kế thừa từ `Person` và thêm thuộc tính `student_id`. Gọi phương thức `introduce()` từ một đối tượng của lớp `Student`.

**Gợi ý:**  
Sử dụng `super()` để kế thừa thuộc tính và phương thức từ lớp cha.

**Điều kiện:**

- Lớp `Student` kế thừa từ `Person` và sử dụng `super()` để khởi tạo thuộc tính `name`.
- Phương thức `introduce()` từ lớp cha `Person` phải được kế thừa bởi lớp `Student`.

**Input mẫu:**

```python
student = Student("An", "S12345")
student.introduce()
```

**Output mẫu:**

```
Hello, my name is An
```

**Giải pháp:**

```python
class Person:
    def __init__(self, name):
        # Phương thức khởi tạo của lớp Person
        self.name = name

    def introduce(self):
        # Phương thức introduce() in ra câu giới thiệu
        print(f"Hello, my name is {self.name}")

class Student(Person):
    def __init__(self, name, student_id):
        # Gọi phương thức khởi tạo của lớp cha Person
        super().__init__(name)
        self.student_id = student_id

# Tạo đối tượng Student và gọi phương thức introduce()
student = Student("An", "S12345")
student.introduce()  # Kết quả: Hello, my name is An
```

**Giải thích:**  
Lớp `Student` kế thừa từ `Person` và sử dụng `super().__init__(name)` để khởi tạo thuộc tính `name` từ lớp cha. Lớp `Student` cũng có thể gọi phương thức `introduce()` từ lớp cha.

---

### Bài Tập 3: Ghi đè phương thức

**Yêu cầu:**  
Viết một lớp Python `Vehicle` với phương thức `move()` in ra "The vehicle is moving". Tạo một lớp `Car` kế thừa từ `Vehicle` và ghi đè phương thức `move()` để in ra "The car is driving". Tạo một đối tượng của lớp `Car` và gọi phương thức `move()`.

**Gợi ý:**  
Ghi đè phương thức cho phép lớp con cung cấp một phiên bản cụ thể của phương thức lớp cha.

**Điều kiện:**

- Lớp `Car` phải kế thừa từ lớp `Vehicle`.
- Phương thức `move()` của lớp `Car` phải ghi đè phương thức `move()` của lớp `Vehicle`.

**Input mẫu:**

```python
car = Car()
car.move()
```

**Output mẫu:**

```
The car is driving
```

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

# Tạo đối tượng Car và gọi phương thức move()
car = Car()
car.move()  # Kết quả: The car is driving
```

**Giải thích:**  
Lớp `Car` ghi đè phương thức `move()` của lớp `Vehicle`. Khi phương thức `move()` được gọi từ đối tượng `Car`, phiên bản ghi đè sẽ được sử dụng.

---

### Bài Tập 4: Sử dụng kế thừa để mở rộng chức năng

**Yêu cầu:**  
Viết một lớp Python `BankAccount` với phương thức `deposit(amount)` và `withdraw(amount)`. Tạo một lớp `SavingsAccount` kế thừa từ `BankAccount` và thêm thuộc tính `interest_rate`. Viết phương thức `add_interest()` để tăng số dư tài khoản theo lãi suất.

**Gợi ý:**  
Kế thừa cho phép mở rộng chức năng của lớp cha mà không làm thay đổi lớp cha.

**Điều kiện:**

- Lớp `SavingsAccount` phải kế thừa từ `BankAccount`.
- Phương thức `add_interest()` phải tính và thêm lãi suất vào số dư tài khoản.

**Input mẫu:**

```python
savings = SavingsAccount(1000, 0.05)
savings.add_interest()
print(f"Số dư sau khi thêm lãi: {savings.balance}")
```

**Output mẫu:**

```
Số dư sau khi thêm lãi: 1050
```

**Giải pháp:**

```python
class BankAccount:
    def __init__(self, initial_balance=0):
        # Khởi tạo thuộc tính balance
        self.balance = initial_balance

    def deposit(self, amount):
        # Thêm tiền vào tài khoản
        self.balance += amount

    def withdraw(self, amount):
        # Rút tiền từ tài khoản nếu đủ số dư
        if amount > self.balance:
            print("Số dư không đủ!")
        else:
            self.balance -= amount

class SavingsAccount(BankAccount):
    def __init__(self, initial_balance=0, interest_rate=0.02):
        # Gọi phương thức khởi tạo của lớp cha và khởi tạo thuộc tính interest_rate
        super().__init__(initial_balance)
        self.interest_rate = interest_rate

    def add_interest(self):
        # Tính lãi suất và thêm vào số dư tài khoản
        interest = self.balance * self.interest_rate
        self.deposit(interest)

# Tạo đối tượng SavingsAccount và thêm lãi suất
savings = SavingsAccount(1000, 0.05)
savings.add_interest()
print(f"Số dư sau khi thêm lãi: {savings.balance}")  # Kết quả: 1050
```

**Giải thích:**  
Lớp `SavingsAccount` kế thừa từ `BankAccount` và thêm thuộc tính `interest_rate`. Phương thức `add_interest()` tính lãi suất dựa trên số dư hiện tại và thêm số tiền lãi vào tài khoản.

---

### Bài Tập 5: Kế thừa đa cấp

**Yêu cầu:**  
Viết một lớp Python `Animal` với phương thức `sound()`. Tạo một lớp `Mammal` kế thừa từ `Animal` và thêm phương thức `give_birth()`. Sau đó, tạo lớp `Cat` kế thừa từ `Mammal` và ghi đè phương thức `sound()` để in ra "Meow". Tạo đối tượng của lớp `Cat` và gọi các phương thức `sound()` và `give_birth()`.

**Gợi ý:**  
Kế thừa đa cấp cho phép lớp con kế thừa từ một lớp con khác, tiếp tục mở rộng chức năng.

**Điều kiện:**

- Lớp `Mammal` kế thừa từ `Animal`.
- Lớp `Cat` kế thừa từ `Mammal` và ghi đè phương thức `sound()`.

**Input mẫu:**

```python
cat = Cat()
cat.sound()
cat.give_birth()
```

**Output mẫu:**

```
Meow
Mammal gives birth to live young
```

**Giải pháp:**

```python
class Animal:
    def sound(self):
        # Phương thức sound() của lớp Animal
        print("Animal sound")

class Mammal(Animal):
    def give_birth(self):
        # Phương thức give_birth() của lớp Mammal
        print("Mammal gives birth to live young")

class Cat(Mammal):
    def sound(self):
        # G

hi đè phương thức sound() trong lớp Cat
        print("Meow")

# Tạo đối tượng Cat và gọi các phương thức sound() và give_birth()
cat = Cat()
cat.sound()        # Kết quả: Meow
cat.give_birth()   # Kết quả: Mammal gives birth to live young
```

**Giải thích:**  
Lớp `Cat` kế thừa từ `Mammal`, và `Mammal` kế thừa từ `Animal`. Phương thức `sound()` được ghi đè trong lớp `Cat`, trong khi phương thức `give_birth()` được thừa hưởng từ lớp `Mammal`.

---

### Bài Tập 6: Sử dụng `super()` để mở rộng phương thức

**Yêu cầu:**  
Viết một lớp Python `Employee` với phương thức `work()` in ra "Working". Tạo một lớp `Manager` kế thừa từ `Employee` và ghi đè phương thức `work()` để in ra "Managing work" và sau đó gọi phương thức `work()` của lớp cha.

**Gợi ý:**  
Sử dụng `super()` để gọi phương thức của lớp cha trong quá trình ghi đè.

**Điều kiện:**

- Lớp `Manager` phải kế thừa từ `Employee`.
- Phương thức `work()` của lớp `Manager` phải gọi lại phương thức `work()` của lớp cha thông qua `super()`.

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
        # Phương thức work() của lớp Employee
        print("Working")

class Manager(Employee):
    def work(self):
        # Ghi đè phương thức work() và mở rộng chức năng bằng cách gọi phương thức lớp cha
        print("Managing work")
        super().work()

# Tạo đối tượng Manager và gọi phương thức work()
manager = Manager()
manager.work()  # Kết quả: Managing work
                #          Working
```

**Giải thích:**  
Lớp `Manager` ghi đè phương thức `work()` và sử dụng `super().work()` để gọi phương thức `work()` của lớp cha sau khi đã thực hiện hành động mới.

---

### Bài Tập 7: Kiểm tra kiểu đối tượng và kế thừa

**Yêu cầu:**  
Viết một lớp `Shape` với thuộc tính `name`. Tạo hai lớp con `Rectangle` và `Circle` kế thừa từ `Shape`. Thêm phương thức `calculate_area()` trong mỗi lớp con để tính diện tích hình chữ nhật và hình tròn. Kiểm tra kiểu đối tượng và quan hệ kế thừa bằng cách sử dụng `isinstance()` và `issubclass()`.

**Gợi ý:**  
`isinstance()` kiểm tra xem đối tượng có phải là một thể hiện của một lớp cụ thể hay không, và `issubclass()` kiểm tra xem một lớp có kế thừa từ một lớp khác hay không.

**Điều kiện:**

- Lớp `Rectangle` và `Circle` phải kế thừa từ `Shape`.
- Phương thức `calculate_area()` phải được định nghĩa riêng trong mỗi lớp con.

**Input mẫu:**

```python
rect = Rectangle(3, 4)
circ = Circle(5)
print(isinstance(rect, Shape))
print(isinstance(circ, Rectangle))
print(issubclass(Circle, Shape))
print(f"Diện tích hình chữ nhật: {rect.calculate_area()}")
print(f"Diện tích hình tròn: {circ.calculate_area()}")
```

**Output mẫu:**

```
True
False
True
Diện tích hình chữ nhật: 12
Diện tích hình tròn: 78.53975
```

**Giải pháp:**

```python
class Shape:
    def __init__(self, name):
        # Khởi tạo thuộc tính name
        self.name = name

class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__("Rectangle")
        self.width = width
        self.height = height

    def calculate_area(self):
        # Tính diện tích hình chữ nhật
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        super().__init__("Circle")
        self.radius = radius

    def calculate_area(self):
        # Tính diện tích hình tròn
        return 3.14159 * (self.radius ** 2)

# Tạo đối tượng Rectangle và Circle
rect = Rectangle(3, 4)
circ = Circle(5)

# Kiểm tra kiểu đối tượng và quan hệ kế thừa
print(isinstance(rect, Shape))  # Kết quả: True
print(isinstance(circ, Rectangle))  # Kết quả: False
print(issubclass(Circle, Shape))  # Kết quả: True

# Tính diện tích của các đối tượng
print(f"Diện tích hình chữ nhật: {rect.calculate_area()}")  # Kết quả: 12
print(f"Diện tích hình tròn: {circ.calculate_area()}")      # Kết quả: 78.53975
```

**Giải thích:**  
Phương thức `isinstance()` kiểm tra xem đối tượng có phải là một thể hiện của lớp hay không, và `issubclass()` kiểm tra quan hệ kế thừa giữa hai lớp. Lớp `Rectangle` và `Circle` kế thừa từ `Shape` và có phương thức `calculate_area()` để tính diện tích tương ứng.

---

### Bài Tập 8: Đa hình và ghi đè phương thức

**Yêu cầu:**  
Viết một lớp `Bird` với phương thức `fly()` in ra "Bird is flying". Tạo hai lớp con `Penguin` và `Eagle` kế thừa từ `Bird`. Ghi đè phương thức `fly()` trong lớp `Penguin` để in ra "Penguin can't fly". Tạo danh sách các đối tượng `Bird` và lặp qua danh sách để gọi phương thức `fly()` cho từng đối tượng.

**Gợi ý:**  
Đa hình cho phép sử dụng cùng một phương thức nhưng có hành vi khác nhau dựa trên lớp con.

**Điều kiện:**

- Lớp `Penguin` và `Eagle` phải kế thừa từ `Bird`.
- Phương thức `fly()` phải được ghi đè trong lớp `Penguin`.

**Input mẫu:**

```python
birds = [Bird(), Penguin(), Eagle()]
for bird in birds:
    bird.fly()
```

**Output mẫu:**

```
Bird is flying
Penguin can't fly
Bird is flying
```

**Giải pháp:**

```python
class Bird:
    def fly(self):
        # Phương thức fly() của lớp Bird
        print("Bird is flying")

class Penguin(Bird):
    def fly(self):
        # Ghi đè phương thức fly() trong lớp Penguin
        print("Penguin can't fly")

class Eagle(Bird):
    pass  # Eagle sử dụng phương thức fly() của lớp Bird

# Tạo danh sách các đối tượng Bird
birds = [Bird(), Penguin(), Eagle()]

# Lặp qua danh sách và gọi phương thức fly() cho từng đối tượng
for bird in birds:
    bird.fly()
```

**Giải thích:**  
Trong ví dụ này, lớp `Penguin` ghi đè phương thức `fly()` để cung cấp hành vi cụ thể, trong khi lớp `Eagle` sử dụng phương thức `fly()` của lớp cha `Bird`. Đa hình cho phép gọi phương thức ghi đè dựa trên kiểu đối tượng thực sự.
