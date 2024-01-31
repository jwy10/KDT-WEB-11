const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views')

//정적 파일 불러오기
app.use('/public', express.static(__dirname + '/public'))


//localhost:8000/
app.get('/', (req, res) => {
  //send() 클라이언트에 응답데이터를 보낼때
  res.send("Hello Express")
})

app.get('/kdt', (req, res) => {
  //render() 뷰 엔진 렌더링
  res.render('test', { name: '홍길동' });
})

app.get('/prac', (req, res) => {
  res.render("prac", { data: 2, dan: 5, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
})

app.get('/fruits', (req, res) => {
  res.render('fruits', {
    fruit: [{ name: 'apple', kor: '사과' }
      , { name: 'banana', kor: '바나나' }
      , { name: 'grape', kor: '포도' }
      , { name: 'peach', kor: '복숭아' }]
  })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})