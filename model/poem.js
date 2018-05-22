let mongolass = require('../mongo');
const Mongo = require('mongolass')

let Poem = mongolass.model('poem', {
    author: {
        type: 'string'
    },
    paragraphs: [{
        type: 'string'
    }],
    strains: [{
        type: 'string'
    }],
    title: {
        type: 'string'
    }
});
// Poem.index({
//     title: 1,
//     author: 1
// }, {
//     unique: true
// }).exec();

module.exports = Poem;