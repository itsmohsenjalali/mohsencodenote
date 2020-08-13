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