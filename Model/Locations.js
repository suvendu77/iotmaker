var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


//Genre Schema

var locationSchema = new Schema({

   locationname:{
        type:String
    }  , 
   fulladdress:{
        type:String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    resturantID: {type: mongoose.Schema.Types.ObjectId, ref: 'resturant'},
    menuID:  {type: mongoose.Schema.Types.ObjectId, ref: 'menu'} ,  
});

 module.exports = mongoose.model('location', locationSchema);