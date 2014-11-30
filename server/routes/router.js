/*
 * This is the main router for the application. It will decide which route should
 * go to which sub module
 */

var router = require('express').Router();
var moduleRouter = require('routes/expenseRouter');

router.use('/plan', moduleRouter);
module.exports = router;
