// 실습 1
// let colors=["red", "orange", "yellow","green","blue","navy","purple"];
// console.log(colors[2])
// colors.push(('pink'))
// console.log(colors)
// console.log(colors.indexOf(`blue`))
// console.log(colors.reverse())

//const 사용시 재할당 사용불가, let(var)는 재할당 가능

// object : 여러가지 데이터가 하나로 묶여있는 형태

// let cat = {
//   //key: value형태
//   name:"고양이",
//   age:2,
//   isCute: true,
//   mew: function() {
//     return "야옹!"
//   }
// }

// console.log(cat.name)
// console.log(cat.age)
// console.log(cat.isCute)
// console.log(cat.mew())

// let people = {
//   name: '홍길동',
//   gender : '남자',
//   address: '마포구',
//   phone: "010-2024-8489"
// }

// console.log(people)
// console.log(people.address)


// let WyJeong = {
//   name : '정원영',
//   age : 27,
//   code_level : 1,
//   hobby: function() {
//     return 'football';
//   }
// }

// console.log(WyJeong)
// console.log(WyJeong.name)
// console.log(WyJeong.code_level)
// console.log(WyJeong.hobby())

// typeof 데이터가 어떤 타입인지 알려주는 키워드
// console.log(typeof "hello")
// console.log(typeof true)
// const types = 20
// console.log(typeof types)
// let hello = "안녕";

// let cat={
//   name: "나비",
//   age: 1
// }

// console.log((typeof 1), "isn't", (typeof(hello)), "data type")
// console.log("Typeof boolean이나 null에 사용하면,", (typeof(cat)), "결과를 얻을 수 있습니다")

// const number = 1
// const str = "Hello"
// const bool = true
// const data = `${typeof number} isn't ${typeof str} data type`
// const data2 = `Typeof를 boolean이나 null에 사용하면, ${typeof bool}의 결과를 얻을 수 있습니다`
// console.log(data)
// console.log(data2)

//형변환 : 데이터의 타입을 변환시켜주는 것
//prompt() 사용자에게 데이터를 입력받게 하는 것
// let mathScore = prompt("수학 점수를 입력하세요")
// let engScore = prompt("영어 점수를 입력하세요")
// //형변환 전
// let avg1 = (mathScore + engScore) / 2
// //형변환 후
// let avg2 = (Number(mathScore) + Number(engScore)) / 2
// console.log(avg1)
// console.log(avg2)
// console.log("안녕"+"하세요")
// console.log()

// let num = 123 ;
// console.log(typeof(num))

// let a = String(num)
// console.log(typeof a)

// let b = num.toString() //null과 undefined에서 사용불가
// console.log(typeof b)

// console.log(Number("435435345"))
// console.log(Number("asdsadasd"))

// 실습4
// let mathScore = "77"
// let engScore = "88"
// let avgScore = (Number(mathScore) + Number(engScore)) / 2
// console.log(avgScore)

// console.log(1+1)
// console.log(1-1)
// console.log(1*1)
// console.log(4/2)
// console.log(100%2)
// console.log(99%2)
// console.log(2**4)
// let num = 5
// num+=10 //num = num + 10와 동일
// console.log(num)

// let result1, result2;
// let num1 = 10, num2 = 15;

// result1=num1++; // 10
// result1=num1++; //11
// console.log(result1)

// result2 = ++num2; //16
// result2 = ++num2; //17
// console.log(result2)

//비교 연산자
// let a = 123
// let b = `123`

// console.log(a==b)
// console.log(a!=b)
// console.log(a===b)
// console.log(a!==b)

//논리 연산자
// || or연산자는 둘 중 하나만 조건이 일치해도 통과
// && and연산다는 두개 모두 조건이 일치해야 통과
//! not연산자는 반대
// let name = "뽀로로"
// let age =18;
// let isAdult = age >19;

// if(name === "뽀로로" && age > 19){
//   console.log("통과")
// }else{
//   console.log("돌아가")
// }

// if(!isAdult){ //..isAdult가 false인가
//   console.log("돌아가")
// }else{
//   console.log("통과")
// }