---
title : Data cleaning
tags:
  - Machine Learning
emoji: 🧠
---

Before work with the dataset, we should clean and prepare the dataset. For example, delete duplicate or incomplete dataset row or delete outlier data. One more thing that we should do, separate input and output data (labels).

```python
X = df.drop(columns=["OUTPUT"]) # delete OUTPUT column and set data to the new array
Y = df["OUTPUT"] # set OUTPUT column to new array
```

One more example about cleaning dataset and fill empty or Nan fildes (For more detail read this [link](https://towardsdatascience.com/data-cleaning-with-python-and-pandas-detecting-missing-values-3e9c6ebcf78b))

```python
import pandas as pd 

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
```
Sum of null fildes with below command

```python
print(df.isnull().sum())
```
```output
Name                  2
Platform              0
Year_of_Release     269
Genre                 0
Publisher            54
NA_Sales              0
EU_Sales              0
JP_Sales              0
Other_Sales           0
Global_Sales          0
Critic_Score       8582
Critic_Count       8582
User_Score         9129
User_Count         9129
Developer          6623
Rating             6769
dtype: int64
```