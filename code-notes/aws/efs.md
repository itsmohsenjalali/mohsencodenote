---
title : Familier With EFS
tags:
  - AWS
emoji: ☁️
---
# What is the EFS?
EFS is service for storage data of ec2 but the main different with EBS is that we can share EFS between all instances and all ec2s. (for example we keep data that user uploaded in EFS these data are accessible in all ec2s)

The speed of EFS is lower than EBS.

# Prepare
We can mount EFS to EC2 and after that data that upload in EFS directory can be shared with another instance.

# Compare

This article compare the S3, EFS and EBS [link]('https://www.missioncloud.com/blog/resource-amazon-ebs-vs-efs-vs-s3-picking-the-best-aws-storage-option-for-your-business')