'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {

	const collection = db.collection('tools-goods');

	const res = await collection.where({
		pageindex:event.pageindex
	}).get()

	console.log(JSON.stringify(res))
	
	return {
		code: 200,
		data: res.data
	}
};
