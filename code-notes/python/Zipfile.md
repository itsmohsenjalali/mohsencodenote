---
title : Work with zip file 
tags:
  - python
emoji: 🐍
---

When we want work with zip file use below instruction

```python
from pathlib import Path
from zipfile import ZipFile

with ZipFile("test/zipfile.zip", "w") as zipdata: # create zip file
    for path in Path().glob("*.py"):
        zipdata.write(path)
with ZipFile("test/zipfile.zip") as zipdata: # read data of files in zip file
    print(zipdata.namelist())
    info = zipdata.getinfo("test.py")
    print(info.file_size)
    print(info.compress_size)
    zipdata.extractall("test/extract")

```