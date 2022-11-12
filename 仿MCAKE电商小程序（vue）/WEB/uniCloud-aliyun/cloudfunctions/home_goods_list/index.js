'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {

	const {
		action
	} = event

	let res = {}

	const collection = db.collection('home_goods_list');

	if (action === "French") {
		res = await collection.where({
			detail: "法式"
		}).get()
	}else if (action === "Festival"){
		res = await collection.where({
			detail: "节日"
		}).get()
	}else if(action === "Children"){
		res = await collection.where({
			detail: "儿童"
		}).get()
	}

	console.log(JSON.stringify(res))
	
	return {
		code: 200,
		data: res.data
	}
};
