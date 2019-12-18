var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect('mongodb://127.0.0.1:27017/mini').then(() => {
    console.log('MongoDB connect success!');
}, () => {
    console.log('MongoDB connect failed!');
});

module.exports = mongolass;