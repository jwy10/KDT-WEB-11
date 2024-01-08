let numbers = [1,2,3,4,5,6]
let colors = ['red', 'orange', '노', '초','파','남','보']


//기본for문

// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }

// for(i = 0; i < colors.length; i++){
//   console.log(colors[i]);
// }

//fot of문
//for ({}안에서 사용할변수 of 배열) {}
// for ( let number of numbers){
//   console.log(number);
// }

// for (let color of colors){
//   console.log(color)
// }

//for each 문
//변수명.forEach({}안에서 사용할 변수, 인덱스, 배열) {}
// numbers.forEach( function() {} )
// numbers.forEach( (number, index, arr) => {
//   console.log(number, index, arr)
// } )


// let arr;
// let arr2;
// //filter() 저건에 부합하는배열 요소만 반환
// // arr = numbers.filter( function({}안에서 사용할 변수))
// //filter() {}안에는 조건식이 나오는게 일반적
// arr = numbers.filter( (number) => {
//   return number > 3;
// })
// //화살표함수의 특징중 하나는 {return 을 } 생략가능
// arr2 = colors.filter( (color) => color.length > 2);

// console.log(arr);
// console.log(arr2);

//배열안에 있는 값을 더할때 그 더한값합의 변수는 전역변수
// let sum1 = 0;
// for (let number of numbers){
//   sum1+=number
// }
// console.log(sum1);




// colors.forEach((color,index) => {
//   console.log(color, index+1+'번째')
// })

//for in 문
// let colors2 = [{color:"red"},{color:'blue'},{color:'yellow'}]
// //보통 객체(키-값)에 주로 사용
// //for({}안에 사용할 키값 of 배열)
// for( let index in colors){
//   // console.log(index)
//   console.log(colors[index])
//   // console.log(colors2[index].color);
// }

//do - while문
// let i=0;
// do{
//   console.log(colors[i]);
//   i++;
// } while ( i < colors.length)













