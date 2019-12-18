let mongolass = require('../mongo');
let Word = mongolass.model('word', {
    // 成语
    word: {
        type: 'string'
    },
    // 解释
    explanation: {
        type: 'string'
    },
});

module.exports = Word;