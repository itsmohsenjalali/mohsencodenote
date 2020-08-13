---
title: lambda function in python
tags:
  - python
emoji: 🐍
---

how to use lambda in python

```python
lambda parameters:expression
```

Example for sort list :

```python
items = [
    ("product0",20),
    ("product1",10),
    ("product3",40)
]


def sort_item(item):
  return item[1]


items.sort(key=sort_item)
print(items)
```
Implement this code with lambda: 

```python
items = [
    ("product0",20),
    ("product1",10),
    ("product3",40)
]


items.sort(key=lambda item:item[1])
print(items)
```

```Output
[("product0",10),
("product1",20),
("product3",40)]
```

Example for map function

```python
items = [
    ("product0",20),
    ("product1",10),
    ("product3",40)
]


prices = []
for item in items:
  prices.append(item[1])


print(prices)
```

Implement this code with lambda:

```python
items = [
    ("product0",20),
    ("product1",10),
    ("product3",40)
]


prices = list(map(lambda item:item[1],items))

print(prices)
```

```Output
[10,20,40]
```

Example for filter function

```python
items = [
    ("product0",20),
    ("product1",10),
    ("product3",40)
]


filtered = list(filter(lambda item:item[1] >= 20,items))


print(filtered)
```

```Output
[("product1",20),
("product3",40)]
```
