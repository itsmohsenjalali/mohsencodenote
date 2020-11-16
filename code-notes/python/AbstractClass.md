---
title : Abstract class in Python
tags:
  - python
emoji: 🐍
---

When we want to avoid creating an instance from a class, we define the class as an abstract because this class is base for another class and we don't want to create an instance from this class.

We implement the method of the base class as an abstract method because this method is common among all child class and each child class want to custom implementation of the method.

```python
from abc import abstractmethod, ABC


class InvalidOperationError(Exception):  # new exception
    pass


class Stream(ABC):
    def __init__(self):
        self.streamopen = False

    def open(self):
        if self.streamopen:
            raise InvalidOperationError("The File is already open")
        self.streamopen = True

    def close(self):
        if not self.streamopen:
            raise InvalidOperationError("The File is already close")
        self.streamopen = False

    @abstractmethod
    def read(self):
        pass


class FileStream(Stream):
    def read(self):
        print("reading from File")


class NetworkStream(Stream):
    def read(self):
        print("reading from Network")


```