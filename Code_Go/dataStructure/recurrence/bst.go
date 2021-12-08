package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type frame struct {
	root1 *TreeNode
	root2 *TreeNode
	cur   *TreeNode
	pc    int
}

var stk = [1024]frame{}
var top int

func call(root1 *TreeNode, root2 *TreeNode) {
	stk[top] = frame{root1: root1, root2: root2}
	top++
}

func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	call(root1, root2)
	for top > 0 {
		fm := &stk[top-1]
		switch fm.pc++; fm.pc - 1 {
		case 0:
			switch {
			case root1 == nil && root2 == nil:
				fm.cur = nil
				top--
			case root1 == nil:
				fm.cur = root2
				top--
			case root2 == nil:
				fm.cur = root1
				top--
			default:
				fm.cur = new(TreeNode)
				fm.cur.Val = fm.root1.Val + fm.root2.Val
				mergeTrees(fm.root1.Left, fm.root2.Left)
			}
		case 1:
			fm.cur.Left = stk[top].cur
			mergeTrees(fm.root1.Right, fm.root2.Right)
		case 2:
			fm.cur.Right = stk[top].cur
			top--
		}
	}
	return stk[0].cur
}
