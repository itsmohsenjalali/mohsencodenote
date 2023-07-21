---
title : File System Module
tags:
  - NodeJS
emoji: 🟩
---
# Work with file system
we can use 'fs' module for work with files in system and this module has two types of function Synchronize and Asynchronous.

## Note 
Recommend to use Asynchronous function because NodeJS is singel thread

```JS
const fs = require('fs')

const files = fs.readdirSync('./'); // Synchronize
console.log(files)

fs.readdir('./', function (err, files) { // Asynchronous
    if (err) console.log('Error', err);
    else console.log('Resualt', files)
})
```