var hoursOfOperationsController = function(hoursOfOperations){

  var get = function(req, res)
  {  
       //var UserId = req.query.UserId;
        var Query = {};
        if(req.query.locationID)
        {
          Query.locationID = req.query.locationID;
        }
        else{
            res.status(400).send(err);
        }
        
        hoursOfOperations.find(Query, function(err, hoursOfOperations){

        if(err)
          res.status(500).send(err);
        else
          res.json(hoursOfOperations);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var hoursOfOperations1 = new hoursOfOperations({ 
        mon_open:  req.body.mon_open, mon_close:  req.body.mon_close ,
        tue_open : req.body.tue_open, tue_close:   req.body.tue_close, 
        wed_open:  req.body.wed_open, wed_close:   req.body.wed_close ,
        thu_open:  req.body.thu_open, thu_close:  req.body.thu_close ,
        fri_open: req.body.fri_open, fri_close:   req.body.fri_close ,
        sta_open:  req.body.sta_open, sta_close:  req.body.sta_close ,
        sun_open:  req.body.sun_open, sun_close:  req.body.sun_close,
        resturantID :  req.body.resturantID,
        locationID :  req.body.locationID
    });

          hoursOfOperations1.save(function (err, createdTodoObject) {  
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

module.exports = hoursOfOperationsController;