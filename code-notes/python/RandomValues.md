---
title : Generating random values 
tags:
  - python
emoji: 🐍
---

If we want to generate random values or choose a random item from list or shuffle the item list use random module

```python
import random
import string

print(random.random())
print(random.randint(1, 10))
print(random.choice([1, 2, 3, 4]))
print(random.choices([1, 2, 3, 4], k=2))
print("".join(random.choices(string.ascii_letters + string.digits, k=4)))

numbers = [1, 2, 3, 4]
random.shuffle(numbers)
print(numbers)

```

```Output
0.3830032164246694
2
4
[2, 1]
D031
[4, 3, 1, 2]
```