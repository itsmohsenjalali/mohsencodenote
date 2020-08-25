---
title : Namedtuple in Python
tags:
  - python
emoji: 🐍
---

When we have a class that doesn't have a method and just have attributes we can use namedtuple instead of class

```python
from collections import namedtuple

point = namedtuple("Point", ["x", "y"])

p1 = point(x=1, y=2)
p2 = point(x=1, y=2)

print(p1 == p2)

```
```Output
True
```