---
title : Prepare AWS Account
tags:
  - AWS
emoji: ☁️
---

# Prepare
- After create root user account you should create IAM user with admin privilage and work with that account (Note Don't work with root user and set very larg and complicate password for root user)
- Enable MFA for IAM user.
- For user should generate secret key for work with CLI
- we can create alarm for billing (for example if our billing get greater than 50$ should send me an email)

# Zone and Region
## Region
AWS has several Regions for its service that this regions in all over the wrold. In each region there are serveral data centers. we should select Region for create service (like ec2) that near to most of our customer or have ligallity for our platform.

## Zone
We have two type of zone:
- Availability Zone
- Local Zone
Each Region has several zone and in each zone we integrate several data center. When we run ec2 service Amazon replicate our service in two zone and if one zone has outage our service doesn't down. Availabitlity Zones are zones that we have our replicated on that and Local Zone is zone that our main service on that.

