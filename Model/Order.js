var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var orderSchema = new Schema({
  orderDate:  {type: Date, default: Date.now},
  totalQuantity:   {type:String} ,
  totalprice:  {type:Number},
  currency: {type:String}, 
  status :{type : String, default:'pending'},
  customerID:   {type: mongoose.Schema.Types.ObjectId, ref: 'User'} ,
  resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant'}, 
  locationID: {type: mongoose.Schema.Types.ObjectId, ref: 'location'}, 
});

 module.exports = mongoose.model('order', orderSchema);