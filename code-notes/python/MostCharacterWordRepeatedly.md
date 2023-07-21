---
title: most repeated character and word
tags:
  - python
emoji: 🐍
---

Implement with lambda function  

```python
text = '''
An iterable is any Python object capable of 
returning its members one at a time, 
permitting it to be iterated over in a for-loop.
Familiar examples of iterables include lists, tuples, and strings - any
such sequence can be iterated over in a for-loop.'''

DIC = {x: text.count(x) for x in text}
print("most repeated character : ", sorted(
    DIC.items(), key=lambda item: item[1], reverse=True)[0])

DIC = {x: text.count(x) for x in text.split(" ")}
print("most repeated word : ", sorted(
    DIC.items(), key=lambda item: item[1], reverse=True)[0])
```
```Output
most repeated character :  (' ', 41)
most repeated word :  ('a', 17)
```