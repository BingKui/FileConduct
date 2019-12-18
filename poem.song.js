// 引入使用模块
const fs = require('fs');
require('./mongo');
// 引入相应控制器
const PoemController = require('./controller/poem');
// 处理诗词文件

const dealPoet = () => {
    forLoop(254000, 'song');
};

const forLoop = (max, name) => {
    for (let i = 0; i <= max; i+= 1000) {
        (() => {
            const _file = `./file/poet.${name}.${i}.json`;
            if (fs.existsSync(_file)) {
                setTimeout(() => {
                    fileRead(_file, (err, data) => {
                        if (err) throw err;
                        dealData(data);
                    });
                }, i);
            } else {
                console.log('执行完成');
            }
        })(i, name);
    }
}
const fileRead = (path, callback) => {
    fs.readFile(path, {encoding: 'utf-8'}, callback);
}

const dealData = (data) => {
    const _data = JSON.parse(data);
    _data.map(item => {
        if (item.title.length > 10 || item.paragraphs.length !== 4) {
            return;
        }
        console.log(`添加==>${item.title}...`);
        PoemController.addOneItem(item);
    });
}

dealPoet();
