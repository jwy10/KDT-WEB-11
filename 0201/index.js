const express = require('express')
const app = express()
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true})); //x-www-form-urlencoded방식
app.use(express.json()) //json 방식
app.set('view engine', 'ejs');
app.set('views','./views')

//router
app.get('/',(req, res)=>{
  res.render('index');

});

app.get('/getForm', (req,res) => {
  //get 방식일 때
  console.log(req.query)
  res.render('result',{ title: 'GET요청 결과',userInfo: req.query })
})

app.post('/postForm', (req,res) => {
  //post방식일때
  console.log(req.body);
  res.render('result',{ title: 'POST요청 결과',userInfo: req.body })
})

//서버실행
app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`);
})

