// const root = document.getElementById('root');
// const p = document.createElement('p');
// // <p></p>
// p.textContent = '안녕하세요'
// // <p>안녕하세요</p>
// p.classList.add('append-p');
// //<p class='append-p'>안녕하세요</p>
// p.style.fontWeight = 'bold'
// //<p class='append-p' style 'font-weight:bold'>안녕하세요</p>
// console.log(p);

//노드추가
/*
append(); 노드 객체 또는 텍스트 추가
          한번에 여러개의 자식요소 추가 가능
          반환값 없음

appendChild() : 노드 객체만 추가기능
                한번에 하나씩 추추가 가능
                반환값 없음
prepend(): 첫번째 자식으로 추가
 */

// const target = document.getElementById('target');
// root.prepend(p);
// target.before(p); target의 이전형재로 추가
// target.after(p) //target의 이전형재로 추가

//노드 삭제
/*
remove(): 선택한 요소 삭제
removeChild(): 선택한 요소의 자식을 삭제
*/

// target.remove() ;
// root.removeChild(p);


// const div = target.parentNode.children;
// console.log(div);
// root.remove();