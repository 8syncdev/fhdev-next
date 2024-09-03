# Đáp Án Chương 10: Thuộc Tính Và Phương Thức

### Bài Tập 1: Khai báo thuộc tính và phương thức cơ bản

**Yêu cầu:**  
Viết một lớp Python có tên `Person` với hai thuộc tính `name` và `age`. Thêm một phương thức `greet()` để in ra câu chào dạng "Xin chào, tôi là [name], năm nay tôi [age] tuổi."

**Gợi ý:**  
Sử dụng phương thức `__init__` để khởi tạo các thuộc tính khi tạo đối tượng. Sử dụng phương thức `greet()` để in ra câu chào.

**Điều kiện:**

- Thuộc tính `name` và `age` phải được khởi tạo trong phương thức `__init__`.
- Phương thức `greet()` phải sử dụng các thuộc tính `name` và `age`.

**Input mẫu:**

```python
person1 = Person("An", 30)
person1.greet()
```

**Output mẫu:**

```
Xin chào, tôi là An, năm nay tôi 30 tuổi.
```

**Giải pháp:**

```python
class Person:
    def __init__(self, name, age):
        # Phương thức khởi tạo __init__ để gán giá trị ban đầu cho các thuộc tính
        self.name = name
        self.age = age

    def greet(self):
        # Phương thức greet() sử dụng các thuộc tính name và age để in ra câu chào
        print(f"Xin chào, tôi là {self.name}, năm nay tôi {self.age} tuổi.")

# Tạo một đối tượng Person và gọi phương thức greet()
person1 = Person("An", 30)
person1.greet()
```

---

### Bài Tập 2: Sử dụng phương thức khởi tạo `__init__`

**Yêu cầu:**  
Viết một lớp Python có tên `Car` với các thuộc tính `make`, `model`, và `year`. Sử dụng phương thức khởi tạo `__init__` để gán giá trị cho các thuộc tính khi đối tượng được tạo ra. Thêm một phương thức `get_info()` để in ra thông tin chi tiết về chiếc xe.

**Gợi ý:**  
Phương thức `__init__` được sử dụng để khởi tạo các thuộc tính ngay khi tạo đối tượng. Phương thức `get_info()` in ra thông tin chi tiết về chiếc xe.

**Điều kiện:**

- Các thuộc tính `make`, `model`, và `year` phải được khởi tạo trong phương thức `__init__`.
- Phương thức `get_info()` phải sử dụng các thuộc tính này để in ra thông tin chi tiết.

**Input mẫu:**

```python
car1 = Car("Toyota", "Camry", 2020)
car1.get_info()
```

**Output mẫu:**

```
Xe Toyota Camry sản xuất năm 2020
```

**Giải pháp:**

```python
class Car:
    def __init__(self, make, model, year):
        # Phương thức khởi tạo __init__ để khởi tạo các thuộc tính make, model, year
        self.make = make
        self.model = model
        self.year = year

    def get_info(self):
        # Phương thức get_info() để in ra thông tin chi tiết về chiếc xe
        print(f"Xe {self.make} {self.model} sản xuất năm {self.year}")

# Tạo một đối tượng Car và gọi phương thức get_info()
car1 = Car("Toyota", "Camry", 2020)
car1.get_info()
```

---

### Bài Tập 3: Thêm phương thức tùy chỉnh

**Yêu cầu:**  
Viết một lớp Python có tên `Rectangle` với các thuộc tính `width` và `height`. Sử dụng phương thức `__init__` để khởi tạo các thuộc tính. Thêm hai phương thức `area()` và `perimeter()` để tính diện tích và chu vi của hình chữ nhật.

**Gợi ý:**  
Phương thức `area()` và `perimeter()` được định nghĩa để tính toán diện tích và chu vi của hình chữ nhật.

**Điều kiện:**

- Các thuộc tính `width` và `height` phải được khởi tạo trong phương thức `__init__`.
- Phương thức `area()` trả về diện tích, `perimeter()` trả về chu vi của hình chữ nhật.

**Input mẫu:**

```python
rect1 = Rectangle(5, 10)
print(f"Diện tích: {rect1.area()}")
print(f"Chu vi: {rect1.perimeter()}")
```

**Output mẫu:**

```
Diện tích: 50
Chu vi: 30
```

**Giải pháp:**

```python
class Rectangle:
    def __init__(self, width, height):
        # Khởi tạo các thuộc tính width và height
        self.width = width
        self.height = height

    def area(self):
        # Tính diện tích hình chữ nhật
        return self.width * self.height

    def perimeter(self):
        # Tính chu vi hình chữ nhật
        return 2 * (self.width + self.height)

# Tạo đối tượng Rectangle và sử dụng các phương thức area và perimeter
rect1 = Rectangle(5, 10)
print(f"Diện tích: {rect1.area()}")      # Kết quả: 50
print(f"Chu vi: {rect1.perimeter()}")    # Kết quả: 30
```

---

### Bài Tập 4: Tính đóng gói với thuộc tính private

**Yêu cầu:**  
Viết một lớp Python có tên `BankAccount` với thuộc tính private `_balance`. Thêm các phương thức `deposit(amount)` và `withdraw(amount)` để tăng và giảm số dư tài khoản. Thêm một phương thức `get_balance()` để trả về số dư hiện tại.

**Gợi ý:**  
Thuộc tính private (`_balance`) chỉ có thể được truy cập và thay đổi thông qua các phương thức của lớp.

**Điều kiện:**

- Thuộc tính `_balance` phải là private.
- Phương thức `deposit(amount)` tăng giá trị `_balance`, `withdraw(amount)` giảm giá trị `_balance`.
- Phương thức `get_balance()` trả về giá trị hiện tại của `_balance`.

**Input mẫu:**

```python
account = BankAccount(100)
account.deposit(50)
account.withdraw(30)
print(f"Số dư hiện tại: {account.get_balance()}")
```

**Output mẫu:**

```
Số dư hiện tại: 120
```

**Giải pháp:**

```python
class BankAccount:
    def __init__(self, initial_balance=0):
        # Khởi tạo thuộc tính private _balance với giá trị mặc định là 0
        self._balance = initial_balance

    def deposit(self, amount):
        # Phương thức deposit để thêm tiền vào tài khoản
        self._balance += amount

    def withdraw(self, amount):
        # Phương thức withdraw để rút tiền từ tài khoản
        if amount > self._balance:
            print("Số dư không đủ!")
        else:
            self._balance -= amount

    def get_balance(self):
        # Phương thức get_balance để lấy số dư hiện tại
        return self._balance

# Tạo đối tượng BankAccount và thực hiện các giao dịch
account = BankAccount(100)
account.deposit(50)
account.withdraw(30)
print(f"Số dư hiện tại: {account.get_balance()}")  # Kết quả: 120
```

---

### Bài Tập 5: Kiểm tra và giới hạn giá trị của thuộc tính

**Yêu cầu:**  
Viết một lớp Python có tên `Temperature` với thuộc tính private `_celsius`. Thêm phương thức `set_temperature(temp)` để gán giá trị cho `_celsius`. Nếu giá trị `temp` nhỏ hơn -273.15, in ra thông báo lỗi "Nhiệt độ không thể thấp hơn -273.15°C". Thêm phương thức `get_temperature()` để trả về giá trị hiện tại của `_celsius`.

**Gợi ý:**  
Sử dụng điều kiện để kiểm tra và giới hạn giá trị của thuộc tính `_celsius`.

**Điều kiện:**

- Thuộc tính `_celsius` phải là private.
- Phương thức `set_temperature(temp)` kiểm tra và chỉ gán giá trị nếu `temp` >= -273.15.
- Phương thức `get_temperature()` trả về giá trị hiện tại của `_celsius`.

**Input mẫu:**

```python
temp = Temperature()
temp.set_temperature(-300)
temp.set_temperature(25)
print(f"Nhiệt độ hiện tại: {temp.get_temperature()}°C")
```

**Output mẫu:**

```
Nhiệt độ không thể thấp hơn -273.15°C
Nhiệt độ hiện tại: 25°C
```

**Giải pháp:**

```python
class Temperature:
    def __init__(self):
        # Khởi tạo thuộc tính private _celsius
        self._celsius = 0

    def set_temperature(self, temp):
        # Kiểm tra nếu nhiệt độ nhỏ hơn -273.15
        if temp < -273.15:
            print("Nhiệt độ không thể thấp hơn -273.15°C")
        else:
            self._c

elsius = temp

    def get_temperature(self):
        # Trả về giá trị hiện tại của _celsius
        return self._celsius

# Tạo đối tượng Temperature và thiết lập nhiệt độ
temp = Temperature()
temp.set_temperature(-300)  # Sẽ in ra thông báo lỗi
temp.set_temperature(25)
print(f"Nhiệt độ hiện tại: {temp.get_temperature()}°C")  # Kết quả: 25°C
```

---

### Bài Tập 6: Tính đóng gói với phương thức private

**Yêu cầu:**  
Viết một lớp Python có tên `Counter` với thuộc tính private `_count` và phương thức private `_increment()`. Thêm phương thức `increase()` để gọi `_increment()` và in ra giá trị hiện tại của `_count`. Thêm một phương thức `reset()` để đặt lại giá trị của `_count` về 0.

**Gợi ý:**  
Sử dụng phương thức private `_increment()` để tăng giá trị `_count` chỉ trong nội bộ lớp.

**Điều kiện:**

- Thuộc tính `_count` và phương thức `_increment()` phải là private.
- Phương thức `increase()` gọi `_increment()` và in ra giá trị `_count`.
- Phương thức `reset()` đặt lại giá trị `_count` về 0.

**Input mẫu:**

```python
counter = Counter()
counter.increase()
counter.increase()
counter.reset()
```

**Output mẫu:**

```
Giá trị hiện tại của _count: 1
Giá trị hiện tại của _count: 2
Giá trị _count đã được đặt lại về 0
```

**Giải pháp:**

```python
class Counter:
    def __init__(self):
        # Khởi tạo thuộc tính private _count
        self._count = 0

    def __increment(self):
        # Phương thức private __increment để tăng giá trị _count
        self._count += 1

    def increase(self):
        # Phương thức increase để gọi __increment và in ra giá trị hiện tại của _count
        self.__increment()
        print(f"Giá trị hiện tại của _count: {self._count}")

    def reset(self):
        # Phương thức reset để đặt lại giá trị của _count về 0
        self._count = 0
        print("Giá trị _count đã được đặt lại về 0")

# Tạo đối tượng Counter và thử nghiệm các phương thức
counter = Counter()
counter.increase()  # Kết quả: Giá trị hiện tại của _count: 1
counter.increase()  # Kết quả: Giá trị hiện tại của _count: 2
counter.reset()     # Kết quả: Giá trị _count đã được đặt lại về 0
```

---

### Bài Tập 7: Sử dụng thuộc tính getter và setter

**Yêu cầu:**  
Viết một lớp Python có tên `Circle` với thuộc tính private `_radius`. Sử dụng thuộc tính getter `get_radius()` và setter `set_radius(radius)` để truy cập và thay đổi giá trị của `_radius`. Thêm phương thức `area()` để tính diện tích hình tròn.

**Gợi ý:**  
Sử dụng getter và setter để bảo vệ và kiểm soát việc truy cập thuộc tính `_radius`.

**Điều kiện:**

- Thuộc tính `_radius` phải là private.
- Getter `get_radius()` trả về giá trị `_radius`.
- Setter `set_radius(radius)` kiểm tra giá trị và gán cho `_radius`.
- Phương thức `area()` trả về diện tích hình tròn dựa trên `_radius`.

**Input mẫu:**

```python
circle = Circle(5)
circle.set_radius(-10)
circle.set_radius(10)
print(f"Bán kính mới: {circle.get_radius()}")
print(f"Diện tích mới: {circle.area()}")
```

**Output mẫu:**

```
Bán kính không thể âm!
Bán kính mới: 10
Diện tích mới: 314.159
```

**Giải pháp:**

```python
class Circle:
    def __init__(self, radius=1.0):
        # Khởi tạo thuộc tính private _radius
        self._radius = radius

    def set_radius(self, radius):
        # Phương thức setter để thay đổi giá trị _radius
        if radius < 0:
            print("Bán kính không thể âm!")
        else:
            self._radius = radius

    def get_radius(self):
        # Phương thức getter để lấy giá trị _radius
        return self._radius

    def area(self):
        # Phương thức tính diện tích hình tròn
        return 3.14159 * (self._radius ** 2)

# Tạo đối tượng Circle và thử nghiệm các phương thức
circle = Circle(5)
print(f"Bán kính: {circle.get_radius()}")  # Kết quả: 5
print(f"Diện tích: {circle.area()}")       # Kết quả: 78.53975

circle.set_radius(-10)                     # Sẽ in ra thông báo lỗi
circle.set_radius(10)
print(f"Bán kính mới: {circle.get_radius()}")  # Kết quả: 10
print(f"Diện tích mới: {circle.area()}")       # Kết quả: 314.159
```

---

### Bài Tập 8: Tính kế thừa và sử dụng phương thức khởi tạo

**Yêu cầu:**  
Viết hai lớp Python `Employee` và `Manager`, trong đó `Manager` kế thừa từ `Employee`. Lớp `Employee` có các thuộc tính `name` và `salary`. Lớp `Manager` có thêm thuộc tính `department`. Sử dụng phương thức khởi tạo `__init__` của `Employee` trong `Manager` để khởi tạo các thuộc tính kế thừa.

**Gợi ý:**  
Sử dụng `super()` để gọi phương thức khởi tạo của lớp cha trong lớp con.

**Điều kiện:**

- Lớp `Manager` phải kế thừa từ `Employee`.
- Thuộc tính `department` chỉ có trong lớp `Manager`.
- Phương thức `display_info()` in ra thông tin về `name`, `salary`, và `department`.

**Input mẫu:**

```python
manager = Manager("An", 50000, "HR")
manager.display_info()
```

**Output mẫu:**

```
Name: An, Salary: 50000, Department: HR
```

**Giải pháp:**

```python
class Employee:
    def __init__(self, name, salary):
        # Khởi tạo các thuộc tính name và salary
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        # Gọi phương thức khởi tạo của lớp cha Employee
        super().__init__(name, salary)
        # Khởi tạo thuộc tính department
        self.department = department

    def display_info(self):
        # In ra thông tin của Manager
        print(f"Name: {self.name}, Salary: {self.salary}, Department: {self.department}")

# Tạo đối tượng Manager và thử nghiệm các phương thức
manager = Manager("An", 50000, "HR")
manager.display_info()  # Kết quả: Name: An, Salary: 50000, Department: HR
```

---

### Bài Tập 9: Tính đóng gói và kế thừa với thuộc tính và phương thức private

**Yêu cầu:**  
Viết một lớp Python có tên `Product` với thuộc tính private `_price`. Thêm phương thức `set_price(price)` để gán giá trị cho `_price`. Viết lớp `DiscountedProduct` kế thừa từ `Product` và thêm phương thức `apply_discount(percentage)` để giảm giá sản phẩm theo phần trăm. Thuộc tính `_price` chỉ có thể được truy cập và thay đổi từ lớp `Product`.

**Gợi ý:**  
Sử dụng kế thừa và tính đóng gói để bảo vệ thuộc tính `_price`.

**Điều kiện:**

- Thuộc tính `_price` phải là private trong `Product`.
- Phương thức `set_price(price)` trong `Product` kiểm tra và gán giá trị cho `_price`.
- Lớp `DiscountedProduct` kế thừa từ `Product` và sử dụng `apply_discount(percentage)` để giảm giá `_price`.

**Input mẫu:**

```python
dp = DiscountedProduct(100)
dp.apply_discount(10)
```

**Output mẫu:**

```
Giá sau khi giảm: 90
```

**Giải pháp:**

```python
class Product:
    def __init__(self, price):
        # Khởi tạo thuộc tính private _price
        self._price = price

    def set_price(self, price):
        # Kiểm tra và gán giá trị cho _price
        if price < 0:
            print("Giá không thể âm!")
        else:
            self._price = price

    def get_price(self):
        # Trả về giá trị của _price
        return self._price

class DiscountedProduct(Product):
    def apply_discount(self, percentage):
        # Áp dụng giảm giá và cập nhật giá
        discount_amount = self._price * (percentage / 100)
        new_price = self._price - discount_amount
        self.set_price(new_price)

# Tạo đối tượng DiscountedProduct và thử nghiệm các phương thức
dp = DiscountedProduct(100)
print(f"Giá

 gốc: {dp.get_price()}")  # Kết quả: 100

dp.apply_discount(10)
print(f"Giá sau khi giảm: {dp.get_price()}")  # Kết quả: 90
```

---

### Bài Tập 10: Tạo lớp có các thuộc tính và phương thức ẩn

**Yêu cầu:**  
Viết một lớp Python có tên `SecureData` với thuộc tính private `_data` và phương thức private `_encrypt()`. Thêm phương thức `store_data(data)` để mã hóa dữ liệu trước khi lưu vào `_data`. Thêm phương thức `retrieve_data()` để giải mã và trả về dữ liệu gốc.

**Gợi ý:**  
Sử dụng các phương thức ẩn để bảo vệ và quản lý dữ liệu.

**Điều kiện:**

- Thuộc tính `_data` và phương thức `_encrypt()` phải là private.
- Phương thức `store_data(data)` mã hóa dữ liệu trước khi lưu vào `_data`.
- Phương thức `retrieve_data()` giải mã và trả về dữ liệu gốc từ `_data`.

**Input mẫu:**

```python
secure_data = SecureData()
secure_data.store_data("HelloWorld")
print(f"Dữ liệu gốc: {secure_data.retrieve_data()}")
```

**Output mẫu:**

```
Dữ liệu gốc: HelloWorld
```

**Giải pháp:**

```python
class SecureData:
    def __init__(self):
        # Khởi tạo thuộc tính private _data
        self._data = None

    def __encrypt(self, data):
        # Phương thức private để mã hóa dữ liệu (giả lập)
        return ''.join([chr(ord(char) + 1) for char in data])

    def __decrypt(self, data):
        # Phương thức private để giải mã dữ liệu (giả lập)
        return ''.join([chr(ord(char) - 1) for char in data])

    def store_data(self, data):
        # Mã hóa và lưu trữ dữ liệu
        self._data = self.__encrypt(data)
        print("Dữ liệu đã được mã hóa và lưu trữ.")

    def retrieve_data(self):
        # Giải mã và trả về dữ liệu
        return self.__decrypt(self._data)

# Tạo đối tượng SecureData và thử nghiệm các phương thức
secure_data = SecureData()
secure_data.store_data("HelloWorld")  # Dữ liệu sẽ được mã hóa và lưu trữ
print(f"Dữ liệu gốc: {secure_data.retrieve_data()}")  # Kết quả: HelloWorld
```
