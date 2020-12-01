---
title : How to upload file from local to server
tags:
  - sever
  - Putty
emoji: 🖥️
---
When we want to upload from local to server with ssh use below command(THIS WAY IS ON PUTTY)
```Terminal
pscp FILE USER@SERVER_IP:/TO/THIS/PATH/
```
if we have key for authentication
```Terminal
pscp -i KEY.PPK FILE USER@SERVER_IP:/TO/THIS/PATH/
```
