var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var hoursOfOperationsSchema = new Schema({

  mon_open:  {type:Number}, mon_close:   {type:Number} ,
  tue_open:  {type:Number}, tue_close:  {type:Number} , 
  wed_open:  {type:Number}, wed_close:  {type:Number} ,
  thu_open:  {type:Number}, thu_close:  {type:Number} ,
  fri_open:  {type:Number}, fri_close:  {type:Number} ,
  sta_open:  {type:Number}, sta_close:  {type:Number} ,
  sun_open:  {type:Number}, sun_close:  {type:Number} ,
  resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant'},
  locationID: {type: mongoose.Schema.Types.ObjectId, ref: 'location'}
});

 module.exports = mongoose.model('hoursOfOperations', hoursOfOperationsSchema);