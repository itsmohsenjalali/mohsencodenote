---
title: use "with" syntax in python 
tags:
  - python
emoji: 🐍
---

Every object that has __entrie__() or __exit__() method can used with "with" syntax.

Use open() with "with" and after the "with" block file automatically close.

```python
with open("test.py") as Pyfile, open("target.txt") as target:
    print("Files opened")
print("Files Closed")
```
