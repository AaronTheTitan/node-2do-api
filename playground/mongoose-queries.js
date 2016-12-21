const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// var id = '585af0e23f68282200e21154';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo);
// // });

// Todo.findById(id)
//     .then((todo) => {
//         if (!todo) {
//             return console.log('Id not found');
//         }
//         console.log('Todo by id ', todo);
//     }).catch((e) => console.log(e));


// User.findById
User.findById('585ad4575a44d3b3bd1168d9').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, () => {
    console.log(e);
});