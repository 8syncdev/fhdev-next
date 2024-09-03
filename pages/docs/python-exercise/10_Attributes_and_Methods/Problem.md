# Bài Tập Chương 10: Thuộc Tính Và Phương Thức

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
```

**Output mẫu:**

```
Diện tích: 50
Chu vi: 30
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
```

**Output mẫu:**

```
Số dư hiện tại: 120
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
```

**Output mẫu:**

```
Nhiệt độ không thể thấp hơn -273.15°C
Nhiệt độ hiện tại: 25°C
```

---

### Bài Tập 6: Tính đóng gói với phương thức private

**Yêu cầu:**  
Viết một lớp Python có tên `Counter` với thuộc tính private `_count` và phương thức private `_increment()`. Thêm phương thức `increase()` để gọi `_increment()` và in ra giá trị hiện tại của `_count`. Thêm một phương thức `reset()` để đặt lại giá trị của `_count` về 0.

**Gợi ý:**  
Phương thức private chỉ có thể được gọi từ bên trong lớp. Phương thức `increase()` và `reset()` điều khiển giá trị của `_count`.

**Điều kiện:**

- Thuộc tính `_count` phải là private.
- Phương thức `_increment()` là private và tăng giá trị `_count`.
- Phương thức `increase()` gọi `_increment()` và in ra giá trị hiện tại của `_count`.
- Phương thức `reset()` đặt lại giá trị của `_count` về 0.

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

---

### Bài Tập 7: Sử dụng thuộc tính getter và setter

**Yêu cầu:**  
Viết một lớp Python có tên `Circle` với thuộc tính private `_radius`. Sử dụng thuộc tính getter `get_radius()` và setter `set_radius(radius)` để truy cập và thay đổi giá trị của `_radius`. Thêm phương thức `area()` để tính diện tích hình tròn.

**Gợi ý:**  
Sử dụng getter và setter để kiểm soát việc truy cập và thay đổi giá trị của thuộc tính private `_radius`.

**Điều kiện:**

- Thuộc tính `_radius` phải là private.
- Phương thức `set_radius(radius)` thay đổi giá trị `_radius`, nếu `radius` >= 0.
- Phương thức `get_radius()` trả về giá trị hiện tại của `_radius`.
- Phương thức `area()` trả về diện tích của hình tròn.

**Input mẫu:**

```python
circle = Circle(5)
circle.set_radius(10)
```

**Output mẫu:**

```
Bán kính: 10
Diện tích: 314.159
```

---

### Bài Tập 8: Tính kế thừa và sử dụng phương thức khởi tạo

**Yêu cầu:**  
Viết hai lớp Python `Employee` và `Manager`, trong đó `Manager` kế thừa từ `Employee`. Lớp `Employee` có các thuộc tính `name` và `salary`. Lớp `Manager` có thêm thuộc tính `department`. Sử dụng phương thức khởi tạo `__init__` của `Employee` trong `Manager` để khởi tạo các thuộc tính kế thừa.

**Gợi ý:**  
Sử dụng từ khóa `super()` để gọi phương thức khởi tạo của lớp cha.

**Điều kiện:**

- Lớp `Manager` phải kế thừa từ `Employee`.
- Thuộc tính `name` và `salary` được khởi tạo trong lớp `Employee`.
- Thuộc tính `department` được khởi tạo trong lớp `Manager`.
- Phương thức `display_info()` in ra các thông tin của `Manager`.

**Input mẫu:**

```python
manager = Manager("An", 50000, "HR")
```

**Output mẫu:**

```
Name: An, Salary: 50000, Department: HR
```

---

### Bài Tập 9: Tính đóng gói và kế thừa với thuộc tính và phương thức private

\*\*Yêu

cầu:\*\*  
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

---

### Bài Tập 10: Tạo lớp có các thuộc tính và phương thức ẩn

**Yêu cầu:**  
Viết một lớp Python có tên `SecureData` với thuộc tính private `_data` và phương thức private `_encrypt()`. Thêm phương thức `store_data(data)` để mã hóa dữ liệu trước khi lưu vào `_data`. Thêm phương thức `retrieve_data()` để giải mã và trả về dữ liệu gốc.

**Gợi ý:**  
Phương thức `_encrypt()` và `_decrypt()` là private, được sử dụng để mã hóa và giải mã dữ liệu trước khi lưu trữ và truy xuất.

**Điều kiện:**

- Thuộc tính `_data` phải là private.
- Phương thức `_encrypt(data)` và `_decrypt(data)` là private.
- Phương thức `store_data(data)` mã hóa dữ liệu trước khi lưu vào `_data`.
- Phương thức `retrieve_data()` giải mã và trả về dữ liệu gốc.

**Input mẫu:**

```python
secure_data = SecureData()
secure_data.store_data("HelloWorld")
```

**Output mẫu:**

```
Dữ liệu gốc: HelloWorld
```
