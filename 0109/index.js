
const text = document.getElementById('text');
console.log(text);
text.textContent= "hi";
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <b>첫번째</b> 태그입니다'

text.classList.add('title');
text.classList.remove('title');
text.classList.toggle('title-big')
console.log(text.classList.contains('title-big'))
// add : 클래스 추가S
// remove : 클래스 제거
// toggle : 클래스가 있으면 제거, 없으면 추가
// contains : 해당 클래스가 있는지 boolean 값 반환

// serAttribute : html요소 속성 추가

const link = document.getElementsById('link');
console.log(link)
link.setAttribute('href', 'https://www.naver.com')
const img = document.getElementById('image')
img.setAttribute('src', 'data:image/jpeg;base64,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')
img.setAttribute('width', '200')
const input = document.getElementById('input')
input.setAttribute('placeholder', '이름을 입력하세요')
//다른 노드에 접근하기