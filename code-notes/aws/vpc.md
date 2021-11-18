---
title : Familier With VPC
tags:
  - AWS
emoji: ☁️
---
# What is VPC?
Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you've defined. (more informantion [link](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html))

# Note
We can divide this network to multipart with subnet mask. We can have public subnet and private subnet. (for more information [link](https://wiki.teltonika-networks.com/view/What_is_a_Netmask%3F))

# NAT Gateway
Network address translation is part of VPC service that you can connect your VPC to the public internet. With NAT our resources not accessible from internet.

# Internet Gateway
Internet gateway is similar to NAT but it has one different, our resources are accessible from the Internet.

# Elastic IPs
Amazon allocate random ip to our ec2. when our instance is terminate this IP will release and when we run instance again it get new IP and we should change our IP in DNS and where we used. For solve this problem we use Elastic IPs to get static IP and bind this IP to our ec2 or NAT gateway.

# VPN 
Amazon has two common type of VPN: 
- Client VPN
- site to site VPN
Client VPN use to connect to your private subnet on your VPC as developer. Site to site VPN is use for connect your VPC to another data center to migrate data in secure way.

