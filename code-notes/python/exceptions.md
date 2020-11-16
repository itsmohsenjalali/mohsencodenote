---
title: exceptions handling
tags:
  - python
emoji: 🐍
link: https://docs.python.org/3/library/exceptions.html
---

how to exceptions handling in python

```python
try:
    age = int(input("Age:"))
    a = 10 / age
except (ValueError, ZeroDivisionError):
    print("your age not correct.")
else:
    print("No Exceptions")

```

```python
try:
    file_py = open("test.py")
    age = int(input("Age:"))
    a = 10 / age
except (ValueError, ZeroDivisionError):
    print("your age not correct.")
else:
    print("No Exceptions")
finally:
    print("Finall execute this block of code")
    file_py.close()
```

how to raise error in python

```python
def xfactor(age):
    if age <= 0:
        raise ValueError("Age cannot be 0 or less.")
    return 10/age
try:
    xfactor(0)
except ValueError as e:
    print(e)

```
Important note: if you can, don't use raise error and exception handling because increase your execution time.