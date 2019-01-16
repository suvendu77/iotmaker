var tableBookingController = function(tableBooking){

  var get = function(req, res)
  {  
       //var UserId = req.query.UserId;
        var Query = {};
        if(req.query.resturantID)
        {
          Query.resturantID = req.query.resturantID;
        }
        else{
            res.status(400).send(err);
        }

        if(req.query.customerID)
        {
          Query.customerID = req.query.customerID;
        }
        else
        {
            res.status(400).send(err);
        }
       
        
        tableBooking.find(Query, function(err,  tableBookings){

        if(err)
          res.status(500).send(err);
        else
          res.json(tableBookings);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var tableBooking1 = new tableBooking({ 
        resturantID: req.body.resturantID , 
        locationID: req.body.locationID,
        customerID: req.body.customerID,               
        reservationTime  :  req.body.reservationTime ,
        headCount:  req.body.headCount,
        specialRequest : req.body.specialRequest,        
         });

          tableBooking1.save(function (err, createdTodoObject) {  
    if (err) {
        res.send(err);
    }  
    res.send(createdTodoObject);
});

    	}

     return {
 	   get: get,
 	   post: post
     }

}

module.exports = tableBookingController;