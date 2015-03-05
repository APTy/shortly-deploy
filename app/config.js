// var Bookshelf = require('bookshelf');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/shortly');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {

  // var Schema = mongoose.Schema;
  // var ObjectId = Schema.ObjectId;

  // var userSchema = new Schema({
  //   id: ObjectId,
  //   username: {type: String, unique: true},
  //   password: String
  // });

  // var urlSchema = new Schema({
  //   id: ObjectId,
  //   url: String,
  //   base_url: String,
  //   code: String,
  //   title: String,
  //   visits: Number
  // });

  // userSchema.methods.comparePassword = function(attemptedPassword, callback) {
  //   console.log('compare password');
  //   // if (attemptedPassword === this.password) {
  //   //   callback(true);
  //   // }
  // };

  // var User = mongoose.model('User', userSchema);
  // var Url = mongoose.model('Url', urlSchema);

  // exports.Url = Url;
  // exports.User = User;
  exports.db = db;
// });


// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function(){
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function(){
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });


// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

