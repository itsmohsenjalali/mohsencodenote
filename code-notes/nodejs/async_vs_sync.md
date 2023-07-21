---
title : Asynchronous Vs Synchronous in NodeJS
tags:
  - NodeJS
emoji: 🟩
---
## Total diffrent
Async:

- Send request
- go on with other code
- response come in any time on a callback
Sync:

- Send request
- Wait for response
- go on with other code after response

example of Sync
```JS
console.log('Before')
console.log('After')
```
output:

```Output
Before
After
```
example of Async
```JS
console.log('Before')
setTimeout(()=>console.log("helllo"), 2000);
console.log('After')
```
output:

```Output
Before
After
helllo
```

## Patterns for dealing with Async Code
what's dealing in async code?
see below examples:

First example:
```JS
console.log('Before')
const user = get_user();
console.log(user)
console.log('After')

function get_user() {
    setTimeout(() => {
        console.log('connect to database')
        return { id: 123 }
    }, 2000);
}
```
```Output
Before
undefined
After
connect to database
```
Seconde example:
```JS
console.log('Before')
const user = get_user();
console.log(user)
console.log('After')

function get_user() {
    setTimeout(() => {
        console.log('connect to database')
        return { id: 123 }
    }, 2000);
    return 10
}
```
```Output
Before
10
After
connect to database
```
In two above examples code not work correctly beacause of 2000 milisecond delay in setTimeout function.

### 1-Callback Function
callback means you can pass function as arguments.
First solution is callback function see below example:

```JS
console.log('Before')
getUser((user) => {
    getRepo(user.id, (id) => {
        console.log(id)
    })
});
console.log('After')

function getUser(callback) {
    setTimeout(() => {
        console.log('connect to database')
        callback({ id: 123 })
    }, 2000);
}

function getRepo(id, callback) {
    setTimeout(() => {
        console.log("Looking for repo ...")
        callback(['1', '2', '3'])
    }, 2000)
}
```
#### Callback Hell
When callback functions are too many read and maintane code is so hard and we say callback hell  because ou program look like below:
```JS
//Async
getUser((user) => {
    getRepo(user.id, (id) => {
        getCommit(()=>{
          ...
        })
    })
});
```
If we programed in synchronous the program is like this
```JS
console.log('Before')
const user = getUser(user)
const repos = getRepo(user.id)
const commits = getCommits(repos[0])
console.log('After')
```
How can we prevent callback hell and nested structuer?
We can use named function instaed of anonymuse function
```JS
const { func } = require("joi");

console.log('Before')
getUser(getRepo)
console.log('After')

function getRepo(id) {
    getRepo(user.id, getCommits)
}

function getCommits(repos) {
    getCommits(repos, displayCommits);
}
function displayCommits(commits) {
    console.log(commits)
}

function getUser(callback) {
    setTimeout(() => {
        console.log('connect to database')
        callback({ id: 123 })
    }, 2000);
}

function getRepo(id, callback) {
    setTimeout(() => {
        console.log("Looking for repo ...")
        callback(['1', '2', '3'])
    }, 2000)
}
function getCommits(repos, callback) {
    setTimeout(() => {
        console.log('connect to database')
        callback(repos)
    }, 2000)
}
```
### Promise
What is promise?
It's object that holds the eventual result of an asynchronous operation.
This object has three states:
- Pending: when the promise object is created
- Fulfilled: when the async operation is complete and successfull
- Rejected: when the async operation has an error

```JS
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12) // pending => resolved,fulfilled
        reject(new Error('massage')) // pending => rejected
    }, 2000)
})

p
    .then(result => console.log(result))// if resolve function occur
    .catch(err => console.log(err))// if reject function occur
```
```Output
12
or
Error: massage
```
We can replace promises with callback functions lik this
```JS
const { Promise } = require("mongoose");

console.log('Before')
getUser()
    .then(user => getRepo(user))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log(err.message))//catch any error that occur
console.log('After')


function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('connect to database')
            resolve({ id: 123 })
        }, 2000);
    })
}

function getRepo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Looking for repo ...")
            resolve(['1', '2', '3'])
        }, 2000)

    })
}
function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('connect to database')
            resolve(repos)
        }, 2000)

    })
}
```
```Output
Before
After
connect to database
Looking for repo ...
connect to database
1
```
#### Note
Some time we want to create promise that always is resolve(it's common for write unit test) do it like below
```JS
const p = Promise.resolve({id:23})
p.then(user => console.log(user))
//or 
const p = Promise.reject(new Error("User Not found"))
p.catch(err => console.log(err))
```
#### Parallel 
We can running promises in parallel programming
```JS
// First Promise
const p1 = new Promise((resolve) => { 
    setTimeout(() => {
        console.log("Done 1 ...")
        resolve(1)
    }, 2000)
});
// Seconde Promise
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Done 2 ...")
        resolve(2)
    }, 2000)
});
// Run all promise at same time
Promise.all([p1, p2])
    .then(result => console.log(result))// The result is array
// Run all promise at same time but return which one complete faster 
Promise.race([p1, p2])
    .then(result => console.log(result))// The result is one item 
```
```Output
Done 1 ...
Done 2 ...
[ 1, 2 ]

Done 1 ...
1
Done 2 ...
```


### 3-Async/Await

In async function we can have await keyword for waiting for code execution, but important note is await keyword block execute of async function and doesn't block single thread of nodejs

For more information [link](https://stackoverflow.com/questions/46004290/will-async-await-block-a-thread-node-js)

Async/Await is base on the promise and we use it because more readable and code gets more clear.
Allways we should use await oprations in async function and for error handling use try/catch block.
```JS
async function displayCommit() {
    try {
        const user = await getUser();
        const repo = await getRepo(user.id);
        const commit = await getCommits(repo);
        console.log(commit)
    }
    catch (err) {
        console.log(err.message)
    }
}
displayCommit()

function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('connect to database')
            resolve({ id: 123 })
        }, 2000);
    })
}

function getRepo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Looking for repo ...")
            resolve(['1', '2', '3'])
        }, 2000)

    })
}
function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Commite is found')
            resolve(repos)
        }, 2000)

    })
}
```