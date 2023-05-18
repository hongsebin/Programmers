function solution(my_string) {
    
    // 문자열을 배열로 변경 : split()
    // const array = my_string.split("");
    
    // 배열 뒤집기(역순으로) : reverse()
    // const array_reverse = array.reverse();
    
    // 배열을 문자열로 변경 : join()
    // const answer = array_reverse.join("");
    
    const answer = my_string.split("").reverse().join("");
    
    return answer;
}