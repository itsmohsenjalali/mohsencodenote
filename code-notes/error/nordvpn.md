---
title : Error About Mount Ntfs Partition
tags:
  - Error
emoji: 🚫
---
For this error :
- Whoops! Cannot reach System Daemon.
you need to create the system group manually and add yourself to that group:

sudo groupadd -r nordvpn
sudo systemctl enable --now nordvpnd.service
sudo gpasswd -a your user name nordvpn
reboot