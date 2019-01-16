var menuItemReviewController = function(menuItemReview){

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

        if(req.query.menuitemID)
        {
          Query.menuitemID = req.query.menuitemID;
        }
        else
        {
            res.status(400).send(err);
        }
        
        menuItemReview.find(Query, function(err,  menuItemReviews){

        if(err)
          res.status(500).send(err);
        else
          res.json(menuItemReviews);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var menuItemReview1 = new menuItemReview({ 
        resturantID: req.body.resturantID , 
        locationID: req.body.locationID,
        menuitemID : req.body.menuitemID,
        customerID: req.body.customerID,               
        rating :  req.body.rating,
        reviewComment:  req.body.reviewComment
         });

          menuItemReview1.save(function (err, createdTodoObject) {  
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

module.exports = menuItemReviewController;