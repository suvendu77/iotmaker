var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


//Genre Schema

var resturanSchema = new Schema({

   name:{
        type:String

    },
    aboutus : { type : String , require : true},
    logopath : {type : String},
    customerID:   {type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser',  require : true} , 
     
});

 module.exports = mongoose.model('resturant', resturanSchema);