function solution(x) {
    let sum = x
        .toString()
        .split("")
        .map(Number)
        .reduce((a,b) => a + b, 0); 
    return x % sum === 0;
}