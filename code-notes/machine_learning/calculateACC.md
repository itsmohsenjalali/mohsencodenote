---
title : Calculate accuracy
tags:
  - Machine Learning
emoji: 🧠
---

After learn your model you should calculate model accuracy

```python
import pandas as pd 
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

missing_values = ["n/a", "na", "--"]
df = pd.read_csv("Video_Games_Sales_as_at_22_Dec_2016.csv", na_values=missing_values)

X = df.drop(columns=["Platform","Name","Genre","Publisher", "Developer","Rating"])
Y = df["Genre"]
median_Critic_Score = df['Critic_Score'].median()
median_Critic_Count = df['Critic_Count'].median()
median_User_Score = df['User_Score'].median()
median_User_Count = df['User_Count'].median()
X['Critic_Score'].fillna(median_Critic_Score, inplace=True)
X['Critic_Count'].fillna(median_Critic_Count, inplace=True)
X['User_Score'].fillna(median_User_Score, inplace=True)
X['User_Count'].fillna(median_User_Count, inplace=True)
X['Year_of_Release'].fillna(2006.0, inplace=True)
Y.fillna("Sports", inplace=True)

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2)

model = DecisionTreeClassifier()
model.fit(X_train,Y_train)
per = model.predict(X_test)

score = accuracy_score(Y_test, per)
print(score)
```
```output
0.222188995215311
```