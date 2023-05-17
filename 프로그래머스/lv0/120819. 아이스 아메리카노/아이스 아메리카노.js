function solution(money) {
    
    // 돈 나누기 5,500원 해서 몫이 잔 수, 나머지가 잔돈
    
    let coffee = Math.floor(money / 5500);
    
    let other = money % 5500
    
    return [coffee, other];
}