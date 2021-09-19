//先序遍历迭代写法
function inOr(root) {
    if(root===null) {
        return;
    }
    console.log(root.val);
    inOr(root.left);
    inOr(root.right);
}
function inOrder(root) {
    if(root===null) {
        return;
    }
    const stack = [];
    while(root!==null) {
        while(root!==null) {
            while(root!==null) {
                stack.push(root);
                console.log(root.val);
                root = root.left;
            }
            root = stack[stack.length-1].right;   
        }
        stack.pop();
        root = stack[stack.length-1].right;
    }
}
//后序迭代写法
function post(root) {
    if(root===null) {
        return ;
    }
    post(root.left);
    post(root.right);
    console.log(root.val);
}
function rePost(root) {
    if(root===null) {
        return;
    }
    const stack = [];
    while(root!==null) {
        stack.push(root);
        cons
    }
}

class Solution {
    public:
        vector<int> preorderTraversal(TreeNode* root) {
            vector<int> res;
            if (root == nullptr) {
                return res;
            }
    
            stack<TreeNode*> stk;
            TreeNode* node = root;
            while (!stk.empty() || node != nullptr) {
                while (node != nullptr) {
                    res.emplace_back(node->val);
                    stk.emplace(node);
                    node = node->left;
                }
                node = stk.top();
                stk.pop();
                node = node->right;
            }
            return res;
        }
    };
function inOrder(root) {
    if(root === null) {
        return ;
    }
    const stack = [];
    const result = [];
    while(node!==null||stack.length>0) {
        while(root!==null) {
            stack.push(root);
            result.push(root.val);
            root = root.left;
        }
        root = stack[stack.length-1];
        stack.pop();
    }
    return result;
}