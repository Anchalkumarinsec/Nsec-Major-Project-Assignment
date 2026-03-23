// 1. Total Salary
function calculateSalary(basic, hra, bonus) {
  return basic + hra + bonus;
}
console.log("Total Salary:", calculateSalary(20000, 5000, 2000));

// 2. Final Product Price
function finalPrice(price, discount) {
  return price - (price * discount / 100);
}
console.log("Final Price:", finalPrice(1000, 10));

// 3. Pass or Fail
function checkResult(marks) {
  return marks >= 40 ? "Pass" : "Fail";
}
console.log("Result:", checkResult(55));

// 4. map()
const productList = ["Laptop", "Phone", "Tablet"];
productList.map(p => console.log("Product:", p));

// 5. filter()
const priceList = [500, 1500, 2000, 800];
const filtered = priceList.filter(p => p > 1000);
console.log("Filtered Prices:", filtered);

// 6. Default Parameter
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("John");

// 7. Spread (Array)
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log("Merged Array:", [...arr1, ...arr2]);

// 8. Callback
function placeOrder(order, callback) {
  console.log("Order placed:", order);
  callback();
}
placeOrder("Pizza", () => console.log("Order delivered!"));

// 9. Spread (Object)
const student = { name: "Sam", marks: 50 };
const updatedStudent = { ...student, marks: 80 };
console.log("Updated Student:", updatedStudent);

// 10. Async/Await
async function fetchUser() {
  const fakeAPI = new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "John" }), 1000);
  });
  const data = await fakeAPI;
  console.log("User Data:", data);
}
fetchUser();

// 11. GST
const calculateGST = (amount, rate) => amount + (amount * rate / 100);
console.log("GST Price:", calculateGST(1000, 18));

// 12. Electricity Bill
function electricityBill(units, rate) {
  return units * rate;
}
console.log("Electricity Bill:", electricityBill(100, 5));

// 13. reduce()
const cart = [100, 200, 300];
const total = cart.reduce((sum, val) => sum + val, 0);
console.log("Cart Total:", total);

// 14. Login
function login(email, password) {
  const validEmail = "test@gmail.com";
  const validPassword = "1234";

  return (email === validEmail && password === validPassword)
    ? "Login Successful"
    : "Invalid Credentials";
}
console.log("Login Status:", login("test@gmail.com", "1234"));

// 15. Search
const productItems = ["Laptop", "Phone", "Tablet"];
function searchProduct(query) {
  return productItems.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}
console.log("Search Result:", searchProduct("lap"));

// 16. Template Literal
function generateInvoice(name, amount) {
  return `Hello ${name}, your total bill is ₹${amount}.`;
}
console.log(generateInvoice("John", 1500));

// 17. Bonus
const bonusCalc = salary => salary * 0.10;
console.log("Bonus:", bonusCalc(20000));

// 18. Rest Operator
function totalMarks(...marks) {
  return marks.reduce((sum, m) => sum + m, 0);
}
console.log("Total Marks:", totalMarks(50, 60, 70));

// 19. Promise
function payment(status) {
  return new Promise((resolve, reject) => {
    status ? resolve("Payment Successful") : reject("Payment Failed");
  });
}
payment(true)
  .then(res => console.log(res))
  .catch(err => console.log(err));

// 20. Async Order
async function fetchOrder() {
  const order = new Promise(resolve => {
    setTimeout(() => resolve({ orderId: 101, item: "Laptop" }), 1000);
  });
  const data = await order;
  console.log("Order Details:", data);
}
fetchOrder();
