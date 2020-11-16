---
title : Intro in node module
tags:
  - NodeJS
emoji: 🟩
---
# Module
Every file in NodeJs is a module and the scope of functions and variables just in that module.

note: We don’t have the window object in Node.
note: Unlike browser applications, variables we define are not added to the “global” object.

# Scope
Every file in a Node application is a module. Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported.

# Export
To export a variable or function from a module, you need to add them to module.exports.

```JS
module.exports.sayHello = sayHello;
//or
module.exports = sayHello;
```
# Load
To load a module, use the require function. This function returns the module.exports object exported from the target module.

```JS
const logger = require(‘./logger’);
```

# Module Wrapper Function
Node not run directly code that import from another module but set the code in to the function that name is module wrapper function and run the module wrapper function