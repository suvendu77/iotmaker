
var express = require('express');

var router = function(order,shopingCart,orderDetail,menuItems){

var orderRouter = express.Router();

var orderController = require('../Controller/OrderController')(order,shopingCart,orderDetail,menuItems);

orderRouter.route('/order')
    .get(orderController.get)
   .post(orderController.post);
   return orderRouter;
};
module.exports = router;