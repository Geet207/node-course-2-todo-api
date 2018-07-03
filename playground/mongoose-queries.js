const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b38f105008d907414cca766';

// if(!ObjectID.isValid(id)){
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id : id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id : id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var user_id = '5b2930b0b065e7440fcfad75';
User.findById(user_id).then((user) => {
	if(!user){
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));