---
title : Polymorphism in Python
tags:
  - python
emoji: 🐍
---

When we define abstract methods in base class and each child class implement them for itself, we have one method with various implement this is polymorphism

```python
from abc import abstractmethod, ABC


class Stream(ABC):
    @abstractmethod
    def read(self):
        pass


class FileStream(Stream):
    def read(self):
        print("reading from File")


class NetworkStream(Stream):
    def read(self):
        print("reading from Network")


NS = NetworkStream()
FS = FileStream()

NS.read()
FS.read()

```
```Output
reading from Network
reading from File
```