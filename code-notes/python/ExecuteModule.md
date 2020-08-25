---
title: Execute the module as a script
tags:
  - python
emoji: 🐍
---

We can use a module as a script and execute or import it to the other modules and use it. For better understanding see the below example

```python
#app.py
import sales

sales.count()

```

```python
#sales.py

print("import module: " + __name__)

def count():
    pass
```
If execute app.py

```Output
import module: sales
```
If execute sales.py

```Output
import module: __main__
```
For use module as script or import into the other module we change sales.py

```python
print("import module: " + __name__)

def count():
    pass

if __name__ == "__main__":
    print("Use as Script")

```

if execute sales.py

```Output
import module: __main__
Use as Script
```

if execute app.py

```Output
import module: sales
```