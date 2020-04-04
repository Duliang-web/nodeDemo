let overloading = require('./overloading.js');

let mysql = require('mysql');
let db = {};

// 获取数据库连接
db.connection = function () {
  // 数据库配置
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'li975318',
    database: 'nodedemo',
    port: 3306
  });
  // 数据库连接
  connection.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('开启连接');
    }
  });
  return connection;
};

// 关闭数据库
db.close = function (connection) {
  // 关闭连接
  connection.end(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('关闭连接');
    }
  });
};

// 不传参数时数据库操作
overloading(db, 'query', function (connection, sql, callback) {
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    callback(results);
  });
})

// 传参数时数据库操作
overloading(db, 'query', function (connection, sql, params, callback) {
  connection.query(sql, params, function (error, results, fields) {
    if (error) throw error;
    callback(results);
  });
})

module.exports = db;