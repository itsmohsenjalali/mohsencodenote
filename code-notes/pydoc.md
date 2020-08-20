---
title : Pydoc tool 
tags:
  - python
emoji: 🐍
---

When you want read the document of modules or packages you can use Pydoc in this way

```terminal
pydoc3 math 
```
```Ouput
Help on module math:

NAME
    math

MODULE REFERENCE
    https://docs.python.org/3.7/library/math
    
    The following documentation is automatically generated from the Python
    source files.  It may be incomplete, incorrect or include features that
    are considered implementation detail and may vary between Python
    implementations.  When in doubt, consult the module reference at the
    location listed above.

DESCRIPTION
    This module provides access to the mathematical functions
    defined by the C standard.

FUNCTIONS
    acos(x, /)
        Return the arc cosine (measured in radians) of x.
    
    acosh(x, /)
:
```
Pydoc has interest feature that you can run localhost server and read the all of the packages documents in the browser

```terminal
pydoc3 -p 1234
```