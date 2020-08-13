---
title : Create custom exception
tags:
  - python
emoji: 🐍
---

How to create a new exception in Python

```python
class InvalidOperationError(Exception): # new exception
    pass


class FileStream:
    def __init__(self):
        self.fileopen = False
    
    def open(self):
        if self.fileopen:
            raise InvalidOperationError("The File is already open")
        self.fileopen = True
```