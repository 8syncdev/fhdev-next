# Bài Tập Chương 9: Giới Thiệu Về Lập Trình Hướng Đối Tượng

### Bài Tập 1: Tạo lớp và đối tượng cơ bản

**Yêu cầu:**  
Viết một lớp Python có tên `Person` với thuộc tính `name`. Tạo một đối tượng của lớp `Person` và gán giá trị cho thuộc tính `name`, sau đó in ra tên của người đó.

**Gợi ý:**  
Sử dụng cú pháp `self` để khai báo và truy cập thuộc tính của đối tượng.

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

---

### Bài Tập 2: Phương thức trong lớp

**Yêu cầu:**  
Viết một lớp Python có tên `Dog` với các thuộc tính `name` và `age`. Thêm một phương thức `bark()` để in ra "Woof!". Tạo một đối tượng của lớp `Dog`, gán giá trị cho các thuộc tính, và gọi phương thức `bark()`.

**Gợi ý:**  
Phương thức trong lớp là các hàm được định nghĩa bên trong lớp và có tham số đầu tiên là `self`.

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

---

### Bài Tập 3: Phương thức khởi tạo (`__init__`)

**Yêu cầu:**  
Viết một lớp Python có tên `Car` với các thuộc tính `make`, `model`, và `year`. Sử dụng phương thức `__init__` để khởi tạo các thuộc tính này khi tạo đối tượng. Tạo một đối tượng của lớp `Car` và in ra thông tin của chiếc xe.

**Gợi ý:**  
Phương thức `__init__` là phương thức khởi tạo được gọi tự động khi một đối tượng mới được tạo ra.

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

---

### Bài Tập 4: Thêm phương thức vào lớp

**Yêu cầu:**  
Viết một lớp Python có tên `Rectangle` với các thuộc tính `width` và `height`. Thêm các phương thức `area()` để tính diện tích và `perimeter()` để tính chu vi của hình chữ nhật. Tạo một đối tượng của lớp `Rectangle` và gọi các phương thức này.

**Gợi ý:**  
Phương thức trong lớp có thể trả về giá trị, giống như hàm thông thường.

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

---

### Bài Tập 5: Thuộc tính private và phương thức getter/setter

**Yêu cầu:**  
Viết một lớp Python có tên `BankAccount` với thuộc tính private `_balance`. Thêm phương thức `deposit(amount)` để thêm tiền vào tài khoản, `withdraw(amount)` để rút tiền từ tài khoản, và `get_balance()` để trả về số dư hiện tại. Tạo một đối tượng của lớp `BankAccount` và thực hiện các giao dịch.

**Gợi ý:**  
Thuộc tính private trong Python bắt đầu với dấu gạch dưới `_`. Sử dụng phương thức getter/setter để truy cập và thay đổi giá trị của thuộc tính này.

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

---

### Bài Tập 6: Kế thừa đơn giản

**Yêu cầu:**  
Viết một lớp cơ bản `Animal` với phương thức `sound()`. Tạo hai lớp con `Dog` và `Cat` kế thừa từ `Animal`, và ghi đè phương thức `sound()` để in ra tiếng kêu của từng loại động vật. Tạo các đối tượng của `Dog` và `Cat` và gọi phương thức `sound()`.

**Gợi ý:**  
Sử dụng cú pháp kế thừa trong Python bằng cách đặt tên lớp cha trong ngoặc đơn khi định nghĩa lớp con.

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

---

### Bài Tập 7: Ghi đè phương thức

**Yêu cầu:**  
Viết một lớp `Shape` với phương thức `area()` trả về giá trị 0. Tạo các lớp con `Rectangle` và `Circle` kế thừa từ `Shape`. Ghi đè phương thức `area()` để tính diện tích của hình chữ nhật và hình tròn.

**Gợi ý:**  
Ghi đè phương thức là việc định nghĩa lại phương thức của lớp cha trong lớp con để thực hiện chức năng khác.

**Điều kiện:**

- Phương thức `area()` trong các lớp con phải được ghi đè để trả về giá trị diện tích cụ thể.

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

---

### Bài Tập 8: Tạo đối tượng từ lớp con

**Yêu cầu:**  
Viết một lớp `Person` với thuộc tính `name` và `age`. Tạo lớp con `Student` kế thừa từ `Person` và thêm thuộc tính `student_id`. Tạo đối tượng của lớp `Student` và in ra thông tin của sinh viên đó.

**Gợi ý:**  
Lớp con có thể thừa hưởng các thuộc tính và phương thức của lớp cha, và cũng có thể thêm các thuộc tính và phương thức mới.

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

---

### Bài Tập 9: Phương thức tĩnh (`@staticmethod`)

**Yêu cầu:**  
Viết một lớp `MathOperations` với phương thức tĩnh `add(x, y)` để tính tổng của hai số. Gọi phương thức này mà không cần tạo đối tượng của lớp.

**Gợi ý:**  
Phương thức tĩnh trong Python không cần tham số `self` và có thể được gọi trực tiếp từ lớp.

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

---

### Bài Tập 10: Phương thức lớp (`@classmethod`)

**Yêu cầu:**  
Viết một lớp `Person` với thuộc tính `population` để đếm số lượng đối tượng được tạo ra. Thêm phương thức lớp `get_population()` để trả về giá trị của `population`. Tạo một số đối tượng `Person` và kiểm tra giá trị của `population`.

**Gợi ý:**  
Phương thức lớp sử dụng decorator `@classmethod` và có tham số đầu tiên là `cls`.

**Điều kiện:**

- Thuộc tính `population` phải là thuộc tính lớp.
- Phương thức

`get_population()` phải là phương thức lớp (`@classmethod`).

**Input mẫu:**

```python
person1 = Person("An")
person2 = Person("Binh")
```

**Output mẫu:**

```
Số lượng đối tượng: 2
```

---

### Bài Tập 11: Đa hình với kế thừa

**Yêu cầu:**  
Viết một lớp `Vehicle` với phương thức `start_engine()`. Tạo các lớp con `Car` và `Motorcycle` kế thừa từ `Vehicle`, và ghi đè phương thức `start_engine()` để in ra hành vi cụ thể của từng loại phương tiện. Tạo danh sách các đối tượng `Vehicle` và gọi phương thức `start_engine()` cho từng đối tượng.

**Gợi ý:**  
Đa hình cho phép các đối tượng thuộc các lớp con khác nhau có thể được xử lý thông qua cùng một interface lớp cha.

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

---

### Bài Tập 12: Sử dụng `super()` để mở rộng phương thức

**Yêu cầu:**  
Viết một lớp `Employee` với phương thức `work()` in ra "Working". Tạo lớp `Manager` kế thừa từ `Employee` và ghi đè phương thức `work()` để in ra "Managing work" và sau đó gọi phương thức `work()` của lớp cha. Tạo đối tượng của lớp `Manager` và gọi phương thức `work()`.

**Gợi ý:**  
Sử dụng `super()` để gọi phương thức của lớp cha từ lớp con.

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
