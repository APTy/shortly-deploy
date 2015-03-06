var db = require('../config');
var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;


var urlSchema = new Schema({
  id: Schema.ObjectId,
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

urlSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function(){
//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });
