---
title : Visualizing tree
tags:
  - Machine Learning
emoji: 🧠
---

We can export visualize decision trees with sklearn and plot that file with Vscode extensions.

```python
from sklearn import tree
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(X_train,Y_train)

tree.export_graphviz(model, out_file="video-graph.dot",
                    feature_names= ["Year_of_Release","NA_Sales","EU_Sales","JP_Sales","Other_Sales","Global_Sales"],
                    class_names=sorted(Y_train.unique()),
                    label='all',
                    rounded=True,
                    filled=True)
```