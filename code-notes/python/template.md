---
title : Work with web page
tags:
  - python
emoji: 🐍
---

If we want to work with html file we use Template class in string module

```html
<!DOCTYPE html>
<html lang="en">

<head>
</head>

<body>
    hi $name
</body>

</html>
```

```python
from string import Template
from pathlib import Path

temp = Template(Path("template.html").read_text())
temp.substitute(name="ali")
```