---
title: Web Scraping
tags:
  - python
emoji: 🐍
---

When we want to scrap the web pages use Beautifulsouap

```terminal
pip install beautifulsoup4
```
```python

import requests
from bs4 import BeautifulSoup

res = requests.get("https://example.com")
soup = BeautifulSoup(res.text, "html.parser")

questions = soup.select(".CSS-class-name")
for question in questions:
    print(question.select_one(".CSS-class-name").getText())
```