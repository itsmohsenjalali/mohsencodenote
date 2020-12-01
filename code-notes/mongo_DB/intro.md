---
title : Introducing MongoDB
tags:
  - NodeJS
  - MongoDB
emoji: 🌿
link: https://docs.mongodb.com/manual/
---
## What is MongoDB?
MongoDB is no sql database(it's document store)

## Install MongoDB
We can use brew for installing mongodb, it's so much simpler.
```Terminal
brew install mongodb
```
In next step we should create directory for mongo to store data

```Terminal
sudo mkdir -p /data/db
```
And then set privilage to the directory

```Termianl
sudo chown -R `id -u` /data/db
```

In next step run mongod

```Terminal
mongod
```
We can download mongo compass for gui interface of mongodb [link](https://www.mongodb.com/products/compass)
