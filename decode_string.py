from typing import List

def decode_string(s: str) -> str:
    if "[" in s:
        index, stack = 0, 0
        result = ""
        while index < len(s) and "[" in s:
            if s[index].isdigit() is True:
                index_digit = index
                mult = ""
                while s[index_digit].isdigit() is True:
                    mult += s[index_digit]
                    index_digit += 1
                s = s[0:index + 1] + s[index_digit:]
                mult = int(mult)
                stack += 1
                inner_index = index + 1
                while stack > 0:
                    inner_index += 1
                    if s[inner_index] == "[":
                        stack += 1
                    elif s[inner_index] == "]":
                        stack -= 1
                result += mult * decode_string(s[index + 2: inner_index])
                index = inner_index
            else:
                result += s[index]
            index += 1
        return result
    else:
        return s
