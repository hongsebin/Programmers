function solution(n) {
    let answer = 0;
    
    // n 이하의 수 (0~n까지) 구하기
    for (let i = 0; i <= n; i++) {
        // i가 짝수이면 answer에 i 더하기.
        if (i % 2 === 0) answer += i;
    }
    return answer;
}