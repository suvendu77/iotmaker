var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var menuSchema = new Schema({
  name:  {type:String},
  description:   {type:String} ,
  menuitems: [{type: mongoose.Schema.Types.ObjectId, ref: 'menuitem'}], 
  resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant'}, 
});

 module.exports = mongoose.model('menu', menuSchema);