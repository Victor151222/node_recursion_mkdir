// 创建层级目录

const fs = require('fs');
const path = require('path');

// 创建文件，定义模块成员，导出模块成员，载入模块，使用模块

function mkdirs(pathname, callback) {
  // module.parent 拿到的是调用我的对象
  // 此处不能直接用__dirname，一旦mkdirs.js与调用它的文件不在一个目录下会报错。
  // console.log(module.parent);
  var root = path.dirname(module.parent.filename);
  // 判断传入的是否是一个绝对路径
  pathname = path.isAbsolute(pathname) ? pathname : path.join(root, pathname)
  // 获取要创建的部分
  var relativepath = path.relative(root, pathname);
  // 分割要创建的部分
  var folders = relativepath.split(path.sep);

  try {
    var pre = '';
    folders.forEach(folder => {
      // fs.existsSync 已过时 用fs.existsSync代替    
      // if (!fs.existsSync(path.join(root, pre, folder))) {
      //   // 文件目录不存在
      //   fs.mkdirSync(path.join(root, pre, folder));
      // }
      try {
        // 如果不存在则报错
        fs.statSync(path.join(root, pre, folder));
      } catch (error) {
        fs.mkdirSync(path.join(root, pre, folder));
      }

      pre = path.join(pre, folder);
    });
    callback && callback(null);
  } catch (error) {
    callback && callback(error);
  }
}

// module.exports = { mkdirs };
module.exports = mkdirs;


