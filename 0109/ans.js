//실습1
/*
function calc() {
    //input의 value값 가져오기
    //요소접근.value
    let value1 = Number(document.getElementById('value1').value);
    let value2 = Number(document.getElementById('value2').value);
    let op = document.getElementById('op').value;
    let result = document.getElementById('result');
    let sum = 0;
    if (op === '+') {
        sum = value1 + value2;
    } else if (op === '-') {
        sum = value1 - value2;
    } else if (op === '*') {
        sum = value1 * value2;
    } else if (op === '/') {
        sum = value1 / value2;
    }
    result.value = sum;
}

function resetFunc() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('op').value = '';
    document.getElementById('result').value = '';
}
*/
let i = 2;
function writeFunc() {
    let writer = document.getElementById('writer').value; //작성자
    let content = document.getElementById('content').value; //내용
    console.log(writer, content);
    let tbody = document.getElementsByTagName('tbody')[0]; //테이블의 tbody

    let tr = document.createElement('tr'); //한행을 제작
    //<tr></tr>
    let tdNum = document.createElement('td'); //한열을 제작
    tdNum.textContent = i++;
    let tdWriter = document.createElement('td');
    tdWriter.textContent = writer;
    let tdContent = document.createElement('td');
    tdContent.textContent = content;
    let tdDate = document.createElement('td');
    let now = new Date();
    tdDate.textContent = `${now.getFullYear()}-${
        now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    //<td></td>
    tr.append(tdNum, tdWriter, tdContent, tdDate); //순서대로 tr안에 추가
    //<tr> <td></td></tr>
    tbody.append(tr); //tbody안에 tr을 추가
}