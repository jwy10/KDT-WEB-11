//호이스팅 연습
// test();                                 //hoisting practice
// function test() {
//   console.log('hoisting practice');
// }
// test();                                 //hoisting practice

// var로 선언한 변수 호이스팅
// console.log(name); //undefined
// var name = 'James';
// console.log(name); //James

// const, let로 선언한 변수 호이스팅
// console.log(name);  //Cannot access 'name' before initialization
// const name = 'James';
// console.log(name); //Cannot access 'name' before initialization
// const name = 'James';

//변수 생명주기
// var x = 'global';
// function foo() {
//   var x = 'local';
//   console.log(x);
//   return x;
// }
// foo(); //local
// console.log(x); //global

//var 키워드 스코프 -> 함수 이외에 if, for문은 모두 전역변수가 된다
// var i = 10;
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

//변수 호이스팅2
// console.log(foo);
// foo = 123;
// console.log(foo);
// var foo;

// 블록 레벨 스코프 : 모든 코드 블록(if, for문 등)을 지역 스코프로 인정한다
// let foo = 1;
// {
//   let foo = 2;
//   let bar = 3;
// }

// console.log(foo); // 1
// console.log(bar); //ReferenceError: bar is not defined

//전역 스코프, 함수 레벨 스코프, 블록 레벨 스코프
// let i = 10;
// function foo() {
//   let i = 100;

//   for (let i = 1; i < 3; i++) {
//     console.log(i); //1, 2
//   }
//   console.log(i); // 100
// }

// foo();

// console.log(i); //10

// var와 let의 호이스팅 차이
// var 호이스팅
// console.log(foo); //undefined
// var foo;
// console.log(foo); //undefined
// foo = 1;
// console.log(foo); //undefined

// let 호이스팅
// console.log(foo); //ReferenceError: Cannot access 'foo' before initialization  ->
// //                                                let은 이 부분위로 foo가 호이스팅 되긴 하지만 foo가 선언되기 전까진 접근 불가능하다!!(TDZ)
// let foo;
// console.log(foo);
// foo = 1;
// console.log(foo);

// let 호이스팅 2
// let foo = 1;
// {
//   console.log(foo); // Cannot access 'foo' before initialization
//   let foo = 2;
// }
// let, const, class는 호이스팅이 발생하지 않은 것처럼 동작하지만 실제로 호이스팅은 되고있다!

// 전역 객체와 let
// let으로 선언된 변수는 전역 객체의 프로퍼티가 아니라 window로 접근이 불가능하다
//브라우저 환경에서 해야 window로 전역 객체 접근이 가능하다
// let x = 1;
// console.log(window.x); //undefined
// console.log(x); // 1

//const 변수와 객체 : const는 재할당 불가능이지만 const 변수에 객체를 할당한 경우는 변경가능
// const person = { name: 'Lee' };
// person.name = 'Kim';
// console.log(person);
