var locationController = function(location){

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
        
        location.find(Query, function(err, locations){

        if(err)
          res.status(500).send(err);
        else
          res.json(locations);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var location1 = new location({         
          locationname : req.body.name,
          fulladdress :    req.body.fulladdress    ,
          email :  req.body.email,
          phone : req.body.phone,
          resturantID :  req.body.resturantID,         
          menuID :   req.body.menuID
         });

          location1.save(function (err, createdTodoObject) {  
    if (err) {
        res.send(err);
    }  
    res.status(201).send(createdTodoObject);
});

    	}

     return {
 	   get: get,
 	   post: post
     }

}

module.exports = locationController;