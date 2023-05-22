function solution(emergency) {
    
    // .slice() : index 0부터 추출
    // .sort((a,b) => a-b) : 오름차순
    // .sort((a,b) => b-a) : 내림차순
    const sort = emergency.slice().sort((a,b) => b-a);
    
    // .map() : 새로운 배열 만들때 사용
    // 아래에 v는 변수
    return emergency.map(v => sort.indexOf(v)+1);
}