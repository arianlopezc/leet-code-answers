def num_unique_emails(S: str, K: int) -> str:
    S = S.replace("-","")
    if len(S.strip()) == 0:
        return ""
    inverted_s = S[::-1]
    coded = ""
    index_k = K
    for character in inverted_s:
        if character != "-":
            coded += character.upper()
            index_k -= 1
            if index_k == 0:
                coded += "-"
                index_k = K
    coded = coded[::-1]
    if coded[0] == "-":
        coded = coded[1:]
    return coded

print(num_unique_emails("---", 3))