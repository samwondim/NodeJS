const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req === '/index') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.end(content);
    //         }
    //     );
    // }

    // if (req === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 }
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    let filePath = path.join(__dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    // get extesion name
    let extname = path.extname(filePath);

    // initial content-type
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
        case '.png':
            contentType = 'image/jpg';
            break;
    }

    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENONET') {
                // page not found
                fs.readFile(path.join(__dirname,
                    'public',
                    '404.html'),
                    (err, content) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    });
            } else {
                // some server error
                res.writeHead(500);
                res.end(`Server error ${err.code}`);
            }
        } else {
            // success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));