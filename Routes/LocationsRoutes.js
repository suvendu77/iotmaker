
var express = require('express');

var router = function(location){

var locationRouter = express.Router();

var locationController = require('../Controller/LocationController')(location);

locationRouter.route('/location')
    .get(locationController.get)
   .post(locationController.post);

   return locationRouter;
};
module.exports = router;