---
title : How to implement custom decorator in python?
tags:
  - python
emoji: 🐍
---
# What is decorator?
There are two types of decorator function decorator and class decorator the below digrams show how they work.

![](/code-notes/python/images/decorator1.png)

![](/code-notes/python/images/decorator2.png)

# This is the example of function decorator:

```python
import inspect


def auto_repr(cls):
    print(cls.__name__)
    members = vars(cls)
    for name, member in members.items():
        print(name, member)
    if "__repr__" in members:
        raise TypeError(f"{cls.__name__} already defines __repr__")
    if "__init__" not in members:
        raise TypeError(f"{cls.__name__} does not override __init__")
    sig = inspect.signature(cls.__init__) # sig is list of parameter of __init__ function
    parameter_names = list(sig.parameters)[1:]

    if not all(
        isinstance(members.get(name, None), property)
        for name in parameter_names
    ):
        raise TypeError(f"auto_repr does not apply for the {cls.__name__}")

    def synthesized_repr(self):
        return "{typename} : {list}".format(
            typename=self.__class__.__name__,
            list=", ".join(
                "{name}={value!r}".format(
                    name=name,
                    value=getattr(self, name)
                ) for name in parameter_names
            )
        )
    setattr(cls, "__repr__", synthesized_repr)
    return cls


@auto_repr
class SimpleList:
    def __init__(self, items):
        self._list = list(items)

    def add(self, item):
        self._list.append(item)

    def sort(self):
        self._list.sort()

    @property
    def items(self):
        return self._list
```

```output
>> from main import *


SimpleList
__module__ main
__init__ <function SimpleList.__init__ at 0x101028c10>
add <function SimpleList.add at 0x101028ca0>
sort <function SimpleList.sort at 0x101028d30>
items <property object at 0x100dfdd00>
__dict__ <attribute '__dict__' of 'SimpleList' objects>
__weakref__ <attribute '__weakref__' of 'SimpleList' objects>
__doc__ None

>> s = SimpleList([1,2])
>> s

SimpleList : items=[1, 2]
```

# Another example for function decorator:
This is example for class decorator factories

```python
def post_condition(predicate):

    def function_decorator(f):

        @functools.wraps(f)
        def wrapper(self, *args, **kwargs):
            result = f(self, *args, **kwargs)
            if not predicate(self):
                raise RuntimeError(
                    f"Post-condition {predicate.__name__} not "
                    f"maintained for {self!r}"
                )
            return result
        return wrapper
    return function_decorator

def min_length(simple_list):
    return len(simple_list.items) >= 2

class SimpleList:
    @post_condition(min_length)
    def __init__(self, items):
        self._list = list(items)

    @post_condition(min_length)
    def add(self, item):
        self._list.append(item)

    def sort(self):
        self._list.sort()

    @property
    def items(self):
        return self._list

s1 = SimpleList([])
s2 = SimpleList([1,2])
print(s2)
```

```Output
RuntimeError: Post-condition min_length not maintained for SimpleList : items=[]
SimpleList : items=[1, 2]
```

In this approach we should define decorators above each methods but there is another way, that we define a decorator above class and it is applied for every methods in that class. 

```python
def post_condition(predicate):

    def function_decorator(f):

        @functools.wraps(f)
        def wrapper(self, *args, **kwargs):
            result = f(self, *args, **kwargs)
            if not predicate(self):
                raise RuntimeError(
                    f"Post-condition {predicate.__name__} not "
                    f"maintained for {self!r}"
                )
            return result
        return wrapper
    return function_decorator

def invariant(predicate):
    function_decorator = post_condition(predicate)

    def class_decorator(cls):
        members = list(vars(cls).items())

        for name, member in members:
            if inspect.isfunction(member):
                decorated_member = function_decorator(member)
                setattr(cls, name, decorated_member)
        return cls
    return class_decorator

def min_length(simple_list):
    return len(simple_list.items) >= 2

@invariant(min_length)
class SimpleList:

    def __init__(self, items):
        self._list = list(items)

    def add(self, item):
        self._list.append(item)

    def sort(self):
        self._list.sort()

    @property
    def items(self):
        return self._list
```

# Example for class decorator

For more detail for class decorator check this [link](https://towardsdatascience.com/using-class-decorators-in-python-2807ef52d273)