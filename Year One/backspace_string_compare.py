def backspace_string_compare(S: str, T: str) -> bool:
    stack_for_s = []
    stack_for_t = []
    for character in S:
        if character != '#':
            stack_for_s.append(character)
        else:
            if len(stack_for_s) > 0:
                stack_for_s.pop()
    for character in T:
        if character != '#':
            stack_for_t.append(character)
        else:
            if len(stack_for_t) > 0:
                stack_for_t.pop()
    return stack_for_s == stack_for_t
    
