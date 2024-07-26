var express = require('express');
var router = express.Router();

const routesCust = require('./V1/routesCustomer')
const routesAcc = require('./V1/routesAccount')
const routeTrc = require('./V1/routesTransaction')
const routeType = require('./V1/routesAccountType')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/v1/user", routesCust)
router.use("/v1/account", routesAcc)
router.use("/v1/transaction", routeTrc)
router.use("/v1/typeaccount", routeType)


module.exports = router;
