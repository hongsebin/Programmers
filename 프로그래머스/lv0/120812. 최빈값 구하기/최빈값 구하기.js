function solution(array) {
    
    // 오름차순 정렬
    const arr = array.sort((a,b)=>a-b);
    
    var answer = 0;
    
    let cnt = 0;
    let choi = 0; //최빈값
    let choiRepeat = 0; // 최빈값이 될때 몇 번 반복되었는지
    let repeatCnt = 0; // 같은 숫자가 몇 번 반복되었는지
    let beforeNumber = -1; // 지금 보는 숫자의 이전 숫자
    let choiDup = false; // 최빈값이 중복되었는지 false.
    while(cnt < arr.length) {
        if(beforeNumber !== array[cnt]) {
            repeatCnt = 1;
            // 숫자가 바뀌면 1번 반복된거니까 1.
        } else {
            repeatCnt = repeatCnt + 1;            
        }
        
        if(repeatCnt === choiRepeat) {
            if(choi !== array[cnt]) {
                choiDup = true;
            }
        }
        
        if(repeatCnt > choiRepeat) {
            choi = array[cnt]
            choiRepeat = repeatCnt;
            choiDup = false;
        }
        
        beforeNumber = array[cnt];
        cnt = cnt+1;
    }
    if (choiDup) return -1;
    return choi;
}