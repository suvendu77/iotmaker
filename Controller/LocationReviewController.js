var locationReviewController = function(locationReview){

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
        
        locationReview.find(Query, function(err, locationReviews){

        if(err)
          res.status(500).send(err);
        else
          res.json(locationReviews);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var locationReview1 = new locationReview({ 
        resturantID: req.body.resturantID , 
        locationID: req.body.locationID,
        customerID: req.body.customerID,               
        rating :  req.body.rating,
        reviewComment:  req.body.reviewComment
         });

          locationReview1.save(function (err, createdTodoObject) {  
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

module.exports = locationReviewController;