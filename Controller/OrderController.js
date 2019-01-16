var orderController = function(order,shopingCart, orderDetail,menuitem){

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
        
        order.find(Query, function(err, orders){

        if(err)
          res.status(500).send(err);
        else
          res.json(orders);

        });
    }

     var post = function(req, res){    
        console.log(req.body);
        var Query = {};
        if(req.body.resturantID)
        {
          Query.resturantID = req.body.resturantID;
        }
        else{
            res.status(400).send(err);
        }
        
        if(req.body.locationID)
        {
          Query.locationID = req.body.locationID;
        }
        else{
            res.status(400).send(err);
        }
        

         if(req.body.customerID)
        {
          Query.customerID = req.body.customerID;
        }
        else{
            res.status(400).send(err);
        }
       
        shopingCart.find(Query, function(err, shopingCarts){
        if(shopingCarts.length > 0)
            {
            var order1 = new order({  
            customerID: req.body.customerID,      
            resturantID: req.body.resturantID,
            locationID :  req.body.locationID,      
            });
        
            
            order1.save(function (err, createdTodoObject) {  
                if (err) {
                    res.send('creation of order failed');
                }  
                var totalOroderPrice = 0;
            
                    for( i = 0; i < shopingCarts.length; i++)
                    {
                        var quantity =  shopingCarts[i].quantity;
                        menuitem.findOne({ '_id': shopingCarts[i].menuitemID },function (err, mymenuitem)
                    ////var mymenuitem = menuitem.findOne({ '_id': shopingCarts[i].menuitemID });
                        {
                            if (err) {
                                    createdTodoObject.remove();
                                    res.send('Did not find menu item');
                                }
                            console.log( mymenuitem.price);
                        /// console.log( shopingCarts[i].quantity);

                            var orderDetail1 = new orderDetail({  
                            orderID : createdTodoObject._id,
                            menuitemID: mymenuitem._id,
                            itemPtice:mymenuitem.price,
                            itemCurrercy:mymenuitem.currency,
                            totalPrice: mymenuitem.price *  quantity,
                            quantity :quantity,                   
                            });  

                            orderDetail1.save(function (err, createdorderDetail1) {  
                                if (err) {
                                    createdTodoObject.remove();
                                    res.send(err);
                                }
                                totalOroderPrice += createdorderDetail1.totalPrice;
                            });
                        
                        
                        });

                            shopingCarts[i].remove();
                    }         
                   
             
                createdTodoObject.totalPrice = totalOroderPrice;
                createdTodoObject.update();
                res.send(createdTodoObject);
                });
            ;
            }
            else{
                 res.send("Shoping cart is empty");
            }
        });
     };
     return {
 	   get: get,
 	   post: post
     }


}

module.exports = orderController;