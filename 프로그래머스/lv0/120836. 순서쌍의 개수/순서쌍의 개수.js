function solution(n) {
    // 정답 배열 생성
    const result = []
    
    // n의 약수 개수 = 순서쌍의 개수
    
    for (let i = 1; i <= n; i++){
        if(n%i === 0) result.push(i);
    }
    return result.length;
}

