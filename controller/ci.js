let Word = require('../model/ci');

module.exports = {
	addOneItem: (item) => {
		return Word.create(item).exec().catch(console.error);
	},
};