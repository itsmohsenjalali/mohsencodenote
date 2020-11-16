---
title : Path Module
tags:
  - NodeJS
emoji: 🟩
---
We can work with OS in node with OS module

```JS
const os = require('os')

var totalmem = os.totalmem()
var freemem = os.freemem()

console.log(`total : ${totalmem} \n free : ${freemem}`)

```

```Output
total : 16700600320 
free : 7396892672
```