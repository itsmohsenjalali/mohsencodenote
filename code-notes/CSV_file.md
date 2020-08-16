---
title : Work with zip file 
tags:
  - python
emoji: 🐍
---

Work with CSV file

```python
import csv

with open("test/data.csv", "w") as CSV_file:
    writer = csv.writer(CSV_file)
    writer.writerow(["price", "id", "category"])
    writer.writerow([1000, 5, 2])
    writer.writerow([2000, 2, 3])

with open("test/data.csv") as CSV_file:
    reader = csv.reader(CSV_file)
    print(list(reader))

```
```Output
[['price', 'id', 'category'], ['1000', '5', '2'], ['2000', '2', '3']]
```