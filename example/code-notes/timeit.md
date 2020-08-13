---
title: Python timeit module
tags:
  - python
emoji: 🐍
---

With this module you can get code execution time and compare diffrent implement.

```python
from timeit import timeit

code1 = """
def xfactor(age):
    if age <= 0:
        raise ValueError("Age cannot be 0 or less.")
    return 10/age
try:
    xfactor(0)
except ValueError as e:
    pass
"""
code2 = """
def xfactor(age):
    if age <= 0:
        return None
    return 10/age

XF = xfactor(0)
if XF == None:
    pass
"""

print("First Code = ", timeit(code1,number=10000))
print("Second Code = ", timeit(code2,number=10000))
```

```Output
First Code =  0.007779763999678835
Second Code =  0.0016983619998427457
```