// let str = 'happy day~!  ';
// console.log(str.length); //빈문자포함한 문자열 길이
// console.log(str.toUpperCase()); //대문자로 변환
// console.log(str.toLowerCase()); //소문자로 변환
// //toUpperCase()나 toLowerCase()는 보통 회원가입시
// //아이디 중복을 막기위해 자주 사용
// console.log(str.indexOf('y')); //몇번째 익덱스인지 확인(단, 첫번째 문자 인덱스만 검색)
// console.log(str.slice(2));//앞에서부터 2글자 자르기
// console.log(str.slice(2,-7)); //앞에서부터 2글자 자르기, 뒤에서부터 7글자 자르기
// console.log(str.replace('a','s')); // 첫번째 문자(a)만 변경
// console.log(str.replaceAll('y', 'i')); //전체문자변경
// console.log(str.repeat(5));//반복
// console.log(str.trim());//공백없애기, 띄어쓰기제외
// console.log(str.split('p'));//문자열 자르기 (p날리고 p자리에 공백, 이후 나누기 )
// const colors=['red','orange','yellow'];
// console.log(colors.join('&&'))//join()안에 있는 문자를 기준으로 결합
// console.log(str.trim().toLowerCase().split('p'))//여러기능 한번에:메소드 체이닝
// let hello ="Hello~";
// let helloSplit=hello.split('');
// console.log(helloSplit);

// let reverseHello = helloSplit.reverse();
// console.log(reverseHello);

// let helloJoin = reverseHello.join('');
// console.log(helloJoin);

// console.log(hello.split('').reverse().join(''));