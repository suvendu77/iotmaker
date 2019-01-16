
var express = require('express');

var router = function(resturant){

var returantRouter = express.Router();

var returantController = require('../Controller/ResturantController')(resturant);
userHandlers = require('../Controller/userController.js');
returantRouter.route('/resturant')
    .get(returantController.get)
   .post(userHandlers.adminLoginRequired, returantController.post);

   return returantRouter;
};
module.exports = router;