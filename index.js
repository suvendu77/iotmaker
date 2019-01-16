var express = require('express'),
        bodyParser = require('body-parser'),
         jsonwebtoken = require("jsonwebtoken"),
         mongoose = require('mongoose');
const app = express()
var router = express.Router();

////var db = mongoose.connect('mongodb://localhost:27017/mydb');

var db = mongoose.connect('mongodb://admin:laha4150@ds151232.mlab.com:51232/restauranttemplatedb');

var returant = require('./Model/Resturants');
var location = require('./Model/Locations');
var hoursOfOperations = require('./Model/HoursOfOperations');
var menuItems = require('./Model/MenuItems');
var menu = require('./Model/Menu');
var shopingCart = require('./Model/ShopingCart');
var menuItemReview = require('./Model/MenuItemReview');
var locationReview = require('./Model/LocationReview');
var tableBooking = require('./Model/TableBooking');
var order = require('./Model/Order');
var orderDetail = require('./Model/OrderDetails');


returantRoutes = require('./Routes/ResturantRoutes')(returant);
locationRoutes = require('./Routes/LocationsRoutes')(location);
hoursOfOperationsRoutes = require('./Routes/HoursOfOperationsRoutes')(hoursOfOperations);
menuItemsRoutes = require('./Routes/MenuItemsRoutes')(menuItems);
menuRoutes = require('./Routes/MenuRoutes')(menu);
shopingCartRoutes = require('./Routes/ShopingCartRoutes')(shopingCart);
menuItemReviewRoutes = require('./Routes/MenuItemReviewRoutes')(menuItemReview);
locationReviewRoutes = require('./Routes/LocationReviewRoutes')(locationReview);
tableBookingRoutes = require('./Routes/TableBookingRoutes')(tableBooking);
ownerTableBookingRoutes = require('./Routes/OwnerTableBookingRoutes')(tableBooking);
orderRoutes = require('./Routes/OrderRoutes')(order,shopingCart,orderDetail,menuItems);



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});


app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'Admin RESTFULAPIs', function(err, decode) {
      if (err) req.adminuser = undefined;
      req.adminuser = decode;
      next();
    });
  } else {
    req.adminuser = undefined;
    next();
  }
});


app.use('/api', returantRoutes);

app.use('/api', locationRoutes);

app.use('/api', hoursOfOperationsRoutes);

app.use('/api', menuItemsRoutes);

app.use('/api', menuRoutes);

app.use('/api', shopingCartRoutes);

app.use('/api', menuItemReviewRoutes);

app.use('/api', locationReviewRoutes);

app.use('/api', tableBookingRoutes);

app.use('/api', ownerTableBookingRoutes);

app.use('/api', orderRoutes);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;