---
title : Issubclass built-in function
tags:
  - python
emoji: 🐍
---

This method check if first class subclass of second class.

```python

class Animal:
    pass


class Fish(Animal):
    pass


print(issubclass(Fish,Animal))
```
```Output
True
```