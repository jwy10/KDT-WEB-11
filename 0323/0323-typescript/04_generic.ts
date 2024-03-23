// generic
// 선언할 때 타입을 지정하기 어려운 케이스가 존재
// - 데이터 타입을 외부에서 지정
// - 생성 시점에 타입을 명시
// => 재사용성 증가
// ==> 타입을 변수처럼 사용
// <T> 형태로 주로 사용

function numArrLen(arr: number[]): number {
  return arr.length;
}

function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3]));
console.log(strArrLen(['a', 'b', 'c']));

//<T> 를 이용해서 매개변수를 선언하는 공간을 하나 더 만든다
//T <> type만 올 수 있음

function arrLen<T>(arr: T[]) {
  return arr.length;
}

console.log(arrLen<number>([1, 2, 3]));
console.log(arrLen<string>(['a', 'b', 'c']));
console.log(arrLen<string | number>(['a', 1, 'z']));

//퀴즈
function printSome<T, U>(x: T, y: U) {
  console.log(x, y);
}

printSome<number, string>(1, 'a');
printSome<string, string>('a', 'b');

//////////////////////////////////
//interface와 generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2024-03-23'),
  option: {
    color: 'black',
    storage: 128,
  },
};

type galaxyOption = {
  color: string;
  isAI: boolean;
};

const galaxy: Phone<galaxyOption> = {
  company: 'samsung',
  createAt: new Date('2024-03-23'),
  option: {
    color: 'white',
    isAI: true,
  },
};

console.log(galaxy);

console.log(iphone);
