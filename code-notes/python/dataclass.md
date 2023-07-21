---
title : Data class
tags:
  - python
emoji: 🐍
---

# What is Data class?
A data class is a regular Python class. The only thing that sets it apart is that it has basic data model methods like .__init__(), .__repr__(), and .__eq__() implemented for you.

```python
from dataclasses import dataclass

@dataclass
class Position:
    name: str
    lon: float = 0.0
    lat: float = 0.0
```

In data class is necessary to specify data type (which name is data annotation).

# All parameter that dataclass support

- init: Add .__init__() method? (Default is True.)
- repr: Add .__repr__() method? (Default is True.)
- eq: Add .__eq__() method? (Default is True.)
- order: Add ordering methods? (Default is False.)
- unsafe_hash: Force the addition of a .__hash__() method? (Default is False.)
- frozen: If True, assigning to fields raise an exception. (Default is False.)

see below examples

```python
from dataclasses import dataclass

@dataclass(eq=True)
class Position:
    name: str
    lon: float = 0.0
    lat: float = 0.0

city1 = Position('ISF', 1.2, 3.2)
city2 = Position('Isfahan', 1.2, 3.2)

print(city1 == city2)
```

```Output
True
```

We should make data class immutable if we want declear a set of instances of it

```python
@dataclass(eq=True, frozen=True)
class Position:
    name: str
    lon: float = 0.0
    lat: float = 0.0
city1 = Position('ISF', 1.2, 3.2)
city2 = Position('Isfahan', 1.2, 3.2)
li = {city1, city2}
```

If we want validate the value of class attributes when an object has initialized we can use __post_init__ method.

```python
@dataclass(eq=True, frozen=True)
class Position:
    name: str
    lon: float = 0.0
    lat: float = 0.0

    def __post_init__(self):
        if len(self.name) == 0:
            raise ValueError("name could not be empty")
        
city1 = Position("", 1,4)
```

```output
ValueError: name could not be empty
```