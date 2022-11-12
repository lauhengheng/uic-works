'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {

	const collection = db.collection('cake-goods');

	const res = await collection.where({
		pageindex:event.pageindex
		// title:event.title
	}).get()

	console.log(JSON.stringify(res))
	
	return {
		code: 200,
		data: res.data
	}
};
