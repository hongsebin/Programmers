function solution(num_list) {
    
    // 짝수 문자열 개수
    const two = num_list.filter(n => n % 2 === 0).length;
    // filter() : 주어진 기준을 만족하는 요소를 모아 새로운 배열 생성
    
    return [two, num_list.length-two]
}