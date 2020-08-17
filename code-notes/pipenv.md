---
title : Virtual environment (pipenv)
tags:
  - python
emoji: 🐍
---
Python has another tool that name is Pipenv. This tool combines pip and Venv to the one tool. Pipenv for python like npm for javascript.

```terminal
pip install pipenv
```
Then
```terminal
pipenv install request
```
For activate a virtual environment

```terminal
pipenv shell
```
For deactivate

```terminal
exit
```
When we use pipenv for virtual environment it create two file in the project directory with name "Pipfile" and "Pipfile.lock".
When you want to move the project to another computer you can use this file to install the dependency of the project.

If you want to install dependency with the latest version that release you should use Pipfile

```terminal
pipenv install
```
But if you want to install dependency with specific version you should use Pipfile.lock

```terminal
pipenv install --ignore-pipfile
```
If you want to know about the dependency of the package you can use the below command

```terminal
pipenv graph
```
```Output
requests==2.24.0
  - certifi [required: >=2017.4.17, installed: 2020.6.20]
  - chardet [required: >=3.0.2,<4, installed: 3.0.4]
  - idna [required: >=2.5,<3, installed: 2.10]
  - urllib3 [required: >=1.21.1,<1.26,!=1.25.1,!=1.25.0, installed: 1.25.10]
```

If you want to update the package you can use the below command

```terminal
pipenv update --outdated
```
or

```terminal
pipenv update SPECIFIC_PACKAGE
```