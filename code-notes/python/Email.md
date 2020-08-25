---
title : Send Email with Python
tags:
  - python
emoji: 🐍
---

```python
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from pathlib import Path
import smtplib

message = MIMEMultipart()
message["from"] = "mohsen jalali"
message["to"] = "123@gmail.com"
message["subject"] = "this is a test message"
message.attach(MIMEText("salam mohsen"))
message.attach(MIMEImage(Path("1.jpg")))

with smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.login("USER", "PASS")
    smtp.send_message(message)
    print("Sent ...")

```