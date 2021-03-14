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
List of images in our docker engine
```Terminal
sudo docker images
```
Get image from docker hub
```Terminal
sudo docker pull IMAGE_NAME
```
Remove image on docker engine
```Terminal
sudo docker rmi IMAGE_NAME
```
## Advance Command 

### Commit
If we want to change image and save in new image use this command like below

```Terminal
sudo docker commit CONTAINER_ID NEW_IMAGE_NAME
```
### Save/Load
If we want export image as .tar.gz file we can use this command

```Terminal
sudo docker save -o alpine_mohsen.tar.gz alpine_mohsen:latest
```
```Terminal
sudo docker load -i alpine_mohsen.tar.gz
```
## Execut Command
When we want to run command in running container we can use exec command like below

```Terminal
sudo docker run exec -it CONTAINER_ID COMMAND
```
## Volume
When we use database images we should mount directory from our host to container to store data in host
```Terminal
sudo docker run mongo -v HOST_DIR:CONTAINER_DIR
```
## Docker File
Sometime we want create our custom image we do it with docker file and build it with build command.

## Link 
We use link command for connect containers to each other like below

```Terminal
sudo docker run --link CONTAINER_NAME:NAME_WE_USE
```
## Get Benchmark from our Microservice 
We can send bulk request to our web server with ab tool like below

```Terminal
ab -n 1000 -c 5 SERVER_ADDRESS
```