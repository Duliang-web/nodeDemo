var express = require('express');
var router = express.Router();

let db = require('../model/db.js');
/**
 * 登录
 * @param account {string} 账号
 * @param user_password {string} 密码
 */
router.post('/login', (req, res) => {
  let params = req.body;

  let connection = db.connection();
  db.query(connection, 'SELECT * FROM user WHERE user_name = ? AND user_password = ?', [params.account, params.user_password], (result) => {
    if (!result.length) {
      res.json({
        status: 1,
        msg: 'error',
        data: {}
      })
    } else {
      res.json({
        status: 0,
        msg: 'success',
        data: {}
      })
    }
  })
  db.close(connection);
  // if (params.account === 'lijinze' && params.user_password === '123456') {
  //   res.json({
  //     status: 0,
  //     msg: 'success',
  //     data: {}
  //   })
  // } else {
  //   res.json({
  //     status: 1,
  //     msg: 'error',
  //     data: {}
  //   })
  // }
});

module.exports = router;
