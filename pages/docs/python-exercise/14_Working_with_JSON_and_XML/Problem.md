# Đáp án chương 14: Làm việc với JSON và XML

### Bài Tập 1: Chuyển đổi từ điển sau thành định dạng JSON

- **Yêu cầu:** Chuyển đổi từ điển sau thành định dạng JSON.

- **Dữ liệu đầu vào:**

  - `data = {"key1" : "value1", "key2" : "value2"}`

- **Kết quả mong đợi:**

  ```
  {"key1" : "value1", "key2" : "value2"}
  ```

- **Gợi ý:**

  - Sử dụng thư viện `json` có sẵn trong Python.
  - Sử dụng hàm `json.dumps()` để chuyển đổi từ điển thành chuỗi JSON.

---

### Bài Tập 2: Truy cập giá trị của `key2` từ JSON sau

- **Yêu cầu:** Truy cập giá trị của `key2` từ JSON sau.

- **Dữ liệu đầu vào:**

  - `sampleJson = """{"key1": "value1", "key2": "value2"}"""`

- **Kết quả mong đợi:**

  ```
  value2
  ```

- **Gợi ý:**

  - Sử dụng hàm `json.loads()` để chuyển đổi chuỗi JSON thành từ điển Python.
  - Truy cập giá trị của khóa `key2` từ từ điển.

---

### Bài Tập 3: Hiển thị JSON dữ liệu sau với định dạng đẹp

- **Yêu cầu:** Hiển thị JSON dữ liệu sau với định dạng đẹp, sử dụng mức thụt đầu dòng là 2 và dấu phân cách giữa các khóa và giá trị là `",", " = "`.

- **Dữ liệu đầu vào:**

  - `sampleJson = {"key1": "value1", "key2": "value2"}`

- **Kết quả mong đợi:**

  ```
  {
    "key1" = "value1",
    "key2" = "value2"
  }
  ```

- **Gợi ý:**

  - Sử dụng hàm `json.dumps()` với các tùy chọn `indent` và `separators` để định dạng JSON.

---

### Bài Tập 4: Sắp xếp các khóa JSON và ghi chúng vào tệp

- **Yêu cầu:** Sắp xếp các khóa JSON theo thứ tự bảng chữ cái và ghi chúng vào tệp.

- **Dữ liệu đầu vào:**

  - `sampleJson = {"id" : 1, "name" : "value2", "age" : 29}`

- **Kết quả mong đợi:**

  ```
  {
      "age": 29,
      "id": 1,
      "name": "value2"
  }
  ```

- **Gợi ý:**

  - Sử dụng tùy chọn `sort_keys=True` trong hàm `json.dump()` để sắp xếp các khóa theo thứ tự bảng chữ cái.
  - Ghi kết quả vào tệp bằng cách sử dụng `with open("filename.json", "w")`.

---

### Bài Tập 5: Truy cập khóa `salary` trong JSON lồng nhau

- **Yêu cầu:** Truy cập khóa `salary` từ JSON lồng nhau sau.

- **Dữ liệu đầu vào:**

  - `sampleJson = """{ "company":{ "employee":{ "name":"emma", "payble":{ "salary":7000, "bonus":800 } } } }"""`

- **Kết quả mong đợi:**

  ```
  7000
  ```

- **Gợi ý:**

  - Sử dụng `json.loads()` để chuyển đổi chuỗi JSON thành từ điển Python.
  - Sử dụng cách tiếp cận truy cập từng khóa một trong từ điển để lấy giá trị của `salary`.

---

### Bài Tập 6: Chuyển đối tượng `Vehicle` thành JSON

- **Yêu cầu:** Chuyển đối tượng `Vehicle` sau thành định dạng JSON.

- **Dữ liệu đầu vào:**

```python
class Vehicle:
    def __init__(self, name, engine, price):
        self.name = name
        self.engine = engine
        self.price = price

vehicle = Vehicle("Toyota Rav4", "2.5L", 32000)
```

- **Kết quả mong đợi:**

  ```json
  {
    "name": "Toyota Rav4",
    "engine": "2.5L",
    "price": 32000
  }
  ```

- **Gợi ý:**

  - Tạo một lớp `VehicleEncoder` kế thừa từ `JSONEncoder` và ghi đè phương thức `default()` để chuyển đổi đối tượng thành từ điển.
  - Sử dụng `json.dumps()` với tùy chọn `cls` để chuyển đổi đối tượng `Vehicle` thành JSON.

---

### Bài Tập 7: Chuyển JSON thành đối tượng `Vehicle`

- **Yêu cầu:** Chuyển JSON sau thành đối tượng `Vehicle`.

- **Dữ liệu đầu vào:**

  ```json
  { "name": "Toyota Rav4", "engine": "2.5L", "price": 32000 }
  ```

- **Kết quả mong đợi:**

  - Có thể truy cập đối tượng `Vehicle` bằng toán tử chấm như `vehicleObj.name, vehicleObj.engine, vehicleObj.price`.

- **Gợi ý:**

  - Tạo một hàm `vehicleDecoder` để giải mã JSON thành đối tượng `Vehicle`.
  - Sử dụng `json.loads()` với tùy chọn `object_hook` để chuyển JSON thành đối tượng `Vehicle`.

---

### Bài Tập 8: Kiểm tra xem JSON sau có hợp lệ hay không. Nếu không hợp lệ, sửa nó

- **Yêu cầu:** Kiểm tra xem JSON sau có hợp lệ hay không. Nếu không hợp lệ, sửa nó.

- **Dữ liệu đầu vào:**

  ```json
  {
     "company":{
        "employee":{
           "name":"emma",
           "payble":{
              "salary":7000
              "bonus":800
           }
        }
     }
  }
  ```

- **Gợi ý:**

  - Sử dụng `json.loads()` để kiểm tra tính hợp lệ của JSON.
  - Lỗi xảy ra do thiếu dấu `,` sau `"salary":7000`. Thêm dấu phẩy để sửa lỗi.

---

### Bài Tập 9: Phân tích JSON sau để lấy tất cả các giá trị của khóa `name` trong mảng

- **Yêu cầu:** Phân tích JSON sau để lấy tất cả các giá trị của khóa `name` trong mảng.

- **Dữ liệu đầu vào:**

  ```json
  [
    {
      "id": 1,
      "name": "name1",
      "color": ["red", "green"]
    },
    {
      "id": 2,
      "name": "name2",
      "color": ["pink", "yellow"]
    }
  ]
  ```

- **Kết quả mong đợi:**

  ```
  ["name1", "name2"]
  ```

- **Gợi ý:**

  - Sử dụng `json.loads()` để chuyển đổi chuỗi JSON thành danh sách Python.
  - Duyệt qua danh sách để lấy giá trị của khóa `name`.

---
