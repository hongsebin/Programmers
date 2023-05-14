// 최대공약수(gcd) 구하기
// (최대공약수 : 두 정수의 공통된 약수중 가장 큰 수)
function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
    // % : 왼쪽 수를 오른쪽 수로 나눴을 때 나머지를 구하는 연산자
    // a 나누기 b의 나머지가 0이라면 b를 반환.
    // 0이 아니라면 b % (a%b) 로 바꿔서 0이 나올때까지 반복...
}

function solution(num1, den1, num2, den2) {
    
    // 분자
    let num = num1 * den2 + den1 * num2;

    // 분모
    let den = den1 * den2;
    
    let gcd = cal_gcd(num, den);
    
    return [num/gcd, den/gcd]
}