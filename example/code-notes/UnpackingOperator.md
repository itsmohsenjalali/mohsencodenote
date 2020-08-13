---
title : unpacking operator
tags:
  - python
emoji: 🐍
---

use * to unpack all iterable and use ** to unpack dictionary

```python
list_A = [1, 2, 3]
print(*list_A)

list_B = [4, 5, 6]
list_C = [*list_B, *list_A]
print(list_C)

```

```Output
1 2 3
[4, 5, 6, 1, 2, 3]
```

```python
dict_A = {"name" : "ali"}
dict_B = {"age" : 10}
dict_C = { **dict_A, **dict_B}
print(dict_C)
```

```Output
{
    "name" : "ali",
    "age" : 10
}
```