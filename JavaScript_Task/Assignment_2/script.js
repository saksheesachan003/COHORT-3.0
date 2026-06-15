//////////////////////////////// <-------------------------------------- Arrays -------------------------------------------> /////////////////////////

// :) EASY (: //

//// Ques  1 :)  Find Expensive Products ( Create a new array containing only prices greater than ₹300. )
//// Concepts :) filter

let prices = [100, 250, 500, 150, 700];
let expProduct = [];
prices.filter((price) => {
  if (price > 300) expProduct.push(price);
  return expProduct;
});
console.log("Expensive Products :", expProduct);

//// Ques 2 :) Last Student in Class ( Print the last student's name. )
//// Concepts :) length property

let students = ["Aman", "Ritik", "Priya", "Rahul"];
console.log("Last Student :", students[students.length - 1]);

//// Ques 3 :)  Add New Product ( Add "Monitor" to the end of the array )
//// Concepts :) push

let products = ["Laptop", "Mouse", "Keyboard"];
products.push("monitor");
console.log("All Products :", products);

//// Ques 4 :) Remove Last Notifications
//// Concepts :) pop

let notifications = ["Order Placed", "Order Shipped", "Order Delivered"];
notifications.pop();
console.log(" Removed Last Element :", notifications);

//// Ques 5 :) Check User Exists ( Check if "Ritik" exists )
//// Concepts :) includes()

let users = ["Aman", "Ritik", "Priya"];
console.log("Includes :", users.includes("Ritik"));

//// Ques 6 :) Convert Marks to Percentage ( Create a new array where each mark is followed by  % )
//// Concepts :) map

let marks = [80, 90, 70];
let percMarks = [];
let mrk = marks.map((mark) => {
  percMarks.push(mark);
  
});
console.log("Marks To Percentage :", mrk);
