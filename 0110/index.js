const btn = document.getElementById('btn')
const def = document.getElementById('default')
const input = document.getElementById('input')

btn.addEventListener("click",function(event) {
  event.preventDefault()
  console.log(event)
  console.log(event.target)
  // console.log('안녕하세요')
} )

btn.addEventListener('mouseover', function() {
  console.log('mouseover')
})

btn.addEventListener('mouseout', function() {
  console.log('mousout')
})

input.addEventListener('focus', function() {
  console.log('focus') //input이랑 많이 씀
  // alert('문자입력')
})

input.addEventListener('blur', function(){
  console.log('blur')
})

input.addEventListener('keydown', function(){
  console.log('keydown')
})

input.addEventListener('keyup', function(){
  console.log('keyup')
})

//this
//그 함수가 속해 있던 객체 참조
//뭔가를 클릭할 때 불러오는 함수(콜백함수)에서 this를 의미함

//preventDefault
def.addEventListener('click', function(e){
  e.preventDefault(); //form 전송을 막는 메소드
  console.log(this)
  this.textContent = "클릭함"
})

