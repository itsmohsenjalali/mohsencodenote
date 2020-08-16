---
title : Running external programs 
tags:
  - python
emoji: 🐍
---

When we want to run programs or commands in our python program we use subprocess module to create a new subprocess


```python
import subprocess

try:
    completed = subprocess.run(["ls", "-l"],
                               capture_output=True, # set out to the stdout
                               text=True, # return output as text
                               check=True) # raise error
    print("args: ", completed.args)
    print("return code: ", completed.returncode) # 0 if successfull or 1 if faild
    print("stderr: ", completed.stderr) # store error if run fail
    print("stdout: ", completed.stdout) # store output of run commands or programs
except subprocess.CalledProcessError as ex:
    print(ex)

```

```Output
args:  ['ls', '-l']
return code:  0
stderr:  
stdout:  total 32
-rw-rw-r-- 1 mojalali mojalali   13 آقۇست   15 12:52 123.py
-rw-rw-r-- 1 mojalali mojalali   39 آقۇست   15 14:09 data.csv
drwxrwxr-x 2 mojalali mojalali 4096 آقۇست   15 13:41 extract
-rw-rw-r-- 1 mojalali mojalali   42 آقۇست   15 14:26 market.json
-rw-rw-r-- 1 mojalali mojalali   13 آقۇست   15 13:01 target.txt
-rw-rw-r-- 1 mojalali mojalali   86 آقۇست   16 17:46 template.html
-rw-rw-r-- 1 mojalali mojalali  429 آقۇست   16 19:28 test.py
-rw-rw-r-- 1 mojalali mojalali 3175 آقۇست   15 13:41 zipfile.zip
```
When error occur

```python
import subprocess

try:
    completed = subprocess.run(["false"],
                               capture_output=True, # set out to the stdout
                               text=True, # return output as text
                               check=True) # raise error
    print("args: ", completed.args)
    print("return code: ", completed.returncode) # 0 if successfull or 1 if faild
    print("stderr: ", completed.stderr) # store error if run fail
    print("stdout: ", completed.stdout) # store output of run commands or programs
except subprocess.CalledProcessError as ex:
    print(ex)

```
```Output
Command '['false']' returned non-zero exit status 1.
```