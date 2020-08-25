---
title : Extend built-in types in Python
tags:
  - python
emoji: 🐍
---

We can extend from built-in types and add some method or attribute

```python
class Text(str):
    def duplicate(self):
        return self + self


class TrackableList(list):
    def append(self, obj):
        print("Append Done: " + str(obj))
        super().append(obj)


list_obj = TrackableList()
list_obj.append("1")

text = Text("Python")
print(text.duplicate())

```
```Output
Append Done: 1
PythonPython
```