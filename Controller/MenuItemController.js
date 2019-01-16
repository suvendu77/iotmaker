var menuItemController = function(menuItem){

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
        
        menuItem.find(Query, function(err, menuItems){

        if(err)
          res.status(500).send(err);
        else
          res.json(menuItems);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var menuitem1 = new menuItem({         
           
        name:  req.body.name,
        description:  req.body.description ,
        price: req.body.price,
        currency: req.body.currency,
        rating: req.body.rating , 
        picturepath: req.body.picturepath , 
        isSpecial :req.body.isSpecial ,
        categotyID:   req.body.categotyID , 
        resturantID :  req.body.resturantID     
         
         });

          menuitem1.save(function (err, createdTodoObject) {  
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

module.exports = menuItemController;