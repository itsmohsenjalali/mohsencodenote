---
title : Pip packet manager
tags:
  - python
emoji: 🐍
---

When we want to install package we use pip

```terminal
pip install request
```
Installing package with specific version
```terminal
pip install request==2.9.0
```
Installing package when we don't know the exact version
```terminal
pip install request==2.9.*
```
or
```terminal
pip install request~=2.9.0
```
If request package released versions 2.9.0, 2.9.1, 2.9.2, those commands install the latest version that is 2.9.2.