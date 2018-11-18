var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/total', controller.total);

router.get('/subtotal/:month/:category', controller.subtotal);

router.post('/insert', controller.add);


module.exports = router;

