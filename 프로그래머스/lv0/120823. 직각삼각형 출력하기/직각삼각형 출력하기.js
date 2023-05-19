// readline : 입출력을 한 줄씩 처리하는 모듈

// readline 모듈 불러오기
const readline = require('readline');

// 인터페이스 생성하기
// interface 객체를 이용하여 콘솔에서 표준 입출력 처리
const rl = readline.createInterface({
    input: process.stdin,   // standard input
    output: process.stdout  // standard output
});

let input = [];

// 입출력을 처리하는 코드 작성하기
rl.on('line', function (line) {
    // 입력 받은 값을 처리하는 코드
    input = line.split(' '); // 공백을 기준으로 문자열 나누기
}).on('close', function () {
    // 입력이 끝나고 실행하는 코드
    for(let i = 1; i <= +input[0]; i+=1) console.log('*'.repeat(i));
});