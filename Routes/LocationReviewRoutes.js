
var express = require('express');

var router = function(locationReview){

var locationReviewRouter = express.Router();

var locationReviewController = require('../Controller/LocationReviewController')(locationReview);
userHandlers = require('../Controller/userController.js');
locationReviewRouter.route('/locationReview')
    .get( locationReviewController.get)
   .post(userHandlers.loginRequired, locationReviewController.post);

   return locationReviewRouter;
};
module.exports = router;