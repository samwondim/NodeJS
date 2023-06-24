const path = require('path');
const fs = require('fs');

// create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created!');
// });

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('file created');

//     // append to file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love nodeJs.', (err) => {
//         if (err) throw err;
//         console.log('appended to file');
//     });
// });

// read from file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// rename filename
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'), err => {
        if (err) throw err;
        console.log('file renamed');
    });
