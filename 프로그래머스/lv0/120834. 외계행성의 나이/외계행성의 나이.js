// 1. age값을 입력받는다
function solution(age) {
    
    // 2. 빈 문자열 생성
    let answer = '';
    
    // 3. 알파벳 문자열 배열 생성
    let alpha = ['a','b','c','d','e','f','g','h','i','j'];
    
    // 4. 입력받은 age값을 문자열로 변환
    age = age.toString()
    
    // 5. age를 알파벳으로 변환하는 for문
    for (let i = 0; i < age.length; i++){
        answer = answer + alpha[age[i]]
    }
    return answer
}