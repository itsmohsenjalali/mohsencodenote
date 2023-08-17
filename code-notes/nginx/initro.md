---
title : Introducing Nginx
tags:
  - nginx
emoji: 🫨
link: https://business-science.github.io/shiny-production-with-aws-book/https-nginx-docker-compose.html
---

this is final config of development server

```CONFIG
events { }

http {

  map $http_upgrade $connection_upgrade {
      default upgrade;
      ''      close;
    }

  server {
    listen 80;
    server_name <your_subdomain.com>;
    return 301 https://<your_subdomain.com>$request_uri;
         }

   server {
    listen 443 ssl;
    server_name <your_subdomain.com>;

    ssl_certificate /ssl/fullchain.pem;
    ssl_certificate_key /ssl/privkey.pem;

    access_log /var/log/nginx/data-access.log combined;

    location / {
       proxy_pass http://gateway:3000/;
       proxy_set_header X-Real-IP  $remote_addr;
       proxy_set_header X-Forwarded-For $remote_addr;
       proxy_set_header Host $host;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_redirect http://gateway:3000/ $scheme://$http_host/;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection $connection_upgrade;
       proxy_read_timeout 20d;
       proxy_buffering off;
       }
   }
}

```