//src/expenseManager.js

var expenseManager = module.exports;
var db = require('app/expenseMongo');

//Public API

expenseManager.save = function(newExpense) {
	//do business validations here
	//save to db
	return db.save(EXPENSE_COLLECTION, newExpense);
}

expenseManager.get = function(filter) {
	return db.get(EXPENSE_COLLECTION, filter);
}

//Private functions
//Private variables
var EXPENSE_COLLECTION = "expense";
