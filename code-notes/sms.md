---
title : Send SMS with Twilio
tags:
  - python
emoji: 🐍
---

If in our application we want to send text message we can use Twilio service

```terminal
pip install twilio
```

```python
from twilio.rest import Client

account_sid = "..."
auth_token = "..."

client = Client(account_sid, auth_token)

clinet.messages.create(
    to="...",
    from_="...",
    body="This is text message"

)
```