function nodeBST(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 1;
    this.show = () => {
        return this.data;
    }
}
function BST() {
    this.root = null;
    this.insert= (data) => {
        var current = new nodeBST(data,null,null);
        if(this.root==null) {
            this.root = current;
        } else {
            var node = this.root;
            var i = 1;       //node节点为当前可以插入的节点
            while(i==1) {
                if(data < node.data) {
                    if(node.left==null) {
                        node.left = current;
                        break;
                    } else {
                        node = node.left;
                    }
                } else {
                    if(node.right == null) {
                        node.right = current;
                        break;
                    } else {
                        node = node.right;
                    }
                }
            }
        }
    }
    this.inOrder = (node) => {
        if(node!=null) {
            this.inOrder(node.left);
            console.log(node.data+"->"+node.count);
            this.inOrder(node.right);
        }
    }
    this.preOrder = (node) => {
        if(node!=null) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    this.postOrder = (node) => {
        if(node!=null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }
    this.getMin = (node)=>{
        var current = node;
        while(current.left!=null) {
            current = current.left;
        }
        return current.show();
    }
    this.getMax = (node)=>{
        var current = node;
        while(current.right!=null) {
            current = current.right;
        }
        return current.show();
    }
    this.get = (value)=>{
        var current = this.root;
        var i = 1;
        while(i==1) {
            if(current==null) {
                return null;
            }
            if(current.data==value) {
                return current;
            }
            if(value<current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }
    this.update = (data)=>{
        var node = this.get(data); 
        if(node==null) {
            this.insert(data);
        } else {
            node.count++;
        }
    }
    this.remove = (data)=>{
        this.root = this.removeNode(this.root,data);
    }
    this.removeNode = (node,data)=>{
        if(node==null) {
            return null;
        }
        if(data==node.data) {
            if(node.left==null&&node.right==null) {
                return null;
            }
            if(node.left==null) {
                return node.right;
            }
            if(node.right==null) {
                return node.left;
            }
            if(node.left!=null&&node.right!=null) {
                var Min = this.getMin(node.right);
                node.data = Min.data;
                var rnode = this.removeNode(node.right,Min.data);
                node.right = rnode;
                return node;
            }
        }
        if(data < node.data) {
            let  current = node.left;
            node.left = this.removeNode(current,data);
            return node;                                    //返回已经删除好的节点
        }
        if(data > node.data) {
            let  current = node.right;
            node.right = this.removeNode(current,data);
            return node;
        }
    }
}
var bst = new BST();
for(var i = 0; i < 100; ++i) {
    bst.update(Math.floor(80+Math.random()*20));
}
bst.inOrder(bst.root);