var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect('mongodb://localhost/poem').then(() => {
    console.log('MongoDB connect success!');
}, () => {
    console.log('MongoDB connect failed!');
});

module.exports = mongolass;