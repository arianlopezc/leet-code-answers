class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


def count_complete_tree_nodes(root: TreeNode) -> int:
    def navigate_through_tree(node: TreeNode, total: int):
        if node.left is not None:
            total += 1
            total = navigate_through_tree(node.left, total)
        if node.right is not None:
            total += 1
            total = navigate_through_tree(node.right, total)
        return total
    if root is not None:
        return navigate_through_tree(root, 1)
    else:
        return 0

root = TreeNode(3)
print(count_complete_tree_nodes(root))
