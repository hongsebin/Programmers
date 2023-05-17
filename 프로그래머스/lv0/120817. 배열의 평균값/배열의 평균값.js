function solution(numbers) {
    
    // reduce : 배열의 모든 요소의 값을 합쳐서 새로운 값으로 반환하는 매서드
    // 두 개의 인자 'acc', 'cur' 을 가진다.
    // acc : 가장 첫 번째 원소를 할당 (index 0)
    // cur : 나머지 원소가 순차적으로 할당 (index 1, 2, ...)
    
    const sum = numbers.reduce(function(acc, cur) {
        return acc + cur
    });
    
    return sum/numbers.length;
}