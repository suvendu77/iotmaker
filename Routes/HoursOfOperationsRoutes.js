
var express = require('express');

var router = function(hoursOfOperations){

var hoursOfOperationsRouter = express.Router();

var hoursOfOperationsController = require('../Controller/HoursOfOperationsController')(hoursOfOperations);

hoursOfOperationsRouter.route('/hoursOfOperations')
    .get(hoursOfOperationsController.get)
   .post(hoursOfOperationsController.post);

   return hoursOfOperationsRouter;
};
module.exports = router;