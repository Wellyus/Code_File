//BFS框架
function bfs(root) {
    if(root===null) {
        return null;
    }
    const result = [];
    result.push(root);
    while(result.length>0) {
        //记录当前层的节点个数
        let num = result.length;
        for(let i = 0 ; i < num; i++) {
            let cur = result.shift();
            console.log(`当前遍历节点为${cur}`);
            if(cur.left!==null) {
                result.push(cur.left);
            }
            if(cur.right!==null) {
                result.push(cur.right);
            }
        }
    }
}
bfs();