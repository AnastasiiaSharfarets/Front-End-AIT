console.log("Hello world!");
let x;
console.log(x);
x = 7;
x = "bye";
console.log(x);

let pi = 3.1415926;
//pi = 3.14; пример ошибки

let y = x;
console.log(y);

console.log("pi = " + pi);

const exp = pi;
console.log(`exp = ${exp} or ${pi}`); //эксма 6

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2;
console.log(`res-${res}`);

res = true + 5; //false-0, teur - 1;
console.log(`res =${res}`);

x = "2" == 2;
console.log(`x=${x}`);

res = "5"; //!
res = "5"; //!

switch (res) {
  case "5":
    console.log(`number: ${res}`);
    break;
  case "5":
    console.log(`string: ${res}`);
    break;
  default:
    console.log(`Not a 5`);
    break;
}

let age = 17;
let vol = age >= 18 ? 42 : 1.5;
console.log(`vol=${vol}`);

const newPi = (("" + pi).length = 3);
console.log(newPi);
//
console.log("" + pi.toFixed());

console.log(typeof age); //number
age = "5"; //string
console.log(typeof age);
age = true; //boolean
console.log(typeof age);
age = null; //object
console.log(typeof age);

res = -age;
console.log(res);

++age;
age++;

x = 10;
res = x++ + ++x; // res =10+12=22
console.log(`res=${res}`);

x = 10;
y = 5;
res = add(x, y);
console.log(`res = ${res}`);

function add(a, b) {
  return a + b;
}

x = !!x; // неявное приведение переменной к boolean значению;
console.log(x); // любое число будет true, кроме 0 (false)

let example = "hello";
console.log(!!example);

// false = null, undefined, NaN, 0, -0, false, ''

let userName = null;
let nickName = userName || "Anonymous";
// console.log(nickName);
greeting();
greeting("Rabindranat");

function greeting(nickName1 = "Anonymous") {
  // nickName1 = nickName1 || 'Anonymous';
  console.log(`Hello ${nickName1}`);
}

// int[] arr = new int[5];
// int[] arr = {2, 3, 4, 5};
const arr = [1, 2, 3, "four", "five", true];
console.log(typeof arr);
console.log(arr[3]);
console.log(typeof arr[3]);
arr[3] = 4;
console.log(arr[3]);
console.log(arr.length);
arr[10] = 100500;
console.log(arr[10]);
console.log(arr);
printArray(arr);
console.log(arr[9]);
arr.length = 3;
console.log(arr);
// printArray(arr);

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

res = sumDigits(1234);
console.log(`res = ${res}`); // res = 10;

// варианты решения TODO1
// ('' +x).split('')
//charAt()
// 1234%10=4
// (1234-4)/10
//123
console.log(sumDigits(x));
function sumDigits(x) {
  let sum = 0;
  while (x) {
    sum += x % 10;
    x = x - (x % 10); //%-выполнится первая по приоритету
  }
  return sum;
}

function sumDigits(x) {
  let sum = 0;
  //let str = ''+x;
  for (let i = 0; i < ("" + x).length; i++) {
    sum += +("" + x)[i];
  }
  return sum;
}

function sumDigits(x) {
  let array = ("" + x).split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//res = luckyNumber(123871);
res = luckyNumber(1221);
1 + 2 + 3 == 8 + 7 + 1;
// res = luckyNumber(1234321); 1 + 2 + 3 == 3 + 2 + 1;
console.log(res ? "Lucky" : "Unlucky");

function luckyNumber(x) {
  //res = luckyNumber(123871);
  //1 + 2 + 3 == 8 + 7 + 1;
  // res = luckyNumber(1234321); 1 + 2 + 3 == 3 + 2 + 1;
  //console.log(res ? "Lucky" : "Unlucky");

  const numberLength = ("" + x).length;
  if (typeof +x !== "number" || x < 100) return false;
  //const middle = ('' + x).length % 2 === 0 ? ('' + x).length / 2 : ('' + x).length / 2 - 1;
  const middle = Math.floor(numberLength / 2);
  const subStr1 = ("" + x).substring(0, middle);
  //const subStr2 = numberLength % 2===0 ? (''+x).substring(middle): (''+x).substring(middle);
  const subStr2 = ("" + x).substring(numberLength - middle);
  return sumDigits(+subStr1) === sumDigits(+subStr2);

  //TODO2
}

function luckyNumber(x) {
  if (typeof +x !== "number" || x < 100) return false;
  const str = "" + x;
  const mid = Math.floor("" + x).length / 2;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < mid.length; i++) {
    leftSum += +str[i];
    rightSum += +str[str.length - i - 1];
  }
  return leftSum === rightSum;
}

banana();
function banana() {
  //NaN - not a number
  let a = "a";
  let b = "b";
  console.log(a * b);
  console.log(b + a + a * b + a);
  return (b + a + a * b + a).toLowerCase;
  //TODO 3

  // 'b', 'a' => banana;
}

//пузырьковая сортировка

let arr5 = [1,6,2,3,4,5];
let counterI = 0;
let counterJ = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    counterI++;
    for (let j = 0; j < arr.length; j++) {
      counterJ++;
      if (arr[j] - arr[j + 1] > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
bubbleSort(arr5);
console.log(arr5);
console.log(arr5,counterI, counterJ);

