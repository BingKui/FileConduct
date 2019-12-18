// 引入使用模块
const fs = require('fs');
require('./mongo');
// 引入相应控制器
const Controller = require('./controller/ci');
// 处理成语文件

const fileRead = (path, callback) => {
    fs.readFile(path, {encoding: 'utf-8'}, callback);
}

const dealData = (data) => {
    const _data = JSON.parse(data);
    return _data.map((item, index) => {
        (() => {
            setTimeout(() => {
                console.log(`添加词语 ==> ${index + 1}个 ${item.ci}`);
                Controller.addOneItem({
                    word: item.ci,
                    // 解释
                    explanation: item.explanation,
                });
            }, index * 2);
        })(index, item);
    });
}

fileRead('./json/ci.json', (err, data) => {
    if (err) throw err;
    return dealData(data);
});