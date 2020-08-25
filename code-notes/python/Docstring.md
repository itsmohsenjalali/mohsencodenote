---
title : Document your code and publish package 
tags:
  - python
emoji: 🐍
---

If you want to publish your codes and packages you should write a document for them to better understanding and usage. In Python, you can write a description with  """ this is a description """.

```python
# in the firt of file 
""" one line description.

    A more detailed description.
"""
# Or
"""one line description."""


def convert(path):
    """ 
    Convert PDF to TEXT

    Parameters:
    path (str): the path of PDF file

    Returns:
    str: Content of PDF file
    """

```