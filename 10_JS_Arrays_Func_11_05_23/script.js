console.log("=== Regular function ===");
console.log(multiply(3, 4));
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5));

//console.log(multiplyArrow(6, 5));//ReferenceError-ошибка связи,нельзя вызвать функцию до и ...

const multiplyArrow = (a, b) => a * b;
//{return a * b};
console.log(multiply(6, 5));

const obj = {
  userName: "John",
  sayHello: function () {
    console.log(this); ///this - obj
    console.log(`Hello ${this.userName}`); //('Hello'+this.userName)
  } 
}

obj.sayHello();

const objArrow = {
  userName: "John",
  sayHello: () => {
    console.log(this); ///this - global field window
    console.log(`Hello ${this.userName}`);//Hello undefined
  }
}

objArrow.sayHello();

const person ={     //синтаксис объекта
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let arr = Object.keys(person);//array of keys
console.log(arr);

arr = Object.values(person);//array of values
console.log(arr);
 
arr = Object.entries(person);//array with arrays [key, value]
console.log(arr[2][1]);//[[0,1], [0,1], [0,1]]

arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];
console.log('===indexOf===');
let res = arr.indexOf('three');
console.log(arr);// исходный массив не меняется
console.log(res);//возвращает индекс искомого элемента (или -1 если такого элемента нет)
