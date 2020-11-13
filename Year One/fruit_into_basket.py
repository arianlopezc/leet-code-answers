from typing import List

def total_fruit(tree: List[int]) -> int:
    total_of_totals = []
    total_in_baskets = 0
    first_basket = -1
    second_basket = -1
    index = 0
    second_basket_index = 0
    while index < len(tree):
        fruit = tree[index]
        if fruit is first_basket or fruit is second_basket:
            total_in_baskets += 1
        else:
            if first_basket is -1:
                total_in_baskets += 1
                first_basket = fruit
            elif second_basket is -1:
                total_in_baskets += 1
                second_basket = fruit
                second_basket_index = index
            else:
                total_of_totals.append(total_in_baskets)
                total_in_baskets = 0
                index = second_basket_index - 1
                first_basket = -1
                second_basket = -1
        index += 1
    total_of_totals.append(total_in_baskets)
    return max(total_of_totals)


print("TOTAL FRUITS = " + str(total_fruit([1,2,1])))
print("TOTAL FRUITS = " + str(total_fruit([0,1,2,2])))
print("TOTAL FRUITS = " + str(total_fruit([1,2,3,2,2])))
print("TOTAL FRUITS = " + str(total_fruit([3,3,3,1,2,1,1,2,3,3,4])))
print("TOTAL FRUITS = " + str(total_fruit([0,1,6,6,4,4,6])))
