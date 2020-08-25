---
title : Application Programming Interface (API)
tags:
  - python
emoji: 🐍
---

When we want to work with data in another service with JSON data type the best way is using API

```python
import requests

url = "www.example.com"
api_key = "your api key"

headers = {
    #key value for http headers
}
params = {
    # parameters for get data 
}
res = requests.get(url, headers= headers, params= params)
```

- For security, we should separate the API key to another file and upload this file only on the server.