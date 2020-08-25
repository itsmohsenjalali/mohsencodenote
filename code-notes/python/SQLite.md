---
title : Work SQLite 
tags:
  - python
emoji: 🐍
---
When we want to work with database sqlite we use sqlite3 module
- Note: If you want to manage the SQLite with the graphical interface you can use SQLite browser
```python
import sqlite3
import json
from pathlib import Path 

movies = json.loads(Path("movies.json").read_text())

with sqlite3.connect("db.sqlite3") as conn:
    command = "INSERT INTO Movies VALUES(?,?,?)"
    for movie in movies:
        conn.execute(command,tuple(movie.values()))
    conn.commit()
```
```python
import sqlite3

with sqlite3.connect("db.sqlite3") as conn:
    command = "SELECT * FROM Movies"
    cursor = conn.execute(command)
    movies = coursor.fetchall()
    print(movies)
```