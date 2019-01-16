var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var tableBookingSchema = new Schema({ 
  resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant', required: true},  
  locationID: {type: mongoose.Schema.Types.ObjectId, ref: 'location',  required: true}, 
  customerID: {type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true} ,
  tableBookingTime : {type: Date, default:Date.now} ,
  reservationTime : { type:Date, default:Date.now},
  headCount: {type: Number,  required: true} ,
  specialRequest: String ,
  status:{ type:String, default: 'Pending'}
});

 module.exports = mongoose.model('tableBooking', tableBookingSchema);