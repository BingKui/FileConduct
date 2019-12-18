// 引入使用模块
const fs = require('fs');
require('./mongo');
// 引入相应控制器
const IdiomController = require('./controller/idiom');
// 处理成语文件

const fileRead = (path, callback) => {
    fs.readFile(path, {encoding: 'utf-8'}, callback);
}

const getType = (word) => {
    const arr = word.split('');
    if (arr.length > 4) {
        return 'L';
    }
    // AABB
    if (arr[0] === arr[1] && arr[2] === arr[3]) {
        return 'AABB';
    }
    // ABAB
    if (arr[0] === arr[2] && arr[1] === arr[3]) {
        return 'ABAB';
    }
    // ABAC
    if (arr[0] === arr[2]) {
        return 'ABAC';
    }
    // ABCC
    if (arr[2] === arr[3]) {
        return 'ABCC';
    }
    // AABC
    if (arr[0] === arr[1]) {
        return 'AABC';
    }
    return 'ABCD';
};


const dealData = (data) => {
    const _data = JSON.parse(data);
    return _data.map((item, index) => {
        (() => {
            setTimeout(() => {
                console.log(`添加成语 ==> ${index}个 ${item.word}`);
                IdiomController.addOneItem({
                    word: item.word,
                    // 拼音
                    spell: item.pinyin,
                    // 起源
                    derivation: item.derivation.replace(/\u201d/, ''),
                    // 解释
                    explanation: item.explanation,
                    // 示例
                    example: item.example,
                    // 类别
                    type: getType(item.word),
                });
            }, index * 2);
        })(index, item);
    });
}

fileRead('./json/idiom.json', (err, data) => {
    if (err) throw err;
    return dealData(data);
});