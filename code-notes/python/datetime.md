---
title : Work with datetime
tags:
  - python
emoji: 🐍
---

```python
from datetime import datetime
import time

dt1 = datetime(2018,1,1)
dt2 = datetime.now()
dt3 = datetime.strptime("2018/01/01", "%Y/%m/%d") # convert string to datetime object
dt4 = datetime.fromtimestamp(time.time())

print(f"{dt4.year}/{dt4.month}")
print(dt4.strftime("%Y/%m")) # convert object to the strings 

print(dt2 > dt1)
```
Using timedelta module

```python
from datetime import datetime, timedelta
import time

dt1 = datetime(2018, 1, 1)
print(dt1)
dt1 += timedelta(days=1, seconds=200)
print(dt1)
dt2 = datetime.now()
duration = dt2 - dt1

print("duration: ", duration)
print("Days: ", duration.days)
print("Seconds: ", duration.seconds)
print("Total Second: ", duration.total_seconds())

```

```Output
2018-01-01 00:00:00
2018-01-02 00:03:20
duration:  957 days, 16:30:23.594142
Days:  957
Seconds:  59423
Total Second:  82744223.594142
```