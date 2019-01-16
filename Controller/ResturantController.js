var returantController = function(resturant){

  var get = function(req, res)
  {  
       //var UserId = req.query.UserId;
        var Query = {};
        if(req.query.customerID)
        {
          Query.customerID = req.query.customerID;
        }
        else{
            res.status(400).send("Customer ID is missing");
        }

        resturant.find(Query, function(err, resturants){

        if(err)
          res.status(500).send(err);
        else
          res.json(resturants);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var resturant1 = new resturant({         
          name : req.body.name ,
          aboutus: req.body.aboutus,
          logopath : req.body.logopath,    
          customerID: req.body.customerID
         });
           
            resturant1.save();
            res.status(201);
            res.send(resturant1);
           
    	}

     return {
 	   get: get,
 	   post: post
     }

}

module.exports = returantController;