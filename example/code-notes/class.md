---
title : Python class and OOP
tags:
  - python
emoji: 🐍
---

Instance attribute can defined in constructor or dynamic in the program.

```python
class test:
    def __init__(self):
        self.x = 10


t1 = test()
t1.y = 20
print(t1.x, t1.y)
```
```Output
10 20
```
Instance attribute or class attribute

```python
class test:
    default_color = "red" # class attribute

    def __init__(self):
        self.x = 10 # Instance attribute
```

class methods are methods that related to the class

```python
class test:

    def __init__(self, x, y):
        self.x = x
        self.y = y

    @classmethod
    def zero(cls):
        return cls(0, 0)

    def draw(self):
        print(f"Point ({self.x},{self.y})")


point = test.zero()
point.draw()

```
Dunder or magic methods in Python are the methods having two prefix and suffix underscores in the method name. For more detail:
- https://rszalski.github.io/magicmethods/

```python
class test:

    def __init__(self, x, y):  # magic methods
        self.x = x
        self.y = y

    def __str__(self):  # magic methods
        return f"({self.x},{self.y})"

    def __eq__(self, other):  # magic methods
        return self.x == other.x and self.y == other.y

    def draw(self):
        print(f"Point ({self.x},{self.y})")

    def __add__(self, other):
        return test(self.x + other.x , self.y + other.y)

point_1 = test(10,20)
point_2 = test(1,2)
combine = point_1 + point_2

print(point_1)  # call __str__ method
print(point_1 == point_2)  # call __eq__ method
```
```Output
(10,20)
False
```
how to make custome containers in python 

```python
class TagCloud:

    def __init__(self):
        self.tags = {}

    def add(self, tag):
        self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1

    def __getitem__(self, tag):
        return self.tags.get(tag.lower(), 0)

    def __setitem__(self, tag, count):
        self.tags[tag.lower()] = count

    def __len__(self):
        return len(self.tags)

    def __iter__(self):
        return iter(self.tags)


cloud = TagCloud()
cloud.add("python")  # call add()
cloud.add("python")  # call add()
cloud.add("python")  # call add()
print(cloud["python"])  # call __getitem__()
cloud["python"] = 10  # call __setitem__()
print(cloud["python"])  # call __getitem__()
print(len(cloud))  # call __len__()
for item in cloud:  # call __iter__()
    print(item)

```
```Output
3
10
1
python
```

how to work with python class private member.
- Note: private member not for security, you can work with private member by complex way.

```python
class TagCloud:

    def __init__(self):
        self.__tags = {
            "python": 10
        }


cloud = TagCloud()
#print(cloud.__tags) return error

print(cloud._TagCloud__tags)

```
```Output
{'python' : 10}
```
how to implement setter and getter in python

first way

```python
class TagCloud:

    def __init__(self, tag):
        self.__tags = tag

    def get_tags(self):
        return self.__tags

    def set_tags(self, tag):
        if tag == "python":
            raise ValueError("Bad value " + tag)
        self.__tags = tag
    tags = property(get_tags, set_tags)

cloud = TagCloud("C++")
print(cloud.tags)
cloud.tags = "python1"
print(cloud.tags)

```
```Output
C++
python1
```
second way
- the second way is professional
```python
class TagCloud:

    def __init__(self, tag):
        self.__tags = tag

    @property
    def tags(self):
        return self.__tags

    @tags.setter
    def tags(self, tag):
        if tag == "python":
            raise ValueError("Bad value " + tag)
        self.__tags = tag


cloud = TagCloud("C++")
cloud.tags = "python1"
print(cloud.tags)

```
```Output
C++
python1
```
Inheritance in python
- Note: don't use more than 2 levels inheritance because decrease your code compatibility.  
Call parent class in constructor

```python
class Animal:
    def __init__(self):
        pass


class Fish(Animal):
    def __init__(self):
        super().__init__()
        pass
```
Don't use multiple inheritances in a bad way. a good way to use multiple inheritance is the way that parent classes don't have overlap.  

```python
#Bad code
class Animal:
    def eat(self):
        print("Animal Eat")


class Fish:
    def eat(self):
        print("Fish Eat")


class Wall(Fish,Animal):
    pass

class Dolphin(Animal,Fish):
    pass
W = Wall()
D = Dolphin()
W.eat()
D.eat()
```
```Output
Fish Eat
Animal Eat
```