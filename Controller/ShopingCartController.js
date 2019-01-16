var shopingCartController = function(shopingCart){

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
        
        shopingCart.find(Query, function(err, shopingCarts){

        if(err)
          res.status(500).send(err);
        else
          res.json(shopingCarts);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var shopingCart1 = new shopingCart({  
        customerID: req.body.customerID,
        menuitemID: req.body.menuitemID, 
        quantity : req.body.quantity,
        resturantID: req.body.resturantID,
        locationID : req.body.locationID
         });

          shopingCart1.save(function (err, createdTodoObject) {  
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

module.exports = shopingCartController;