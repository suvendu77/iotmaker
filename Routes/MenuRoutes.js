
var express = require('express');

var router = function(menu){

var menuRouter = express.Router();

var menuController = require('../Controller/MenuController')(menu);

menuRouter.route('/menu')
    .get(menuController.get)
   .post(userHandlers.adminLoginRequired,menuController.post);

   return menuRouter;
};
module.exports = router;