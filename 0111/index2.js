// //javascript
// console.log(document)
// //jQuery
// console.log($(document))
// $(document).ready(function() {
//   console.log('ready() - 문서의 DOM트리가 완성되면 실행되는 이벤트')
// })
// $(function() {
//   console.log('안녕')
// })

//click
$('.hello').click(function() {
  $(".hello").css('color', 'red');
})

$('.nums').click(function(){
  // $('.nums').css('color','blue')
  //$(this)는 자기자신 = 이벤트가 적용된 요소. 누른것만 바꾸기

  $(this).css('color','blue');
})



//mouseover() : 마우스 올렸을 때
$('.numbers').mouseover(function() {
  // $('.numbers').css('background-color','green')
  // $('.numbers').append('<li>.mouseover call </li>')
  $(this).css('background-color','green')
})

//hover(): 마우스 올렸을 때와 때었을 떄
// $('.div-hover').hover(function(){
//   $(this).addClass('hover')
// }, function(){
//   $(this).removeClass('hover')
// });

$('.div-hover').hover(function(){
  $(this).toggleClass('hover')
})

//scroll()
// ex : 윈도우 창 스크롤 할 경우
$(window).scroll(function(){
  console.log('scroll');
})



//keydown()
$('.input-key').keydown(function(e){
  if(e.code === 'ArrowUp'){
    console.log('up');
  }else if(e.code==='ArrowDown'){
    console.log('down')
  }else if (e.code === 'ArrowRight'){
    console.log('오른쪽으로 이동')
  }  else if (e.code === 'ArrowLeft'){
    console.log('왼쪽으로 이동')
  }else{
    console.log('other')
  }


})

//jquery 검색어 검색해서 원하는 기능 검색하기