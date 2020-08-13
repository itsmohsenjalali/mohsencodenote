---
title : Generator in Python
tags:
  - python
emoji: 🐍
---

When we want to work with a larg data set we should work with generator to generate item when we iterate the generator

```python
from sys import getsizeof
items = (x*2 for x in range(10000))
print("gen : ", getsizeof(items))

items = [x*2 for x in range(10000)]
print("list : ", getsizeof(items))
```

```Output
gen :  112
list :  87616
```
how to use generator

```python
items = (x*2 for x in range(5))
for i in items:
    print(i)
```

```Output
0
1
2
3
4
```