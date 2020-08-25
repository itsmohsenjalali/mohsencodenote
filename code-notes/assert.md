---
title : Assert command in Python
tags:
  - python
emoji: 🐍
---

When you want to check the condition in debugging use assert and if the condition is true return true otherwise raise AssertionError

```python
x = "hello"

#if condition returns True, then nothing happens:
assert x == "hello"

#if condition returns False, AssertionError is raised:
assert x == "goodbye"
```