---
title : Intro in NestJS
tags:
  - NestJS
emoji: 🟩
---
## Installation
```Terminal
npm i -g @nestjs/cli
```
## Create New Project
```Terminal
nest new project_name
```
## Generate new Module
```Terminal
nest g module tasks
```
## Generate new Controller
Controller is part of application that get income http request 
```Terminal
nest g controller tasks --no-spec
```
## What is provider?
Provider is the main part of nestjs service,repository and etc are kind of provider. Main featuer of provider is implement with injectable decorator. we can inject provider to the constructor with injectable decorator.
## Generate new Service
```Terminal
nest g service tasks --no-spec
```