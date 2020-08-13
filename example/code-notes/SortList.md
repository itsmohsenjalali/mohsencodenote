---
title : sort list item 
tags:
  - python
emoji: 🐍
---

how to sort complicate list item. 

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

```Output
("product0",10),
("product1",20),
("product3",40)
```
