// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//delete Many
	// db.collection('Todos').deleteMany({text: 'Have lunch'}).then((result) => {
	// 	console.log(result);
	// });
	//delete One
	// db.collection('Todos').deleteOne({text: 'Have lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//find One and Delete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });
	

	// db.collection('Users').deleteMany({name: 'Geeta Singh'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteOne({
	// 	_id: new ObjectID('5b28a3e35662fe1157a4fc06')
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({location: 'Gurgaon'}).then((result) => {
		console.log(result);
	});

	//db.close();
});