function solution(my_string, n) {
    let answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            answer += my_string.charAt(i)
            // charAt : 문자열의 지정된 위치에 존재하는 문자를 찾아서 반환
        }
    }
    
    return answer;
}