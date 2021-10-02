var mergeKLists = function(lists) {
    if(lists.length===0) {
        return null;
    }
    let result = [];
    for(let i = 0; i < lists.length; i++) {
        let cur = lists[i];
        while(cur!==null) {
            result.push(cur);
            cur = cur.next;
        }
    }
    function quickSort(arr) {
        if(arr.length<2) {
            return arr;
        }
        let pivot = arr[0];
        const less = [];
        const greater = [];
        for(let i = 1; i < arr.length; i++) {
            if(arr[i].val<=pivot) {
                less.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }
        return quickSort(less).concat(pivot,[...quickSort(greater)]);
    }
    result = quickSort(result);
    console.log([...result]);
    for(let i = 0; i < result.length-1; i++) {
        result[i].next = result[i+1];
    }
    result[result.length-1].next = null;
    return result[0];
};
var getIntersectionNode = function(headA, headB) {
    let cur1 = headA;
    let cur2 = headB;
    while(cur1.next!==null) {
        cur1 = cur1.next;
    }
    cur1.next = headB;
    cur1 = headA;
    while(cur2.next!==null) {
        cur2 = cur2.next;
    }
    cur2.next = headA;
    cur2 = headB;
    while(cur1!==cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
};
var getIntersectionNode = function(headA, headB) {
    let cur1 = headA;
    let cur2 = headB;
    while(cur1!==cur2) {
        if(cur1.next===null) {
            cur1.next = headB;
        }
        if(cur2.next===null) {
            cur2.next===headA;
        }
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
}