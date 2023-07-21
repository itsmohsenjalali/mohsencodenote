---
title : Metaclasses In Python
tags:
  - python
emoji: 🐍
link: https://realpython.com/python-metaclasses/
---

# What is Metaclass?
In python everythings are object and classes are also object. A metaclass in Python is a class of a class that defines how a class behaves. A class is itself an instance of a metaclass.

In the below figure we can find how class definition occur.
![](/code-notes/python/images/metaclass1.png)

## Default metaclass in python is `type` and each custom metaclass should inherited from `type`.

```python
class CustomMeta(type):
    @classmethod
    def __prepare__(mcs, name, bases, **kwargs):
        namespace = super().__prepare__(name, bases)
        print(mcs,name,bases,namespace, kwargs)
        return namespace
    
    def __new__(mcs, name, bases, namespace, **kwargs):
        cls = super().__new__(mcs, name, bases, namespace)

        print(cls,name,bases,namespace, kwargs)

        return cls
    
    def __init__(cls, name, bases, namespace, **kwargs):
        print(cls,name,bases,namespace, kwargs)
        super().__init__(name, bases, namespace)


class test(metaclass=CustomMeta):
    num= 10
    def is_available():
        return True
```
```output
<class '__main__.CustomMeta'> test () {} {}
<class '__main__.test'> test () {'__module__': '__main__', '__qualname__': 'test', 'num': 10, 'is_available': <function test.is_available at 0x102ce3400>} {}
<class '__main__.test'> test () {'__module__': '__main__', '__qualname__': 'test', 'num': 10, 'is_available': <function test.is_available at 0x102ce3400>} {}
```


