from typing import List

def num_unique_emails(emails: List[str]) -> int:
    seen = set()
    for email in emails:
        local, domain = email.split('@')
        if '+' in local:
            local = local[:local.index('+')]
        seen.add(local.replace('.','') + '@' + domain)
    return len(seen)

