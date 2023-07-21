---
title : Http Module
tags:
  - NodeJS
emoji: 🟩
---
# What is Module for?
This module allows Nodejs to transfer data over the Hyper Text Transfer Protocol(HTTP).

```JS
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log("Listen on port 3000...");
```
## Note 
In the real world we don't use Http module for create server instead use express module.