1. 模块编程

   创建文件，定义模块成员，导出模块成员，载入模块，使用模块。

   导出模块有两种方式：

   - 把方法挂载在exports对象上

     ```node.js
     exports.list = (args) => {}
     const mkdirs = require('./mkdirs'); // 其他模块这样导入它

     mkdirs.list(); // 其他模块这样使用它。
     ```

   - 直接覆盖exports对象

     ```node.js
     module.exports = mkdirs;

     const mkdirs = require('./mkdirs'); // 其他模块这样导入它

     mkdirs(,,,); // 其他模块这样使用它。因为它直接是个函数，所以可以直接使用。
     ```

     ```node.js
     module.exports = { mkdirs };
     const mkdirs = require('./mkdirs'); // 其他模块这样导入它

     mkdirs.mkdirs(...); // 其他模块这样使用它。
     ```

2. `folders.forEach()`循环不会造成阻塞，只有那些事件造成阻塞。

   ```node.js
   folders.forEach(folder => { console.log('each ing') });
   console.log('each end');
   // 这样会按顺序执行
   ```

   ```node.js
   folders.forEach(folder => { fs.mkdir(..) });
   console.log('each end');
   // 这里的forEach()里面有mkdir()异步事件，所以会有阻塞，导师顺序紊乱。
   // 改为fs.mkdirSync()同步方式，就可以防止顺序紊乱了。
   ```

3. `__dirname`只是获取当前文件所在的目录，使用时需谨慎。

