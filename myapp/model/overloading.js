// 制作js函数重载
let overloading = function (obj, mtdName, fn) {
  let old = obj[mtdName];
  obj[mtdName] = function () {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments)
    } else if (typeof old === 'function') {
      return old.apply(this, arguments)
    }
  };
}

module.exports = overloading;