var mongoose = require('mongoose');

const dbUrl = "mongodb://abeezy:abeezy123ez@ds053764.mlab.com:53764/node_todo_api";

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp');
mongoose.connect(dbUrl || 'mongodb://localhost:27017/TodoApp');

module.exports.mongoose = { mongoose };
