---
title : Save and load model
tags:
  - Machine Learning
emoji: 🧠
---

We can save our model after train it and load in other projects and use it.

Save model

```python
from sklearn.externals import joblib

model.fit(X_train,Y_train)
joblib.dump(model, "videos-model.joblib")
```
Load model

```python
model = joblib.load("videos-model.joblib")
```