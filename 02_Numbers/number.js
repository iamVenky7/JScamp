// integer literals
/* 0
100
0*ff  => 255
0b , 0B */

// Floating point literals

/* 1.9 
3.14

3.03e23 => 3.03 * 10 to the power 23

let billion = 1_000_000_000 */

//Arthematic
// +, -, *, /, %, **

/* Math.pow(2, 9)  -- power
Math.pow(3, 1/3)
Math.round(.6) -- nearest round  i.e, 1 
Math.ciel(.6) -- maximum nearby  also  1
Math.floor(.6) -- lowest nearby  0 
Math.abs(-5) -- absolute value 5
Math.min(2,3,5,8,4)
Math.max(2,3,5,8,4)
Math.random() -- gives value 0-1 ( many num there) */

//ES6 new methods

/* Math.cbrt(27)
Math.hypot(3, 4) 
Math.clz32(0xf) */

// Infinity, no errors, just infinity

// divide by 0; its a just NaN
/* Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); 
console.log(Number.isNaN("2")); - false

console.log(Number.isNaN('3a'))   / false
console.log(Number.parseInt('3a'))   / 3 */

/* let statementOne = 0.3 - 0.2;
let statementTwo = 0.2 - 0.1;

console.log(statementOne === statementTwo); // false
console.log(statementOne === 0.1); ///false
console.log(statementTwo === 0.1); //true

console.log(0.3 - 0.2); //0.099999
console.log(0.2 - 0.1); //0.1 */

// BigInt
//in
/* var fruits = { f1: "apple", f2: "banana", f3: "orange" };
console.log("apple" in fruits); */

/* let fruits = [];
console.log(typeof fruits); */

/* var fruits = ["apple", "banana", "orange"];

fruits instanceof Object;
fruits instanceof Array;
fruits instanceof String;

 */
/* var a = 1;
do {
  document.write("loop is running for " + a + "times</p>");
  a++;
} while (a <= 10);
 */

/* function fun() {
  var str1 = 2;
  var str2 = 3;
  var res = eval(new String(str1 + str2));
  document.write(res);
}
fun(); */

/* for (var a = 0; a <= 10; a++) {
  document.write("The loop is running for " + a + " times");
} */

/* var date = new Date();
var day = date.getDay(); 
if (day == 5) {
  alert("This is weekend!");
} else {
  alert("This is non-weekend!");
} */

/* for (var a = 0; a <= 10; a++) {
  if (a == 5) break;
  document.write("The loop is running for " + a + " times");
} */

/* var prod = 10 * 10;
debugger;
document.getElementbyId("id").innerHTML = prod; */

/* function* iter(a) {
  while (a < 4) {
    yield a++;
  }
}
const i = iter(1);
console.log(i.next().value); //return 1
console.log(i.next().value); //return 2
console.log(i.next().value); //return 3
 */

/* for (var a = 0; a <= 10; a++) {
  if (a == 5) continue;
  document.write("The loop is running for " + a + " times");
} */

/* let i = 1;
try {
  if (i == "") throw "is Empty";
  if (x > 0) throw "positive";
  if (x < 0) throw "negative";
} catch (msg) {
  message.innerHTML = "Input " + msg;
} */

/* var a = 1;
while (a <= 10) {
  document.write("loop is running for " + a + "times</p>");
  a++;
} */

//super.disp(); //the disp is a method of a parent class

/* var date = new Date();
switch (date.getDay()) {
  case 6:
    alert("This is weekend.");
    break;
  case 0:
    alert("This is weekend.");
  default:
    alert("Looking for a weekend.");
    break;
}
 */

//inBlock["package"] = something;
/* var fruits = ["apple", "banana", "orange"];
for (var i = fruits.length; i--; ) {
  with ({ no: i }) {
    link.onclick = function () {
      alert(no);
    };
  }
}
 */

/* var date = new Date();
var day = date.getDay(); // Sunday - Saturday : 0 - 6
if (day == 5) {
  alert("This is weekend!");
} else {
  alert("This is non-weekend!");
}
 */
