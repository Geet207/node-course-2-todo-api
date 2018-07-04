const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });


Todo.findOneAndRemove({_id: '5b3b6d28f85f341e2c43fa6a'}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndRemove('5b3b6d14f85f341e2c43fa5d').then((todo) => {
	console.log(todo);
});