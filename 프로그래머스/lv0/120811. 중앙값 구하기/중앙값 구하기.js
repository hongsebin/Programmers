function solution(arr) {
    
    // 오름차순 정렬 : arr.sort((a,b)=>a-b);
    // 내림차순 정렬 : arr.sort((a,b)=>b-a);
    
    arr.sort((a,b) => a-b);
    
    var val = parseInt(arr.length/2);
    return arr[val];
}