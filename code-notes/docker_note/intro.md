---
title : Intro Docker Command
tags:
  - Docker
emoji: 🐋
---

## Intro command 

Live container list:
```Terminal
sudo docker ps
```
Run container from image:
```Terminal
sudo docker run IMAGE_NAME
```
List of all contianers in docker engine:
```Terminal
sudo docker ps -a
```
List of all contianers with id in docker engine:
```Terminal
sudo docker ps -aq
```
Simple remove container :
```Terminal
sudo docker -rm CONTAINER_IDENTITY
```
Advance remove container:
```Terminal
sudo docker rm $(sudo docker ps -aq)
```