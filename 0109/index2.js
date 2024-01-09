const target = document.getElementById('target');
console.log(target)


//target기준 모든 부모의 모든 자식 태그 선택
const children = target.parentNode.children
console.log(children);


//target기준.  부모의 []안에 자식 태그 선택
const first = target.parentNode.children[0];
console.log(first)

//target 기준, 부모선택
const parent = target.parentNode;
console.log(parent)

//target 기준, 이전형재선택
const prev = target.previousElementSibling;
console.log(prev)

//target 기준, 이전형재선택
const next = target.nextElementSibling;
console.log(next)