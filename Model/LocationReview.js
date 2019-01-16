var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var locationReviewSchema = new Schema({ 
  reviewDate:  {type: Date, default: Date.now},
  resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant'},
  locationID: {type: mongoose.Schema.Types.ObjectId, ref: 'location'},
  customerID:   {type: mongoose.Schema.Types.ObjectId, ref: 'User'} ,  
  rating: {type: Number, min:0, max: 5}  ,
  reviewComment: {type:String, max :250 }
});

 module.exports = mongoose.model('locationReview', locationReviewSchema);