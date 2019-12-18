let mongolass = require('../mongo');
const Mongo = require('mongolass')

let Idiom = mongolass.model('idiom', {
    // 成语
    word: {
        type: 'string'
    },
    // 拼音
    spell: {
        type: 'string'
    },
    // 起源
    derivation: {
        type: 'string'
    },
    // 解释
    explanation: {
        type: 'string'
    },
    // 示例
    example: {
        type: 'string'
    },
    // 示例
    type: {
        type: 'string'
    },
});
// Idiom.index({
//     word: 1,
// }, {
//     unique: true
// }).exec();

module.exports = Idiom;