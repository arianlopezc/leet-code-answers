def length_of_longest_substring(s: str) -> int:
    if len(s) == 0:
        return 0
    aim, max_len = '', 0
    for char in s:
        if char not in aim:
            aim += char
        else:
            aim = aim[aim.rfind(char) + 1:] + char
        max_len = max(len(aim),max_len)
    return max_len


print(length_of_longest_substring("dvdf"))
print(length_of_longest_substring("abcabcbb"))
print(length_of_longest_substring("bbbbb"))
print(length_of_longest_substring("pwwkew"))
