---
title : Introducing MongoDB
tags:
  - NodeJS
  - MongoDB
emoji: 🌿
link: https://docs.mongodb.com/manual/
---
## Connect to database
```JS
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/playgrounds', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log("Not connect to mongo database", err))

```
## Create Schema
A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection. You can use a schema to require a specific set of fields, configure the content of a field, or to validate changes to a document based on its beginning and ending states.

```JS
const schema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})
```
### List of type in schema
- String
- Number
- Date
- Buffer
- Boolean
- ObjectID
- Array

## Create Models in mongo
```JS
const Course = mongoose.model('Course', schema);
const course = new Course({
    name: "Connect",
    author: "Mohsen",
    tags: ['node', 'back'],
    isPublished: true
});
```
If we want to save data in database and after print it in console we should change code like below
```JS
async function createMongo(params) {
    const Course = mongoose.model('Course', schema);
    const course = new Course({
        name: "Connect",
        author: "Mohsen",
        tags: ['node', 'back'],
        isPublished: true
    });

    const result = await course.save();// save data in database
    console.log(result)

}
```
```Output
[
  {
    tags: [ 'node', 'back' ],
    _id: 5fba42887ec73695e5003291,
    name: 'Connect',
    author: 'Mohsen',
    isPublished: true,
    date: 2020-11-22T10:50:48.165Z,
    __v: 0
  }
]
```
## How to run Query?
```JS
async function getCourses(params) {
    const courses = await Course
        .find({ author: 'Mohsen' })
        .limit(10)
        .sort({ name: 1 })// or .sort('name')
        .select({ name: 1, tags: 1 });// for select fild to display
        //.select('name tags')
    console.log(courses)
}
```
```Output
[
  {
    tags: [ 'node', 'back' ],
    _id: 5fba42887ec73695e5003291,
    name: 'Connect'
  }
]
```
## Comparison Operators
We can use comparison operators like below
- eq(equal)
- ne(not equal)
- gt(greater than)
- gte(greater than or equal to)
- lt(less than)
- lte(less than or equal to)
- in
- nin(not in)

```JS
const courses = await Course
    .find({price: { $gt: 10 , $lt:20 }})
    //.find({price: { $in: [10,20,30]}})
```
## Logical Operators
- OR
- AND

```JS
//AND
const courses = await Course
        .find({ author: 'Mohsen' , isPublish:true})// it's and Operator
const courses = await Course
        .find()
        .and([{ author: 'Mohsen' },{ isPublish:true}])// it's and Operator
//OR
const courses = await Course
        .find()
        .or([{author: 'Mohsen'},{isPublish:true}])
               
```
## Regular Expressions
```JS
//Start with Mohsen
const courses = await Course
        .find({ author: /^Mohsen/ })
//End with Mohsen
const courses = await Course
        .find({ author: /Mohsen$/i })
//Exist Mohsen in expression
const courses = await Course
        .find({ author: /.*Mohsen.*/i })
//i for case sensitive
```
## Count function
```JS
async function countOfCourses(params) {
    const courses = await Course
        .find({ author: 'Mohsen' })
        .limit(10)
        .sort({ name: 1 })
        .count();//how many object exist?
    console.log(courses)
}
```
## Pagination
We can implement pagination with skip function
```JS
async function getCourses(params) {
    const pageNumber = 2
    const pageSize = 10
    const courses = await Course
        .find()
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
    console.log(courses)
}
```
## Import Data
We can import json file to mongodb with below command
```Terminal
mongoimport --db DATABASE_NAME --collection COLLECTION_NAME --file JSON_FILE --jsonArray
``` 
## Update
We have two approchs:
- First:
  When we get data from clients or we want to implement the rule of our application like if isPublished is true object can not get updated. in this case we should use first approch.
```JS
async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;
    // first approch
    course.isPublished = false
    course.author = "ahmad"
    //second approch
    // course.set({
    //     isPublished: false,
    //     author: "ahmad"
    // })
    const update = await course.save()
    console.log(update)
}
updateCourse("5fba42887ec73695e5003291")
```
```Output
{
  tags: [ 'node', 'back' ],
  _id: 5fba42887ec73695e5003291,
  name: 'Connect',
  author: 'ahmad',
  isPublished: false,
  date: 2020-11-22T10:50:48.165Z,
  __v: 0
}
```
- Second:
  When we want update a lots of documents that store in database in one query we should use this approch.
  we use update function first argument is filter and second argument is update data.
```JS
async function updateCourse_approch2(id) {
    // First approch
    const result = await Course.update({ _id: id }, 
    // this function return result of update
    {
        $set: {
            name: "asal",
            isPublished: true
        }
    });
    console.log(result)
    // Second approch
    const course = await Course.findByIdAndUpdate(id, 
    // this function return course 
    {
        $set: {
            name: "asal",
            isPublished: true
        }
    },{ new: true });
    console.log(course)
}
```
### Note
$set is update operators you can see all operators in this [link](https://docs.mongodb.com/manual/reference/operator/update/)

## Delete
```JS
async function deleteCourses(id) {
    const result = await Course.deleteOne({ _id: id }) //return result
    console.log(result)
    const result = await Course.deleteMany({ isPublished: false })//return result
    console.log(result)
    const course = await Course.findByIdAndRemove(id)// return course
    console.log(course)
}
```