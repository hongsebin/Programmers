function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        answer.push(numbers[i] * 2);
        // push() : 새로운 요소를 배열에 추가할 수 있음
    }
    
    return answer;
}