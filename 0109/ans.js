
function calc(){
//input의 value 값 가져오기
//요소접근.value
let vaule1 = Number(document.getElementById('value1').vaule);  //const 인지 let인지 생각
let vaule2 = Number(document.getElementById('value2').vaule);
let op = document.getElementById('op').vaule;
let result = document.getElementById('result');
let sum = 0;
if( op === '+'){
  sum = vaule1 + vaule2;
}else if( op === '-'){
  sum = vaule1 - vaule2;
}else if( op === '*'){
  sum = vaule1 * vaule2;
}else if( op === '/'){
  sum = vaule1 / vaule2;
}
result.vaule=sum
}

function resetFunc(){
  document.getElementById('value1').vaule = '';
  document.getElementById('value2').vaule = '';
  document.getElementById('op').vaule = '';
  document.getElementById('result').vaule = '';
}