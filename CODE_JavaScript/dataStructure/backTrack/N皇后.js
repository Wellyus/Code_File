//param:n
//return [["",...""],["",...""]]所有解决方案  Q代表皇后，.代表空位
function solveQueens(n) {
    //已选择的路径
    const track = "";
    //记录结果
    const result = [];
    function judge(track,choice) {
        //[.............]
        //[.............]
        //[....(i,j)....]
        //[.............] 
        let i = (track.length-1)/n;
        let j = (track.length-1)%n;
        //判断竖行
        for(let k = i-1; k >=0; k--) {
            if(track[k*n+j]===choice) {
                return false;
            }
        }
        //判断横行
        for(let k = j-1; k >= 0; k--) {
            if(track[i*n+k]===choice) {
                return false;
            }
        }
        //判断斜行,\
        for(let x = i-1,y = j-1;x>=0&&y>=0;x--,y--) {
            if(track[n*x+y]===choice) {
                return false;
            }
        }
        for(let x = i-1,y=j+1;x>=0&&y<n;x--,y++) {
            if(track[n*x+y]===choice) {
                return false;
            }
        }
        return true;
    }
    function solve(track) {
        if(track.length===n*n) {
            let arr = [];
            for(let i = 0; i < n*n; i = i + n) {
                //第一个片段为0,n;
                arr.push(track.slice(i,i+n));
            }
            result.push([...arr]);
            return ;
        }
        //做选择，完成一条完整的路径
        for(let choice of ["Q","."]) {
            //判断
            if(choice==="Q") {
                let res = judge(track,choice);
                if(res===true) {
                    track+=choice;
                    solve(track);
                    track = track.slice(0,-1);
                }
            } else {
                track+=choice;
                solve(track);
                track = track.slice(0,-1);
            }
        }
    }
    solve(track);
    return result;
}
const arr = solveQueens(2);
console.log(arr);
