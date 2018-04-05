const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


const { ObjectID } = require('mongodb');

Todo.findOneAndRemove({ _id: '5ac64e83f32c6a4328625f85' }).then((todo) => {

});

Todo.findByIdAndRemove('5ac64e8df32c6a4328625f86').then((todo) => {
    console.log(todo);
});