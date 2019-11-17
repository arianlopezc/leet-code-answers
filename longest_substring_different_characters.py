def longest_substring_different_characters(s: str) -> int:
    if len(s.strip()) == 0:
        return 0
    substring = ""
    longest_substring = 0
    first_char, second_char = "", ""
    for character in s:
        if character in substring:
            substring += character
        else:
            if first_char == "" or second_char == "":
                substring += character
                if first_char == "":
                    first_char = character
                else:
                    second_char = character
            else:
                new_starting_position = min(substring.rfind(first_char), substring.rfind(second_char)) + 1
                first_char = substring[new_starting_position]
                second_char = character
                substring = substring[new_starting_position: ] + character
        longest_substring = max(longest_substring, len(substring))
    return longest_substring

