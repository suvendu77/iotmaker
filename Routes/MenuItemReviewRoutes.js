
var express = require('express');

var router = function(menuItemReview){

var menuItemReviewRouter = express.Router();

var menuItemReviewController = require('../Controller/MenuItemReviewController')(menuItemReview);
userHandlers = require('../Controller/userController.js');
menuItemReviewRouter.route('/menuItemReview')
    .get( menuItemReviewController.get)
   .post(userHandlers.loginRequired, menuItemReviewController.post);

   return menuItemReviewRouter;
};
module.exports = router;