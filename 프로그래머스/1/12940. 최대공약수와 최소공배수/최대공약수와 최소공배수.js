function solution(n, m) {
    function gcd(a,b) {
        while (b!==0){
            const temp = a % b;
            a = b;
            b = temp; 
        }
        return a; 
    }
    
    const g = gcd(n,m);
    const l = (n * m) / g;
    
    return [g,l]; 
}