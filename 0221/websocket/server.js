const express = require('express');
const http = require('http');
const app = express();
const ws = require('ws')
const PORT = 8000;
//http서버
const server = http.createServer(app);
//웹소켓 서버연결
const wss = new ws.Server({server:server})

//미들웨어
// app.set('view engine', 'ejs')

//라우터
app.get('/', (req,res)=>{
  res.render('client')
});

server.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`)
});


//웹소켓
//브라우저(클라이언트)들을 담을 배열 변수
const sockets = []
wss.on('connection',(socket)=>{
  //socket매개변수는 접속한 브라우저
  console.log(wss.clients);
  console.log('클라이언트가 연결되어습니다')

  //메세지이벤트
  socket.on('message',(message)=>{
    //웹소켓을 통해 클라이언트와 서버간의 데이터를 주고받을때는 일반적으로 문자열 또는 버퍼형태로 전달함
    //서버가 모두 다른 환경이기 때문애 객체를 전달할때는 객체를 일렵의 바이트로 변환할때 직렬화과정이 
  })
})