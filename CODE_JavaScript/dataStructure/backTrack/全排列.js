//param:arr：number;
//return [[],[]];
function backTrack(arr) {
    const result = [];
    //记录已经选择的路径
    const track = [];
    function backtrack(arr,track) {
        if(arr.length===track.length) {
            //result.push(track)为何为空?
            //console.log(track);
            result.push([...track]);
            return ;
        }
        for(let i = 0; i < arr.length; i++) {
            //选择
            if(track.includes(arr[i])) {
                continue;
            } else {
                track.push(arr[i]);
                backtrack(arr,track);
                track.pop();
            }
        }
    }
    backtrack(arr,track);
    return result;
}
const arr = [1,2,3];
console.log(backTrack(arr));