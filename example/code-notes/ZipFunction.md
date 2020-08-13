---
title : zip function 
tags:
  - python
emoji: 🐍
---

how to work with zip function.

```python
list1 = [10,2,3]
list2 = [11,20,30]

print(list(zip(list1,list2)))
print(list(zip("asd",list1,list2)))
``` 

```Output
[(10,11),(2,20),(3,30)]
[("a",10,11),("s",2,20),("d",3,30)]
```