//param:n
//return [["",...""],["",...""]]所有解决方案  Q代表皇后，.代表空位
/*
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
*/
function solveQueens(n) {
    const res = new Array(n);
    for(let i = 0; i < n; i++) {
        res[i] = new Array(n);
        res[i].fill(".");
    }
    const result = [];
    function isValid(row,col) {
        //row,col分别代表皇后的行号和列号
        //检查列
        for(let j = row-1; j >= 0; j--) {
            if(res[j][col]==="Q") {
                return false;
            }
        }
        //检查\
        for(let i = row-1,j=col-1;i>=0&&j>=0;i--,j--) {
            if(res[i][j]==="Q") {
                return false;
            }
        }
        //检查/
        for(let i = row-1,j=col+1;i>=0&&j<n;i--,j++) {
            if(res[i][j]==="Q") {
                return false;
            }
        }
        return true;
    }
    function solve(row) {
        if(row===n) {
            let arr = [];
            for(let i = 0; i < n; i++) {
                arr.push(res[i].join(""));
            }
            result.push([...arr]);
            return ;
        }
        for(let col = 0; col < n; col++) {
            if(isValid(row,col)===true) {
                res[row][col] = "Q";
                solve(row+1);
                res[row][col] = ".";
            }
        }
    }   
    solve(0);
    return result;
}
console.log(solveQueens(8));