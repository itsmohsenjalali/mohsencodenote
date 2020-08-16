---
title : Work with JSON file 
tags:
  - python
emoji: 🐍
---

```python
import json
from pathlib import Path

market = [
    {"id": 1, "title": "milk", "price": 100}
]

data = json.dumps(market)
Path("test/market.json").write_text(data)

data = Path("test/market.json").read_text()
market = json.loads(data)
print(market)

```
```Output
[{'id': 1, 'title': 'milk', 'price': 100}]
```