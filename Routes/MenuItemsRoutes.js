
var express = require('express');

var router = function(menuItem){

var menuItemRouter = express.Router();

var menuItemController = require('../Controller/MenuItemController')(menuItem);
userHandlers = require('../Controller/userController.js');
menuItemRouter.route('/menuitem')
    .get(menuItemController.get)
   .post(userHandlers.adminLoginRequired,menuItemController.post);

   return menuItemRouter;
};
module.exports = router;