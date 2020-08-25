---
title : set data structuer 
tags:
  - python
emoji: 🐍
---

Set has diffrence with list, in the set we don't have duplicate item and set doesn't support indexing.

```python
numbers = [1,1,2,3,4]
first = set(numbers)

#print(first[0]) --> error : doesn't support indexing

print(numbers)
print(first)
```

```Output
[1,1,2,3,4]
{1,2,3,4}
```

Set oprations

```python
numbers = [1,1,2,3,4]
first = set(numbers)
second = {1,5}

print(first | second)
print(first & second)
print(first - second)
print(first ^ second)
```

```Output
{1,2,3,4,5}
{1}
{2,3,4}
{2,3,4,5}
```