var ownerTableBookingController = function(tableBooking){

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

        if(req.query.locationID)
        {
          Query.locationID = req.query.locationID;
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

     return {
 	   get: get 	
     }

}

module.exports = ownerTableBookingController;