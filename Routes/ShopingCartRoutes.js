
var express = require('express');

var router = function(shopingCart){

var shopingCartRouter = express.Router();

var shopingCartController = require('../Controller/ShopingCartController')(shopingCart);
userHandlers = require('../Controller/userController.js');
shopingCartRouter.route('/shopingCart')
    .get( shopingCartController.get)
   .post(userHandlers.loginRequired, shopingCartController.post);

   return shopingCartRouter;
};
module.exports = router;