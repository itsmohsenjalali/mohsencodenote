---
title : Environment Variables
tags:
  - NodeJS
emoji: 🟩
---
## What is Environment Variables?
When we deploye code on server we use environment variables to store some important data on server locally like password, username, port, etc.

## How To Set Environment Variables?

In windows server

```Terminal
set variable_name=value
```
In linux server

```Terminal
export variable_name=value
```

## How to use Environment Variables in code?
We can read Environment Variables with below code

```JS
process.env.variable_name
```