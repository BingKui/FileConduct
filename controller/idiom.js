let Idiom = require('../model/idiom');

module.exports = {
	addOneItem: (item) => {
		return Idiom.create(item).exec().catch(console.error);
	},
	updateOneById: (id, data) => {
		return Idiom.update({
			_id: id
		}, {
			$set: data
		}).exec()
	},
	getIdiomByname: (name) => {
		return Idiom.findOne({
			name: name
		}).exec();
	},
	getAll: () => {
		return Idiom.find({}).exec();
	},
	getOneByIndex: (_index) => {
		if (!isNaN(_index)) {
			_index = parseInt(_index);
		}
		return Idiom.find({}).skip(_index).limit(1).exec();
	}
};