---
title : Virtual environment (venv)
tags:
  - python
emoji: 🐍
---

When we want to develop the project we should use a virtual environment, because we use some packages with a specific version that we don't use them in another project.

Create a virtual environment

```terminal
python -m venv NAME_OF_DIRECTORY
```
After creating a virtual environment we should activate the virtual environment

```terminal
source NAME_OF_DIRECTORY/bin/activate
```
And then we can install packages that we want for this project.

Deactivate virtual environment
```terminal
deactivate
```