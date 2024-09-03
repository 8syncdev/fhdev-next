# Bài tập chương 8: Làm việc với chuỗi (String)

### Exercise 1A: Tạo chuỗi mới bao gồm ký tự đầu tiên, giữa và cuối

- **Yêu cầu:** Viết một chương trình tạo ra một chuỗi mới từ chuỗi đầu vào, bao gồm ký tự đầu tiên, giữa và cuối của chuỗi đó.

- **Dữ liệu đầu vào:**

  - `str1 = "James"`

- **Kết quả mong đợi:**

  ```
  Jms
  ```

- **Gợi ý:** Chỉ số của chuỗi luôn bắt đầu từ 0. Sử dụng chỉ số để lấy ký tự tại vị trí đầu tiên, giữa và cuối cùng. Chia chiều dài chuỗi cho 2 để tìm ký tự giữa.

---

### Exercise 1B: Tạo chuỗi mới bao gồm ba ký tự giữa

- **Yêu cầu:** Viết một chương trình tạo ra một chuỗi mới từ chuỗi đầu vào, bao gồm ba ký tự giữa của chuỗi đó.

- **Dữ liệu đầu vào:**

  - `Case 1: str1 = "JhonDipPeta"`
  - `Case 2: str2 = "JaSonAy"`

- **Kết quả mong đợi:**

  - `Dip`
  - `Son`

- **Gợi ý:** Tính chỉ số giữa bằng cách chia chiều dài chuỗi cho 2. Sử dụng slicing để lấy ba ký tự giữa bắt đầu từ chỉ số giữa trừ đi 1.

---

### Exercise 2: Chèn chuỗi mới vào giữa một chuỗi đã cho

- **Yêu cầu:** Viết một chương trình để tạo một chuỗi mới bằng cách chèn chuỗi `s2` vào giữa chuỗi `s1`.

- **Dữ liệu đầu vào:**

  - `s1 = "Ault"`
  - `s2 = "Kelly"`

- **Kết quả mong đợi:**

  ```
  AuKellylt
  ```

- **Gợi ý:** Tính chỉ số giữa của `s1` bằng cách chia chiều dài của nó cho 2, sau đó chèn `s2` vào giữa bằng cách nối chuỗi.

---

### Exercise 3: Tạo chuỗi mới bao gồm các ký tự đầu tiên, giữa, và cuối của mỗi chuỗi đầu vào

- **Yêu cầu:** Viết một chương trình để trả về một chuỗi mới được tạo từ các ký tự đầu tiên, giữa, và cuối của `s1` và `s2`.

- **Dữ liệu đầu vào:**

  - `s1 = "America"`
  - `s2 = "Japan"`

- **Kết quả mong đợi:**

  ```
  AJrpan
  ```

- **Gợi ý:** Sử dụng chỉ số chuỗi để lấy ký tự đầu tiên, giữa và cuối của mỗi chuỗi. Kết hợp chúng lại thành chuỗi mới.

---

### Exercise 4: Sắp xếp các ký tự của chuỗi sao cho các chữ cái thường đứng trước

- **Yêu cầu:** Viết chương trình để sắp xếp các ký tự của một chuỗi sao cho các chữ cái thường đứng trước các chữ cái hoa.

- **Dữ liệu đầu vào:**

  - `str1 = "PyNaTive"`

- **Kết quả mong đợi:**

  ```
  yaivePNT
  ```

- **Gợi ý:** Duyệt qua từng ký tự của chuỗi, kiểm tra xem ký tự hiện tại là chữ thường hay chữ hoa, sau đó sắp xếp lại theo thứ tự chữ thường trước, chữ hoa sau.

---

### Exercise 5: Đếm tất cả các chữ cái, chữ số, và ký hiệu đặc biệt từ chuỗi đã cho

- **Yêu cầu:** Viết một chương trình để đếm số lượng các chữ cái, chữ số và ký hiệu đặc biệt trong một chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = "P@#yn26at^&i5ve"`

- **Kết quả mong đợi:**

  ```
  Chars = 8
  Digits = 3
  Symbol = 4
  ```

- **Gợi ý:** Sử dụng các hàm string như `isalpha()` để kiểm tra chữ cái, `isdigit()` để kiểm tra chữ số, và kiểm tra các ký hiệu đặc biệt bằng cách loại bỏ các ký tự không phải là chữ cái hoặc chữ số.

---

### Exercise 6: Tạo chuỗi hỗn hợp theo các quy tắc sau

- **Yêu cầu:** Cho hai chuỗi, `s1` và `s2`. Viết chương trình tạo một chuỗi mới `s3` được tạo từ ký tự đầu tiên của `s1`, sau đó là ký tự cuối cùng của `s2`, tiếp theo là ký tự thứ hai của `s1` và ký tự cuối cùng thứ hai của `s2`, và cứ tiếp tục như vậy. Bất kỳ ký tự nào còn lại sẽ được thêm vào cuối kết quả.

- **Dữ liệu đầu vào:**

  - `s1 = "Abc"`
  - `s2 = "Xyz"`

- **Kết quả mong đợi:**

  ```
  AzbycX
  ```

- **Gợi ý:** Đảo ngược chuỗi `s2` để lấy các ký tự theo thứ tự từ cuối lên đầu. Duyệt qua từng ký tự của chuỗi `s1` theo thứ tự bình thường và chuỗi `s2` theo thứ tự đảo ngược, sau đó kết hợp chúng lại.

---

### Exercise 7: Kiểm tra sự cân bằng ký tự chuỗi

- **Yêu cầu:** Viết chương trình để kiểm tra xem hai chuỗi có cân bằng hay không. Ví dụ, chuỗi `s1` và `s2` là cân bằng nếu tất cả các ký tự trong `s1` đều có mặt trong `s2`. Vị trí của các ký tự không quan trọng.

- **Dữ liệu đầu vào:**

  - `Case 1: s1 = "Yn", s2 = "PYnative"`
  - `Case 2: s1 = "Ynf", s2 = "PYnative"`

- **Kết quả mong đợi:**

  - `True`
  - `False`

- **Gợi ý:** Duyệt qua từng ký tự của chuỗi `s1` và kiểm tra xem nó có tồn tại trong `s2` hay không. Nếu tất cả các ký tự đều tồn tại, chuỗi cân bằng.

---

### Exercise 8: Tìm tất cả các lần xuất hiện của một chuỗi con trong một chuỗi bất kể chữ hoa hay chữ thường

- **Yêu cầu:** Viết chương trình để tìm tất cả các lần xuất hiện của chuỗi "USA" trong một chuỗi đã cho bất kể chữ hoa hay chữ thường.

- **Dữ liệu đầu vào:**

  - `str1 = "Welcome to USA. usa awesome, isn't it?"`

- **Kết quả mong đợi:**

  ```
  Số lần xuất hiện của USA là: 2
  ```

- **Gợi ý:** Chuyển chuỗi chính (`str1`) và chuỗi con (`sub_string`) thành chữ thường để tránh phân biệt chữ hoa và chữ thường. Sử dụng hàm `count()` để đếm số lần xuất hiện.

---

### Exercise 9: Tính tổng và trung bình của các chữ số có trong một chuỗi

- **Yêu cầu:** Cho một chuỗi `s1`, viết chương trình để trả về tổng và trung bình của các chữ số có trong chuỗi, bỏ qua tất cả các ký tự khác.

- **Dữ liệu đầu vào:**

  - `str1 = "PYnative29@#8496"`

- **Kết quả mong đợi:**

  ```
  Tổng là: 38, Trung bình là: 6.333333333333333
  ```

- **Gợi ý:** Duyệt qua từng ký tự của chuỗi, kiểm tra nếu đó là chữ số, sau đó chuyển thành số nguyên và tính tổng. Tính trung bình bằng cách chia tổng cho số lượng chữ số.

---

### Exercise 10: Đếm số lần xuất hiện của tất cả các ký tự trong một chuỗi

- **Yêu cầu:** Cho chuỗi `str1`, viết chương trình để đếm số lần xuất hiện của tất cả các ký tự trong chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = "Apple"`

- **Kết quả mong đợi:**

  ```
  {'A': 1, 'p': 2, 'l': 1, 'e': 1}
  ```

- **Gợi ý:** Tạo một từ điển trống để lưu trữ kết quả, trong đó ký tự là khóa và số lần xuất hiện là giá trị. Duyệt qua từng ký tự trong chuỗi `str1` và sử dụng hàm `count()` để đếm số lần xuất hiện.

---

### Exercise 11: Đảo ngược một chuỗi

- **Yêu cầu:** Viết chương trình để đảo ngược chuỗi `str1`.

- **Dữ liệu đầu vào:**

  - `str1 = "PYnative"`

- **Kết quả mong đợi:**

  ```
  evitanYP
  ```

- **Gợi ý:** Sử dụng slicing với bước là `

-1`để đảo ngược chuỗi. Hoặc sử dụng hàm`reversed()` để đảo ngược các ký tự trong chuỗi và kết hợp lại thành chuỗi mới.

---

### Exercise 12: Tìm vị trí cuối cùng của một chuỗi con đã cho

- **Yêu cầu:** Viết chương trình để tìm vị trí cuối cùng của chuỗi con "Emma" trong một chuỗi đã cho.

- **Dữ liệu đầu vào:**

  - `str1 = "Emma is a data scientist who knows Python. Emma works at google."`

- **Kết quả mong đợi:**

  ```
  Lần xuất hiện cuối cùng của Emma bắt đầu tại chỉ số: 43
  ```

- **Gợi ý:** Sử dụng hàm `rfind()` để tìm vị trí xuất hiện cuối cùng của chuỗi con trong chuỗi chính.

---

### Exercise 13: Tách một chuỗi theo dấu gạch nối

- **Yêu cầu:** Viết chương trình để tách một chuỗi theo dấu gạch nối và hiển thị từng chuỗi con.

- **Dữ liệu đầu vào:**

  - `str1 = "Emma-is-a-data-scientist"`

- **Kết quả mong đợi:**

  ```
  Hiển thị từng chuỗi con:
  Emma
  is
  a
  data
  scientist
  ```

- **Gợi ý:** Sử dụng hàm `split()` để tách chuỗi theo dấu gạch nối và sau đó hiển thị từng phần tử trong danh sách kết quả.

---

### Exercise 14: Loại bỏ các chuỗi trống khỏi danh sách chuỗi

- **Yêu cầu:** Viết chương trình để loại bỏ các chuỗi trống và giá trị `None` khỏi danh sách chuỗi.

- **Dữ liệu đầu vào:**

  - `str_list = ["Emma", "Jon", "", "Kelly", None, "Eric", ""]`

- **Kết quả mong đợi:**

  ```
  Danh sách sau khi loại bỏ chuỗi trống và None:
  ['Emma', 'Jon', 'Kelly', 'Eric']
  ```

- **Gợi ý:** Sử dụng vòng lặp để duyệt qua từng phần tử trong danh sách và kiểm tra điều kiện không phải là chuỗi trống hoặc `None`. Sử dụng hàm `filter()` để lọc ra các giá trị không hợp lệ.

---

### Exercise 15: Loại bỏ các ký tự đặc biệt và dấu chấm câu khỏi chuỗi

- **Yêu cầu:** Viết chương trình để loại bỏ tất cả các ký tự đặc biệt và dấu chấm câu khỏi một chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = "/*Jon is @developer & musician"`

- **Kết quả mong đợi:**

  ```
  Chuỗi sau khi loại bỏ các ký tự đặc biệt và dấu chấm câu:
  "Jon is developer musician"
  ```

- **Gợi ý:** Sử dụng hàm `translate()` và `maketrans()` để thay thế các ký tự đặc biệt bằng một ký tự trống. Hoặc sử dụng biểu thức chính quy để loại bỏ các ký tự không phải là chữ và số.

---

### Exercise 16: Loại bỏ tất cả các ký tự ngoại trừ chữ số khỏi chuỗi

- **Yêu cầu:** Viết chương trình để loại bỏ tất cả các ký tự ngoại trừ chữ số khỏi chuỗi.

- **Dữ liệu đầu vào:**

  - `str1 = 'I am 25 years and 10 months old'`

- **Kết quả mong đợi:**

  ```
  2510
  ```

- **Gợi ý:** Sử dụng hàm `isdigit()` để kiểm tra xem ký tự có phải là chữ số hay không và tạo một chuỗi mới chỉ chứa các chữ số.

---

### Exercise 17: Tìm các từ có cả chữ cái và số

- **Yêu cầu:** Viết chương trình để tìm các từ có chứa cả chữ cái và số từ một chuỗi đầu vào.

- **Dữ liệu đầu vào:**

  - `str1 = "Emma25 is Data scientist50 and AI Expert"`

- **Kết quả mong đợi:**

  ```
  Emma25
  scientist50
  ```

- **Gợi ý:** Sử dụng hàm `isalpha()` và `isdigit()` kết hợp với hàm `any()` để kiểm tra từng từ trong chuỗi. Nếu từ chứa cả chữ cái và số, thì thêm vào kết quả.

---

### Exercise 18: Thay thế mỗi ký tự đặc biệt bằng dấu

- **Yêu cầu:** Viết chương trình để thay thế mỗi ký tự đặc biệt trong chuỗi bằng dấu `#`.

- **Dữ liệu đầu vào:**

  - `str1 = '/*Jon is @developer & musician!!'`

- **Kết quả mong đợi:**

  ```
  ##Jon is #developer # musician##
  ```

- **Gợi ý:** Sử dụng hàm `replace()` để thay thế các ký tự đặc biệt bằng ký tự `#`. Sử dụng `string.punctuation` để lấy danh sách các ký tự đặc biệt cần thay thế.

---
