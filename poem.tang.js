// 引入使用模块
const fs = require('fs');
require('./mongo');
// 引入相应控制器
const PoemController = require('./controller/poem');
// 处理诗词文件

const dealPoet = () => {
    forLoop(57000, 'tang');
};

const forLoop = (max, name) => {
    for (let i = 0; i <= max; i+= 1000) {
        (() => {
            setTimeout(() => {
                const _file = `./file/poet.${name}.${i}.json`;
                fileRead(_file, (err, data) => {
                    if (err) throw err;
                    dealData(data);
                });
            }, i);
        })(i, name);
    }
}
const fileRead = (path, callback) => {
    fs.readFile(path, {encoding: 'utf-8'}, callback);
}

const dealData = (data) => {
    const _data = JSON.parse(data);
    _data.map(item => {
        console.log(`添加==>${item.title}...`);
        PoemController.addOneItem(item);
    });
}

dealPoet();
