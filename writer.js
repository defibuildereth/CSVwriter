const fs = require('fs');
const { format } = require('@fast-csv/format');
const fileName = 'randoms2.csv';
const csvFile = fs.createWriteStream(fileName);

const stream = format({ headers: true });
stream.pipe(csvFile);


stream.write([1,2,3]);


stream.end();
console.log(`${fileName} written`);