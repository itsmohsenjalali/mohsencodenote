---
title: Get arguments from command line
tags:
  - python
emoji: 🐍
---

When we want to get parameter from command-line execution use below instruction

```python
import sys

if len(sys.argv) == 1:
    print("USAGE: python app.py <PASSWORD>")
else:
    password = sys.argv[1]
    print("Password", password)
```