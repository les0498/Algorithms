function solution(n)
{
   return n
    .toString()
    .split('')
    .reduce((sum, cur) => sum + Number(cur),0);
}