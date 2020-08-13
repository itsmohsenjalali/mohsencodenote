---
title : unpacking list item 
tags:
  - python
emoji: 🐍
---

Some notices about unpacking

Unpacking list

```python
items = [1,2,3,4,5,6,7]
first , second , *other = items

print(first,second,other)
```

```Output
1
2
[3,4,5,6,7]
```
Unpacking dictionary in for loops

```python
dic = {"name" : "ali" , "age" : 10, "family" : "jalali"}
for key,value in dic.items():
    print(key,value)
```

```Output
name "ali"
age 10
family "jalali"
```
Unpacking list in function

```python
def func(*number):
    print(number)
func(1,2,3,4,5)
```

```Output
[1,2,3,4,5]
```
Unpacking dictionary in function

```python
def func(**dic):
    print(dic)
func(name="ali",age=10,family="ahmadi")
```

```Output
{
    "name" : "ali",
    "age" : 10,
    "family" : "ahmadi"
}
```