//this를 저장하기위한 전역변수
let target;


$('td > p').on('click', function(){
  console.log(this);

  //날짜만 가져오기 위한 this의 text값
  //console.log($(this).text());

  let date = $(this).text();
  $('#date').val(date)

  target = this

})

function writeSchedule(){
  let content = $('#content').val();
 // console.log(content)

  console.log('target',target);
  console.log('parent',$(target).parent());
  $(target).parent().append(`<span>${content}</span>`)

  $('#content').val('')
  $('#date').val('')
}