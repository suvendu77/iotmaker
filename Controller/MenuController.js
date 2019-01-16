var menuController = function(menu){

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
        
        menu.find(Query, function(err, menus){

        if(err)
          res.status(500).send(err);
        else
          res.json(menus);

        });
    }

     var post = function(req, res){    
       console.log(req.body);
         var menu1 = new menu({        
        name:  req.body.name,
        description:  req.body.description ,  
        menuitems:req.body.menuitems, 
        resturantID :  req.body.resturantID     
         
         });

          menu1.save(function (err, createdTodoObject) {  
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

module.exports = menuController;