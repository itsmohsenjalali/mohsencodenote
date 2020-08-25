---
title : Work with time
tags:
  - python
emoji: 🐍
---
We use time module when we want work with time in our program

```python
import time

print(time.time()) # return current time in second

```

```Output
1597570045.7422454
```
Human readable

```python
import time

print(time.ctime(time.time())) # return current time in second

```
```Output
Sun Aug 16 13:57:43 2020
```
We can get execution time with time module

```python
import time

def send_mail():
    for i in range(1000)

start = time.time()
send_mail()
finish = time.time()

print("Duration: ", finish - start)

```