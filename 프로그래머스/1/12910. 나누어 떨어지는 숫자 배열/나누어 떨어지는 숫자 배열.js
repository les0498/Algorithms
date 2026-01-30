function solution(arr, divisor) {
    const filtered = arr.filter(n=>n % divisor === 0);
    
    if (filtered.length === 0) {
        return [-1]; 
    }
    
    return filtered.sort((a,b) => a - b); 
}