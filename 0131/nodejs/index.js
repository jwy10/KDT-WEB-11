// const a = 10;
// const b = 20;

// // 하나의 모듈 파일에 하나의 모듈 만들기
// function connect(){
//   //로직
//   return a+ b;
// }

// module.exports = connect;

//하나의 모듈파일에 여러개 모듈 만들기
// const a = "a 변수"
// const b = "b 변수"
// const c = 20;

// module.exports = {a,b,c};

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
  // res.writeHead(200);
  // res.write('<h1>Hello Nodejs</h1>');
  // res.end('<p>End</p>');

  //파일전송
  //try,catch : 싱글 쓰레드에서 오류처리를 할 때 사용
  try {
    const data = fs.readFileSync('./index.html')
    res.writeHead(200)
    res.end(data);
  } catch (error) {
    console.log(error);
    res.writeHead(404);
    res.end(error.message);
  }
})

// server.on('request', function(){
//   console.log('요청 이벤트')
// })

// server.on('connection',function(){
//   console.log('접속 이벤트')
// })

//listen: 서버를 실행
server.listen(8000, function(){
  console.log('8000번 포트 실행');
})