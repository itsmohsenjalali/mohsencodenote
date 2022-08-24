---
title : Create Object In Python
tags:
  - python
emoji: 🐍
---

# __new__ vs __init__
__new__ is the first step of instance creation. It's called first and is responsible for returning a new instance of your class. In contrast, __init__ doesn't return anything; it's only responsible for initializing the instance after it's been created.

```Python
class a:
    def __new__(cls, *args, **kwargs):
        print(cls.__name__)
        print(args)
        print(kwargs)
        obj = object.__new__(cls)
        print(id(obj))
        return obj
    
    def __init__(self):
        print(id(self))

m = a()
l = a(123,123)
```

```Output
a
()
{}
4381665568
4381665568
/////////
a
(123, 123)
{}
4381668976
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: a.__init__() takes 1 positional argument but 3 were given
```

# What is Interning in python?
Re-using objects of equal value on-demand instead of creating new objects.

We can use this technique by overriding __new__. Now we compare memory consumption in normal implementation and in using intern technique.

Normal implementation:

```python

class Check:
    def __init__(self, file, rank) -> None:
        if file not in range(1,9) :
            raise ValueError('out of range')
        if rank not in 'abcdefgh': 
            raise ValueError('out of range')
        
        self._file = file
        self._rank = rank


def start():
    return {
        '1' : Check(1, 'a'),
        '2' : Check(2, 'a'),
        '3' : Check(3, 'a'),
        '4' : Check(4, 'a'),
        '5' : Check(5, 'a'),
        '6' : Check(6, 'a'),
        '7' : Check(7, 'a'),
        '8' : Check(8, 'a'),
        '9' : Check(1, 'b'),
        '10' : Check(2, 'b'),
        '12' : Check(3, 'b'),
        '13' : Check(4, 'b'),
        '14' : Check(5, 'b'),
        '15' : Check(6, 'b'),
        '16' : Check(7, 'b'),
        '17' : Check(8, 'b'),
        '18' : Check(1, 'c'),
        '19' : Check(2, 'c'),
    }

def main():
    import tracemalloc
    tracemalloc.start()
    board = [start() for i in range(10000)]
    _, peak = tracemalloc.get_traced_memory()

    print(peak/1000, 'kb')

if __name__ == '__main__':
    main()
```
```output
33845.742 kb
```
Using interning technique and override __new__ function: 
```python
class Check:
    _intern = {}

    def __new__(cls, file, rank):
        if file not in range(1,9) :
            raise ValueError('out of range')
        if rank not in 'abcdefgh': 
            raise ValueError('out of range')
        key = (file, rank)
        if key not in cls._intern:
            obj = object.__new__(cls)
            obj._file = file
            obj._rank = rank
            cls._intern[key] = obj

        return cls._intern[key]

def start():
    return {
        '1' : Check(1, 'a'),
        '2' : Check(2, 'a'),
        '3' : Check(3, 'a'),
        '4' : Check(4, 'a'),
        '5' : Check(5, 'a'),
        '6' : Check(6, 'a'),
        '7' : Check(7, 'a'),
        '8' : Check(8, 'a'),
        '9' : Check(1, 'b'),
        '10' : Check(2, 'b'),
        '12' : Check(3, 'b'),
        '13' : Check(4, 'b'),
        '14' : Check(5, 'b'),
        '15' : Check(6, 'b'),
        '16' : Check(7, 'b'),
        '17' : Check(8, 'b'),
        '18' : Check(1, 'c'),
        '19' : Check(2, 'c'),
    }

def main():
    import tracemalloc
    tracemalloc.start()
    board = [start() for i in range(10000)]
    _, peak = tracemalloc.get_traced_memory()

    print(peak/1000, 'kb')

if __name__ == '__main__':
    main()
```
```output
6489.795 kb
```

with this technique we can reduce our memory consumption.