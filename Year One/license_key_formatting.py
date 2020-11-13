def num_unique_emails(S, K):
    formatted_key = S[0:K]
    if "-" in formatted_key:
        formatted_key = formatted_key[0:formatted_key.index("-")]
        S = S[S.index("-"):]
    total_initially_added = len(formatted_key)
    formatted_key += "-"
    jump_datch = K
    for index in range(total_initially_added, len(S)):
        if S[index] != "-":
            formatted_key += S[index].upper()
            jump_datch -= 1
            if jump_datch is 0 and index < len(S) - 1:
                formatted_key += "-"
                jump_datch  = K
        index += 1
    return formatted_key


print(num_unique_emails("5F3Z-2e-9-w", 4))
print(num_unique_emails("2-5g-3-J", 2))
# do it reversed 