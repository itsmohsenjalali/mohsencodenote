---
title: Work with file and directory
tags:
  - python
emoji: 🐍
---

When we want to work with path of directory and file use Path class

```python
from pathlib import Path

print(Path.home())
print(Path("gatsby/site"))
path = Path("gatsby/site/package.json")
print(path.is_file())
print(path.is_dir())
print(path.name)
print(path.stem)
print(path.suffix)
print(path.parent)
path = path.with_name("file.txt") # not real just represent object
print(path.absolute())
path = path.with_suffix(".py") # not real just represent object
print(path.absolute())

```

```Output
/home/user
gatsby/site
True
False
package.json
package
.json
gatsby/site
/home/user/Desktop/gatsby/site/file.txt
/home/user/Desktop/gatsby/site/file.py
```
```python
from pathlib import Path

path = Path("gatsby/site")

paths = [p for p in path.iterdir()]
print(paths)
```
```Output
[PosixPath('gatsby/site/_config.yml'), PosixPath('gatsby/site/flow-typed'), PosixPath('gatsby/site/gatsby-node.js'), PosixPath('gatsby/site/gatsby-browser.js'), PosixPath('gatsby/site/create-pages.js'), PosixPath('gatsby/site/.prettierrc.js'), PosixPath('gatsby/site/on-create-node.js'), PosixPath('gatsby/site/public'), PosixPath('gatsby/site/.git'), PosixPath('gatsby/site/node_modules'), PosixPath('gatsby/site/LICENSE.md'), PosixPath('gatsby/site/setupTests.js'), PosixPath('gatsby/site/static'), PosixPath('gatsby/site/.gitignore'), PosixPath('gatsby/site/.travis.yml'), PosixPath('gatsby/site/netlify.toml'), PosixPath('gatsby/site/source-nodes.js'), PosixPath('gatsby/site/graphql.config.json'), PosixPath('gatsby/site/.coveralls.yml'), PosixPath('gatsby/site/jestPreprocess.js'), PosixPath('gatsby/site/gatsby-config.js'), PosixPath('gatsby/site/readme.md'), PosixPath('gatsby/site/.env'), PosixPath('gatsby/site/package.json'), PosixPath('gatsby/site/.flowconfig'), PosixPath('gatsby/site/.cache'), PosixPath('gatsby/site/package-lock.json'), PosixPath('gatsby/site/.all-contributorsrc'), PosixPath('gatsby/site/src')]
```
- Note: PosixPath for unix operation system and windowsPath for windows.

```python
from pathlib import Path

path = Path("gatsby/site")

#path.mkdir()
#path.rmdir()
#path.rename()

paths = [p for p in path.iterdir() if p.is_dir()] # return just directory
print(paths)
```

```Output
[PosixPath('gatsby/site/flow-typed'), PosixPath('gatsby/site/public'), PosixPath('gatsby/site/.git'), PosixPath('gatsby/site/node_modules'), PosixPath('gatsby/site/static'), PosixPath('gatsby/site/.cache'), PosixPath('gatsby/site/src')]
```
If you want to search in the dir path use the below instruction

- Note: iterdir() function doesn't get pattern but glob() function get function.
```python
from pathlib import Path

path = Path("gatsby/site")

py_files = [p for p in path.glob("*.js")] # return all .js file 
print(py_files)
```
```Output
[PosixPath('gatsby/site/gatsby-node.js'), PosixPath('gatsby/site/gatsby-browser.js'), PosixPath('gatsby/site/create-pages.js'), PosixPath('gatsby/site/.prettierrc.js'), PosixPath('gatsby/site/on-create-node.js'), PosixPath('gatsby/site/setupTests.js'), PosixPath('gatsby/site/source-nodes.js'), PosixPath('gatsby/site/jestPreprocess.js'), PosixPath('gatsby/site/gatsby-config.js')]
```
- Note: if you want to return file in all child directory set pattern like this '**/*.js' or use rglob() function.

```python
from pathlib import Path

path = Path("gatsby/site")

py_files = [p for p in path.glob("**/*.py")]
py_files2 = [p for p in path.rglob("*.py")]
print(" first method: ",py_files)
print(" second method: ",py_files2)
```

```Output
first method: [PosixPath('gatsby/site/node_modules/railroad-diagrams/railroad_diagrams.py')]
second method: [PosixPath('gatsby/site/node_modules/railroad-diagrams/railroad_diagrams.py')]
```

We want to work with file in the dir path

```python
from pathlib import Path

file_path = Path("test/123.py")
if file_path.exists():
    print("File Found")
    file_path = file_path.rename("test/target.txt")
    # file_path.unlink() --> delete file
    print(file_path.stat())
else:
    print("File Not Found")

```

```Output
File Found
os.stat_result(st_mode=33204, st_ino=5384559, st_dev=2052, st_nlink=1, st_uid=1000, st_gid=1000, st_size=6, st_atime=1597476538, st_mtime=1597476538, st_ctime=1597476557)
```
- Note: "st_size" size of the file in byte, "st_atime" last time access to the file, "st_mtime" last time modified, "st_ctime" the time that file created.

We use time with the below instruction because human-readable

```python
from pathlib import Path
from time import ctime

file_path = Path("test/123.py")
if file_path.exists():
    print("File Found")
    print(ctime(file_path.stat().st_ctime))
else:
    print("File Not Found")

```
```Output
Sat Aug 15 12:42:27 2020
```
We can use this library to read and write in the file instead of work with open function and this way is easier

```python
from pathlib import Path

file_path = Path("test/123.py")
if file_path.exists():
    print("File Found")
    print("Read text of the file: ", file_path.read_text())
    print("Read byte of the file: ", file_path.read_bytes())
    file_path.write_text("mohsen jalali")
    print("Read text of the file: ", file_path.read_text())
    print("Read byte of the file: ", file_path.read_bytes())
else:
    print("File Not Found")

```
```Output
Read text of the file:  salam

Read byte of the file:  b'salam\n'
Read text of the file:  mohsen jalali
Read byte of the file:  b'mohsen jalali'
```
If we want to copy file the best way to use shutil module

```python
from pathlib import Path
import shutil
file_path = Path("test/123.py")
target_path = Path("test/target.txt")
if file_path.exists():
    shutil.copy(file_path, target_path)
else:
    print("File Not Found")
```