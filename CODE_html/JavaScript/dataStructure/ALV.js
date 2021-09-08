function NNode(data,left,right) {
    this.data = data;
    this.left = left;
    this.count = 1;
    this.right = right;
}
function ALV() {
    this.root = null;
    this.inOrder = (node)=>{
        if(node!=null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    this.preOrder = (node)=>{
        if(node!=null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    this.nodeHeight = (node)=>{
        if(node==null) {
            return -1;
        }
        return Math.max(this.nodeHeight(node.left),this.nodeHeight(node.right))+1;
    }
    this.balanceFactor = (node)=>{
        var factor = this.nodeHeight(node.left) - this.nodeHeight(node.right);
        return factor;
    }
    this.isALV = (node)=>{
        if(this.balanceFactor(node)==2) {
            if(this.balanceFactor(node.left)==1) {
                node = this.LLRotation(node);
            } else {
                node = this.LRRotation(node);
            }
        }
        if(this.balanceFactor(node)==-2) {
            if(this.balanceFactor(node.right)==1) {
                node = this.RLRotation(node);
            } else {
                node = this.RRRotation(node);
            }
        }
        return node;
    }
    this.insert = (data)=>{
        this.root = this.insertNode(this.root,data);
    }
    this.insertNode = (node,data)=>{
        if(node==null) {
            node = new NNode(data,null,null);
        } else if(data < node.data) {
            node.left = this.insertNode(node.left,data);
        } else if(data > node.data) {
            node.right = this.insertNode(node.right,data);
        } else {
            node.count++;
        }
        node = this.isALV(node);
        return node;
        }
    this.LLRotation = (node)=>{
        var current = node.left;
        node.left = current.right;
        current.right = node;
        return current;
    }
    this.RRRotation = (node)=>{
        var current = node.right;
        node.right = current.left;
        current.left = node;
        return current;
    }
    this.LRRotation = (node)=>{
        node.left = this.RRRotation(node.left);
        node = this.LLRotation(node);
        return node;

    }
    this.RLRotation = (node)=>{
        node.right = this.LLRotation(node.right);
        node = this.RRRotation(node);
        return node;
    }
    this.getMin = (node)=>{
        var current = node;
        while(current.left!=null) {
            current = current.left;
        }
        return current;
    }
    this.remove = (data)=>{
        this.root = this.removeNode(this.root,data);
    }
    this.removeNode = (node,data)=>{  
        if(node==null) {
            return null;
        }                             
        if(data<node.data) {
            node.left = this.removeNode(node.left,data);
        } else if(data > node.data) {
            node.right =  this.removeNode(node.right,data);
        } else {
            if(node.left==null&&node.right==null) {
                node = null;
                return node;
            } else if(node.left==null) {
                node = node.right;
            } else if(node.right==null) {
                node = node.left;
            } else {
                var current = this.getMin(node.right);
                node.data = current.data;
                node.right = this.removeNode(node.right,node.data);
            }
        }
        node = this.isALV(node);
        return node;
    }
}
var alv = new ALV();
for(var i = 4;i >= 1; --i) {
    alv.insert(i);
}
//alv.remove(3);
alv.insert(5);
alv.remove(5);
alv.remove(4);
alv.inOrder(alv.root);
alv.preOrder(alv.root);