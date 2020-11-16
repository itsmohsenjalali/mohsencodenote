---
title : Learn model and predict
tags:
  - Machine Learning
emoji: 🧠
---

After [cleaning data](prepareData.md) we should train a model on this data.

```python
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(X,Y)
per = model.predict([[2006,41.36,28.96,3.77,8.45,82.53,76,51,8,322],])
print(per)
```
```output
array(['Sports'], dtype=object)
```
