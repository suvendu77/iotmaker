
var express = require('express');

var router = function(tableBooking){

var ownerTableBookingRouter = express.Router();

var ownerTableBookingController = require('../Controller/OwnerTableBookingController')(tableBooking);
userHandlers = require('../Controller/userController.js');
ownerTableBookingRouter.route('/ownertableBooking')
    .get(ownerTableBookingController.get);
  

   return ownerTableBookingRouter;
};
module.exports = router;