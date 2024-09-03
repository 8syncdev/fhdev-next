# Bài tập chương 11: Kế thừa

### Bài Tập 1: Khái niệm kế thừa cơ bản

**Yêu cầu:**  
Viết một lớp Python có tên `Animal` với phương thức `sound()` in ra "Animal sound". Sau đó, tạo một lớp `Dog` kế thừa từ `Animal` và gọi phương thức `sound()` từ một đối tượng của lớp `Dog`.

**Gợi ý:**  
Sử dụng cú pháp kế thừa trong Python bằng cách đặt tên lớp cha trong ngoặc đơn khi định nghĩa lớp con.

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

---

### Bài Tập 2: Tạo lớp con từ lớp cha

**Yêu cầu:**  
Viết một lớp Python `Person` với thuộc tính `name` và phương thức `introduce()` in ra "Hello, my name is [name]". Tạo một lớp `Student` kế thừa từ `Person` và thêm thuộc tính `student_id`. Gọi phương thức `introduce()` từ một đối tượng của lớp `Student`.

**Gợi ý:**  
Sử dụng phương thức khởi tạo `__init__()` trong lớp `Student` và gọi `super().__init__(name)` để khởi tạo thuộc tính từ lớp cha.

**Điều kiện:**

- Lớp `Student` phải kế thừa từ lớp `Person`.
- Phương thức `introduce()` phải in ra đúng thông tin của đối tượng `Student`.

**Input mẫu:**

```python
student = Student("An", "S12345")
student.introduce()
```

**Output mẫu:**

```
Hello, my name is An
```

---

### Bài Tập 3: Ghi đè phương thức

**Yêu cầu:**  
Viết một lớp Python `Vehicle` với phương thức `move()` in ra "The vehicle is moving". Tạo một lớp `Car` kế thừa từ `Vehicle` và ghi đè phương thức `move()` để in ra "The car is driving". Tạo một đối tượng của lớp `Car` và gọi phương thức `move()`.

**Gợi ý:**  
Sử dụng cú pháp phương thức ghi đè trong lớp con bằng cách định nghĩa lại phương thức với cùng tên như trong lớp cha.

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

---

### Bài Tập 4: Sử dụng kế thừa để mở rộng chức năng

**Yêu cầu:**  
Viết một lớp Python `BankAccount` với phương thức `deposit(amount)` và `withdraw(amount)`. Tạo một lớp `SavingsAccount` kế thừa từ `BankAccount` và thêm thuộc tính `interest_rate`. Viết phương thức `add_interest()` để tăng số dư tài khoản theo lãi suất.

**Gợi ý:**  
Kế thừa các phương thức `deposit()` và `withdraw()` từ lớp cha và thêm phương thức mới để tính lãi suất.

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

---

### Bài Tập 5: Kế thừa đa cấp

**Yêu cầu:**  
Viết một lớp Python `Animal` với phương thức `sound()`. Tạo một lớp `Mammal` kế thừa từ `Animal` và thêm phương thức `give_birth()`. Sau đó, tạo lớp `Cat` kế thừa từ `Mammal` và ghi đè phương thức `sound()` để in ra "Meow". Tạo đối tượng của lớp `Cat` và gọi các phương thức `sound()` và `give_birth()`.

**Gợi ý:**  
Kế thừa đa cấp cho phép một lớp kế thừa từ một lớp đã kế thừa trước đó.

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

---

### Bài Tập 6: Sử dụng `super()` để mở rộng phương thức

**Yêu cầu:**  
Viết một lớp Python `Employee` với phương thức `work()` in ra "Working". Tạo một lớp `Manager` kế thừa từ `Employee` và ghi đè phương thức `work()` để in ra "Managing work" và sau đó gọi phương thức `work()` của lớp cha.

**Gợi ý:**  
Sử dụng hàm `super()` để gọi phương thức từ lớp cha sau khi đã thực hiện các hành động bổ sung trong lớp con.

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

---

### Bài Tập 7: Kiểm tra kiểu đối tượng và kế thừa

**Yêu cầu:**  
Viết một lớp `Shape` với thuộc tính `name`. Tạo hai lớp con `Rectangle` và `Circle` kế thừa từ `Shape`. Thêm phương thức `calculate_area()` trong mỗi lớp con để tính diện tích hình chữ nhật và hình tròn. Kiểm tra kiểu đối tượng và quan hệ kế thừa bằng cách sử dụng `isinstance()` và `issubclass()`.

**Gợi ý:**  
`isinstance()` kiểm tra xem đối tượng có phải là một thể hiện của lớp hoặc lớp con không, còn `issubclass()` kiểm tra quan hệ kế thừa giữa hai lớp.

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

---

### Bài Tập 8: Đa hình và ghi đè phương thức

**Yêu cầu:**  
Viết một lớp `Bird` với phương thức `fly()` in ra "Bird is flying". Tạo hai lớp con `Penguin` và `Eagle` kế thừa từ `Bird`. Ghi đè phương thức `fly()` trong lớp `Penguin` để in ra "Penguin can't fly". Tạo danh sách các đối tượng `Bird` và lặp qua danh sách để gọi phương thức `fly()` cho từng đối tượng.

**Gợi ý:**  
Sử dụng đa hình để gọi các phương thức ghi đè dựa trên kiểu đối tượng thực sự.

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
