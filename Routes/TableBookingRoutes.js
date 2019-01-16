
var express = require('express');

var router = function(tableBooking){

var tableBookingRouter = express.Router();

var tableBookingController = require('../Controller/TableBookingController')(tableBooking);
userHandlers = require('../Controller/userController.js');
tableBookingRouter.route('/tableBooking')
    .get( userHandlers.loginRequired, tableBookingController.get)
   .post(userHandlers.loginRequired, tableBookingController.post);

   return tableBookingRouter;
};
module.exports = router;