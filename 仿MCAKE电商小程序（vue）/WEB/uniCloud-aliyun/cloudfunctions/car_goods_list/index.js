'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {

	const collection = db.collection('car_goods');

	const res = await collection.get()

	console.log(JSON.stringify(res))
	
	return {
		code: 200,
		data: res.data
	}
};
