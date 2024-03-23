// typescript basic type

// 명시적으로
let a: number = 1;
a = 2;
// a = 'hello';

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

//타입 추론(암묵적으로)
let aa = 1;
// let aa='hello ; // 타입에러'
let bb = 'hi';
let cc = false;
let dd;
let ee = null;

//배열
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ['1','2','3'] // type error

let strArr: Array<string> = ['apple', 'banana', 'melon'];

//배열의 원소거 여러 타입일 경우
let arr1: (number | boolean | string)[] = [1, true, 'string'];

// boolean, null, array 가 원소가 될 수 있는 arr2
let arr2: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];

//어떤 자료형이든 상관없는 배열
let arr3: any[] = [1, 2, 3, 'wow', true, null];

//object
let ob1: object = {
  name: 'codingon',
  grade: 1,
};
