let Poem = require('../model/poem');

module.exports = {
	addOneItem: (item) => {
		return Poem.create(item).exec().catch(console.error);
	},
	updateOneById: (id, data) => {
		return Poem.update({
			_id: id
		}, {
			$set: data
		}).exec()
	},
	getPoemByname: (name) => {
		return Poem.findOne({
			name: name
		}).exec();
	},
	getAll: () => {
		return Poem.find({}).exec();
	},
	getOneByIndex: (_index) => {
		if (!isNaN(_index)) {
			_index = parseInt(_index);
		}
		return Poem.find({}).skip(_index).limit(1).exec();
	}
};