const fs = require('fs');
const lineReader = require('readline').createInterface({
    input: fs.createReadStream('expense-data.csv', 'utf-8')
});
const R = require('ramda');

const lines = [];
lineReader.on('line', (line) => {
    lines.push(line.split(','));
})
.on('close', () => {
    parseFile(lines);
});

const log = R.tap(console.log);
const extractMonths = R.compose(R.head);
const extractCategories = R.compose(R.head, R.transpose, R.tail);
const extractTransactionType = R.compose(R.last, R.transpose);
const extractTransactions = R.map(R.compose(R.init, R.tail));

const parseFile = (lines) => {
    const months = extractMonths(lines);
    const categories = extractCategories(lines);
    const types = extractTransactionType(lines);
    const transactions = extractTransactions(lines);
    log(types);
};
