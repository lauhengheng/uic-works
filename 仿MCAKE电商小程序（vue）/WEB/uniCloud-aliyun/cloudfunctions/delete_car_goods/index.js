'use strict';

const db = uniCloud.database();
exports.main = async (event, context) => {
	
	const collection = db.collection('cakes-sum');
	const dbCmd = db.command
	let res = await collection.where({
		title: event.title
	}).get()

	console.log(JSON.stringify(res))
	
	return {
		code: 200,
		data: res.data
	}
};
