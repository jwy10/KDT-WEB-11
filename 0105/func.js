//함수
//함수선언문

// function sayHello() {
//   console.log("지역 Hello");
// }

// console.log("전역 Hello");
// sayHello()

////////////////함수 선언문
//덧셈 기능이 있는 함수를 선언
// sumFunc(15,10) //호이스팅
// const num1 = 10; //전역변수
// function sumFunc(num2,num3) { //num2는 매개변수, ()안에 변수들을 매개변수
//   const num1 = 11;
//   const sum=num1+num2+num3
//   // console.log("지역",num1);
//   console.log("결과", sum)
//   // return 함수 제일 마지막에 사용, 값을 다시 전달
//   return sum
// }

// // console.log("전역", num1);
// let result = sumFunc(30, 20); // ()안에 값은 인자
// //result = 61
// console.log(result)

// 함수 표현식
// sayHello(); // 호이스팅 불가
// let sayHello = function(num) {
//   console.log(num)
//   console.log("Hello")
// }
// sayHello(20);

//화살표 함수
// let sayHello = (num) => {
//   console.log(num)
//   console.log("Hello")
//   return num+10
// }
// // sayHello(20);
// let result = sayHello(30)
// console.log(result)

let multifly = function(num1,num2){
  return num1*num2
}

console.log(multifly(3,7))
console.log(multifly(2,2))

let square = function(num){
  return num**2
}

console.log(square(4))
console.log(square(11))
console.log(square(5))



