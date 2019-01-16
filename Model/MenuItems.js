var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var menuitemSchema = new Schema({
  name:  {type:String},
  description:   {type:String} ,
  price:  {type:Number},
  currency: {type:String},
  rating:  {type:Number} , 
  picturepath:  {type:String}, 
  isSpecial :{type : Boolean},
  categotyID:  {type: mongoose.Schema.Types.ObjectId, ref: 'menuitem'} ,  
  resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant'}, 
});

 module.exports = mongoose.model('newmenuitem', menuitemSchema);