//func type

//선택적 매개변수 (?) 는 맨 쉬에 있어야 함
function print(a: number, b?: number, c?: number) {
  console.log('print() 출력');
  console.log(a);
  console.log(b);
  console.log(c);
}

print(2, 5, 6);
print(2, 3); // 2, 3, undefined
print(3);

// 매개변수에 기본값 할당 가능
function print2(a: number, b: number, c = 100) {
  console.log('print2() 출력');
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(7, 8, 4);
print2(7, 8);

function sayHello(): void {
  console.log('hi~');
}
sayHello();

function sayHello2(): string {
  return 'hello~';
}
console.log(sayHello2());

//화살표 함수
const squareArea = (x: number, y: number): number => {
  return x * y;
};
console.log(squareArea(2, 8));

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const codigon: Greet = {
  name: 'codingon',
  hi() {
    return '여기는 ' + this.name + '입니다';
  },
  bye(count: number) {
    return `작별인사를 ${count}번 했습니다`;
  },
};

console.log(codigon.hi());
console.log(codigon.bye(2));

//never
// : 함수의 끝에 절대 도달하지 않는 경우

function goingOn(): never {
  while (true) {
    console.log('go!');
  }
} // 무한루프 -> 함수의 끝에 도달할 수 없음!
