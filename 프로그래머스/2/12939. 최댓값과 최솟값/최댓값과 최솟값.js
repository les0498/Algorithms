function solution(s) {
    let answer = s.split(" ").map(Number); 
    let min = Math.min(...answer);
    let max = Math.max(...answer); 
    return `${min} ${max}`;
}