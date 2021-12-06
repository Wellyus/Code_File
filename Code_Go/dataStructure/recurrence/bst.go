package main

type TreeNode struct {
	val   int
	Left  *TreeNode
	Right *TreeNode
}

func mergeTrees_r(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	cur := new(TreeNode)
	switch {
	case root1 == nil && root2 == nil:
		cur = nil
	case root1 == nil && root2 != nil:
		cur = root2
	case root1 != nil && root2 == nil:
		cur = root1
	default:
		cur.Val = root1.Val + root2.Val
		cur.Left = mergeTrees(root1.Left, root2.Left)
		cur.Right = mergeTrees(root1.Right, root2.Right)
	}
	return cur
}

func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	cur := new(TreeNode)
	switch {
	case root1 == nil && root2 == nil:
		cur = nil
	case root1 == nil && root2 != nil:
		cur = root2
	case root1 != nil && root2 == nil:
		cur = root1
	default:
		cur.Val = root1.Val + root2.Val
		cur.Left = mergeTrees(root1.Left, root2.Left)
		cur.Right = mergeTrees(root1.Right, root2.Right)
	}
	return cur
}
