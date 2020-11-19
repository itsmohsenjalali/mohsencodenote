---
title : Introducing to Express
tags:
  - NodeJS
emoji: 🟩
---
## What is Express?
Express is a package for building API and a very popular package.

## Install 
```Terminal
npm i express
```
## Build First Web Server

```JS
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hello")
});
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})
app.listen(3000, () => console.log("Server is Running ..."))
```
### Note
We can seprate routes in other file for example '/api/courses' is route and we can save all route about courses in course.js

## Use nodemon
When we want to make change in code and don't restart server manually use nodemon package
```Terminal
sudo npm i -g nodemon
```
For now on we use below command to run node application
```Terminal
nodemon app.js
```  
## Route Parameters
When we want to work with specific data we use parameters in route for example get course with id equal 1, we should pass parameters in route.

```JS
const express = require('express')
const app = express()

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Running on ${port} ...`))
```
Or we can have multiple parameters in route

```JS
const express = require('express')
const app = express()

app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Running on ${port} ...`))
```
For request localhost:5000/api/courses/2020/3 we have below output

```Output
{
    year:2020,
    month:3
}
```
### Note
We can pass query string in route after '?'.
For example localhost:5000/api/courses/2020/3?sortBy=name
Pay attention it's not a new route it's a query string that append in the last of the URL
We access query with req.query.

## Handling Http GET Requests

```JS
const express = require('express')
const app = express()

const courses = [
    { id: 1, course: "course1" },
    { id: 2, course: "course2" },
    { id: 3, course: "course3" },
]
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(item => item.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("Course Not Found")
    res.send(course)
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Running on ${port} ...`))
```

## Handling Http POST Requests

```JS
const express = require('express')
const app = express()

app.use(express.json()) // add middelware

const courses = [
    { id: 1, course: "course1" },
    { id: 2, course: "course2" },
    { id: 3, course: "course3" },
]


app.post('/api/courses', (req, res) => {
    const couse = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(couse)
    res.send(couse)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Running on ${port} ...`))
```
## Input Validation With Joi
We want to validate data that recive from client and get back response.
For validate input We use Joi package.
First we create schema to Joi understand the data structure then we use validate function to validate input data

```JS
const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const courses = [
    { id: 1, course: "course1" },
    { id: 2, course: "course2" },
    { id: 3, course: "course3" },
]

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const result = schema.validate(req.body)
    if (result.error) { // at same time on of the error or value is null
        return res.status(400).send(result.error.details[0].message)
    }
    const couse = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(couse)
    res.send(couse)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Running on ${port} ...`))
```
## Handling Http PUT Requests

```JS
const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const courses = [
    { id: 1, course: "course1" },
    { id: 2, course: "course2" },
    { id: 3, course: "course3" },
]

app.post('/api/courses', (req, res) => {
    const result = validateCourse(req.body)
    // const { error } = validateCourse(req.body) --> Destructuring Object
    if (result.error) return res.status(400).send(result.error.details[0].message)
    // if (error)  return res.status(400).send(result.error.details[0].message)
    if (result.error) return res.status(400).send(result.error.details[0].message)
    const couse = {
        id: courses.length + 1,
        course: req.body.course
    }
    courses.push(couse)
    res.send(couse)
})
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(item => item.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("Course Not Found")

    const result = validateCourse(req.body)
    // const { error } = validateCourse(req.body) --> Destructuring Object
    if (result.error) return res.status(400).send(result.error.details[0].message)
    // if (error)  return res.status(400).send(result.error.details[0].message)

    course.course = req.body.course
    res.send(course)
})
function validateCourse(course) {
    const schema = Joi.object({
        course: Joi.string().min(3).required()
    })
    return schema.validate(course)
}
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Running on ${port} ...`))
```
## Handling Http DELETE Requests

```JS
const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const courses = [
    { id: 1, course: "course1" },
    { id: 2, course: "course2" },
    { id: 3, course: "course3" },
]

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(item => item.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("Course Not Found")

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Running on ${port} ...`))
```