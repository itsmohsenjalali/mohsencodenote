---
title: lambda vs comprehensions
tags:
  - python
emoji: 🐍
---

Some developer believe that use comprehensions clear than lambda

```python
items = [
    ("product0",20),
    ("product1",10),
    ("product3",40)
]


prices = list(map(lambda item:item[1],items))#lambda
prices = [item[1] for item in items]#comprehensions

filtered = list(filter(lambda item:item[1] >= 20,items))#lambda
filtered = [item for item in items if item[1] >= 20]#comprehensions
```
