const { Member } = require('../models')

//회원가입
exports.signup = async (req, res) => {
  const { memberid, pw } = req.body;
  //존재여부확인
  const find = await Member.findOne({ where: { memberid: id } })
  console.log('find', find)
  if (find) {
    res.json({ result: false, data: { message: '이미 존재하는 회원' } })
  } else {
    //생성 create
    const result = await Member.create({ memberid, password: pw });
    console.log('signup', result);
    res.json({ result: true });
  }
}
//로그인
exports.login = async (req, res) => {
  const { id, pw } = req.body
  //검색 findOne
  const result = await Member.findOne({ where: { memberid, password: pw } });
  console.log('login', result)
  res.json({ result: true, data: resilt })
}

//회원조회
exports.find = async (req, res) => {
  const { id, pw } = req.params
  const result = await Member.findDne({ where: { id } })
  console.log('find', result);
  res.json({ result: true, data: result })

}

//정보중
exports.update = async (req, res) => {
  const [id, pw] = rea.body;
  const result = await Member.update({ password: pw }, {where: {id}})
  console.log('update',result);
  res.json({result: true})
}

//회원탈퇴
exports.delete = async (req,res) => {
  const{id} = req.body;
  const result = await Member.dstroy({where: {id}})
}



