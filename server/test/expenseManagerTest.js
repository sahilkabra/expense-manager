var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

chai.use(chaiAsPromised);

describe('The Expense Manger application', function() {
	var expenseManager = require('expenseManager');
	var mockExpense = [{
		'name': 'Lunch at Serangoon Mall',
		'tags': ['Food', 'Lunch', 'DebitCard'],
		'value': '10.20',
		'card': '1',
		'time': new Date(29, 10, 2014, 14)
	}, {
		'name': 'Groceries',
		'details': 'Cornflakes, Milk, Fruits, Sugar',
		'tags': ['Food', 'Cash'],
		'value': '10.20',
		'time': new Date(30, 10, 2014, 18)
	}];

	describe('Expense management module', function() {
		it ('saves a new expense entry to the database', function() {
			return expenseManager.save(mockExpense).to.eventually.be.true;
		});
		it('deletes an expense entry from the database', function() {
		});
		describe ('retrieves expense entries from the database', function() {
			it('based on date', function() {
			});
			it('based on tags', function() {
			});
			it('based on value', function() {
			});
			it('based on card used', function() {
			});
			it('based on month and year', function() {
			});
		});
		it('retrieves expense details from the database', function() {
		});
		describe('Update expense entries', function() {
			it('adds tags', function() {
			});
			it('deletes tag', function() {
			});
			it('suggests autocomplete', function() {
			});
		});
	});

	describe('Card Management module', function() {
		it('saves card details', function() {
		});
		it('retrieves card details', function() {
		});
		it('deletes card details', function() {
		});
	});
});
