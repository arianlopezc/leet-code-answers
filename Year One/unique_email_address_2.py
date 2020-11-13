from typing import List

def num_unique_emails(emails: List[str]) -> int:
    clean_emails = set()
    for email in emails:
        name, domain = email.split("@")
        name = name.replace('.','')
        if '+' in name:
            name = name[0:name.index('+')]
        clean_emails.add(name + "@" + domain)
    return len(clean_emails)