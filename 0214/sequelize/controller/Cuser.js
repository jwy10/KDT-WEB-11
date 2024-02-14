const User = require('../model/Muser')
const { Member } = require('../models')
const { Op } = require('sequelize')

//회원가입
exports.signup = async (req, res) => {
  console.log(req.body);
  // const result = await User.signup(req.body);
  // console.log('signup', result)
  const { id, pw, username } = req.body;
  Member.create({ userid: id, password: pw, username }).then(() => {
    res.json({ result: true });
  });

};

//로그인
exports.Clogin = async (req, res) => {
  // console.log(req.body);
  // const result = await User.Mlogin(req.body);
  // console.log('login', result);
  const { id, pw } = req.body
  Member.findOne({ where: { userid: id, password: pw } }).then((result) => {
    console.log('login', result);
    if (result !== null) {
      res.json({ result: true, message: '로그인 성공', id: result.id })
    } else {
      res.json({ result: false, message: '로그인 실패', id: null });
    }
  })
}
//회원정보조회
exports.Cinfo = async (req, res) => {
  // console.log(req.params.id);
  // const result = await User.Minfo(req.params.id);
  // console.log('info', result);
  // if (result.length > 0) {
  //   res.json({ result: true, info: result[0], message: '회원존재' })
  // } else {
  //   res.json({ result: false, info: null, message: '존재하는 회원없음' })
  // }
  Member.findOne({ where: { id: req.params.id } }).then(result => {
    if (result !== null) {
      res.json({ result: true, info: result[0], message: '회원존재' })
    } else {
      res.json({ result: false, info: null, message: '존재하는 회원없음' })
    }
  })
};

//회원정보 전체
exports.Call = async (req, res) => {
  Member.findAll({
    //attributes: 원하는 컬럼 조회
    attributes: ['username', 'userid'],
    // where: {id : 3}
    //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
    //Op.or(또는), Op.ne(같지않음) Op.in(배열 요소중 하나), Op.notin(배열요소와 모두 다름)
    where: { id: { [Op.gte]: 3 } },
    order: [['id', 'DESC']],
    limit: 2,
    offset: 2,
  }).then((result) => {
    console.log(result)
    res.json({ result });
  })
};

//회원정보 수정
exports.Cupdate = async (req, res) => {
  // const result = await User.Mupdate(req.body);
  const { id, username, pw } = req.body;
  Member.update({ username, password: pw }, { where: { id: id } }).then(result => {
    console.log('update', result);
    res.json({ result: true });
  });

}


//회원정보 삭제
exports.Cdelete = async (req, res) => {
  // const result = await User.Mdelete(req.body);
  Member.destroy({ where: { id: req.body.id } }).then(result => {
    console.log('delete', result);
    res.json({ result: true });
  })

}