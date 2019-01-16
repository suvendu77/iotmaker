var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var shopingCartSchema = new Schema({ 
  resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant'},
  locationID: {type: mongoose.Schema.Types.ObjectId, ref: 'location'}, 
  customerID:   {type: mongoose.Schema.Types.ObjectId, ref: 'User'} ,
  menuitemID: {type: mongoose.Schema.Types.ObjectId, ref: 'menuitem'}, 

  quantity: {type: Number}  
});

 module.exports = mongoose.model('shopingCart', shopingCartSchema);