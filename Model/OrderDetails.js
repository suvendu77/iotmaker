var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var orderDetailSchema = new Schema({ 
  orderID: {type: mongoose.Schema.Types.ObjectId, ref: 'order'},
  menuitemID: {type: mongoose.Schema.Types.ObjectId, ref: 'menuitem'}, 
  itemPtice: Number,
  itemCurrercy:String,
  totalPrice : Number,
  quantity: {type: Number}  
});

 module.exports = mongoose.model('orderDetail', orderDetailSchema);