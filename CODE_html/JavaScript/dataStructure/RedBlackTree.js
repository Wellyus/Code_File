/*平衡数解决了二叉查找树退化为链表的情况，红黑树解决了平衡树插入和删除时多次旋转和调整的操作
红黑树插入和删除节点的不会像平衡树一样频繁破坏红黑树的规则，不需要频繁调整*/
const Colors = {
    RED:`red`,
    BLACK:`black`
}
function RedBlackNode(key){
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    //默认插入节点为红节点
    this.color = Colors.RED;
    this.isRed = ()=>{
        if(this.color===Colors.RED) {
            return true;
        } else {
            return fasle;
        }
    }
}
function RedBlackTree() {
    this.root = null;
    this.insert = (key)=>{
        if(this.root === null) {
            this.root = new RedBlackNode(key);
            this.root.color = Colors.BLACK;
        } else {
            const newNode = this.insertNode(this.root,key);
            this.fixTreeProperties(newNode);
        }
    }
    //插入节点并返回此节点,插入时记录父节点
    this.insertNode = (node,key)=>{
        if(key < node.key) {
            if(node.left===null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            } else {
                return this.insertNode(node.left,key);
            }
        } else {
            if(node.right===null) {
                node.right = new RedBlackNode(key);
                node.right.parent = node;
                return node.right;
            } else {
                return this.insertNode(node.right,key);
            }
        }
    }
    this.fixProperties = (node)=>{
        while(node&&node.parent&&node.parent.isRed&&node.isRed) {
            let parent = node.parent;
            const grandParent = parent.parent;
            //case A，父节点为左节点
            if(grandParent&&grandParent.left===parent) {
                //叔节点为右节点
                const uncle = grandParent.right;
                //case A1:叔节点也为红色，仅需调整颜色
                if(uncle&&uncle.isRed) {
                    node.parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    uncle.color = Colors.BLACK;
                    node = grandParent;     //?
                } else {
                    //叔节点为黑色，而父节点为红色，仅仅填色是不够的，此时还需要旋转
                    //case A2:节点为左节点
                    if(parent.left === node) {
                        
                    } else {
                        //case A3:节点为右节点

                    }
                }
                
            } else {
                //case B,父节点为右节点
                //叔节点为左节点
                const uncle = grandParent.left;
                //叔节点也为红色，仅需调整颜色
                //case B1
                if(uncle&&uncle.color===Colors.RED) {
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    uncle.color = Colors.BLACK;
                    node = grandParent;     //?
                } else {
                    //叔节点为黑色，而父节点为红色，需要旋转
                    //case B2,节点为左节点
                    if(parent.left === node) {

                    } else {
                        //case B3,节点为右节点

                    }
                }
            }
        }
    }
}