function solution(hp) {
    const a = Math.floor(hp/5);
    const b = Math.floor((hp-(5*a))/3);
    const c = hp-((5*a)+(3*b));
    
    return a+b+c;
}
