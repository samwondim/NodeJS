const path = require('path');

// filename
console.log(path.basename(__filename));

// dirname
console.log(path.dirname(__filename));

// path object
console.log(path.parse(__filename));

// join
console.log(path.join(__dirname, 'test', 'test.js'));