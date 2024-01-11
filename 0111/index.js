//클래스 조작
function addClass() {
  $('#hi').addClass('font-size')
}
function removeClass() {
  // $('#hi').removeClass('font-size') //특정클래스 삭제
  $('#hi').removeClass(); //클래스 전체삭제
}
function hasClass() {
  console.log($('#hi').hasClass('font-size')) //true or false 반환
}
function toggleClass() {
  $('#hi').toggleClass('bg-color')
}

function switchClass(){
  $('#hi').switchClass('.color-blue', 'color-red', 1000) //1000 = 1초
}

