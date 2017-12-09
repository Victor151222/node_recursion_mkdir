// 通过自定义模块创建多层目录

var path = require('path');
var mkdirs = require('./module/mkdirs');

// mkdirs(path.join(__dirname, 'f1/f2/f3'), (err) => { console.log(err); });

// mkdirs('./f1/f2/f3/f4/f5', (err) => { console.log(err); });
