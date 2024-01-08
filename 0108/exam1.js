//실습1
// let arr=[];
// for(i=1; i<100; i++){
//   arr.push(i);
// }

// let sum1=0;
// let sum2=0;
// let sum3=0;

// for(i=0; i < arr.length; i++){
//   sum1=sum1+arr[i]
// }
// console.log(sum1) 

// for(let num of arr){
//   sum2+=num
// }
// console.log(sum2)

// arr.forEach((num)=>{
//   sum3+=num
// })
// console.log(sum3)

//실습2
// for(i=0; i < fruit1.length; i++){
//   for(j=0; j < fruit2.length; j++){
//     if (fruit1[i]==fruit2[j]){
//       same.push(fruit1[i])
//     }
//   }
// }

// console.log(same)

//방법1 forEach
// let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고']
// let fruits2 = ['수박','사과','참외','오렌지','파인애플','망고','바나나']

// let same=[];
// let diff=[];

// fruit1.forEach((fruit) => {
//   if(fruit2.includes(fruit)){
//     same.push(fruit)
//   }
// })
// console.log(same)

// fruit1.forEach((fruits) => {
//   if( !fruit2.includes(fruits)){       //!배열.includes 포함 안되있는거 선별
//     diff.push(fruits)
//   }
// })

// console.log(diff)

//방법2
// let same = fruits1.filter((fruit) => fruits2.includes(fruit));
// let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));
// let diff2 = fruits2.filter((fruit) => !fruits1.includes(fruit));
// console.log(same)
// console.log(diff)
// console.log(diff2)


