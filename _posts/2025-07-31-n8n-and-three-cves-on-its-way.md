---
layout: post
title: "N8N and three CVEs on its way"
date: 2025-07-31 22:10:37 -0300
category: "Vulnerability Research"
author: "Security Research Team"
tags: [n8n, cve, automation, vulnerability-research]
---

[n8n](https://n8n.io/) is basically Lego for automation: you snap little blocks *— called nodes —* together to make something cool for you or your team. There are trigger nodes, action nodes, logic nodes, you name it. Chain them up and voilà: *"when someone clicks, hit this API; if the response is 200 OK, drop a message in my Telegram."*

This takes a ton of grunt work off dev teams and even lets non-coders get things done.

But heads-up: mis-configure it or ignore security best practices and n8n turns into a **double-edged sword**.

---

*— Whoever threads finely in the code uncovers holes beneath the carpet —*

## CVE-2025-49595: Denial of Service via Malformed Binary Data Requests

**Reference**: [CVE-2025-49595](https://github.com/advisories/GHSA-pr9r-gxgp-9rm8)

## CVE-2025-52554: Improper Authorization through /stop endpoint  

**Reference**: [CVE-2025-52554](https://github.com/advisories/GHSA-gq57-v332-7666)

## CVE-2025-XXXXX: XSS to Account Takeover

**Reference**: [CVE-2025-XXXXX](https://github.com/advisories/xxxxx)

---

## Conclusion

Get to reading code. Human errors are the security researcher's lunch and code is the plate on which those errors are served.

Thanks for reading! *ACK*
