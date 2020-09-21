---
title : Don't migrate database on Heroku
tags:
  - Heroku
emoji: 🖥️
---

First: add below line to the top of Procfile

```procfile
release: python manage.py migrate
```

Second: upload migrations folder with your code (remove from .gitignore file)