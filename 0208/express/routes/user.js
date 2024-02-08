const express = require('express');
const controller = require('../controller/user');

const router = express.Router();

router.get('/', controller.main); //페이지
router.post('/register', controller.register); //데이터요청,응답

module.exports = router;
