/* 
斐波那契数列
F(0) = 0;
F(1) = 1;
F(n) = F(n - 1) + F(n - 2);
介绍
斐波那契数列（Fibonacci sequence），又称黄金分割数列，因数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用，为此，美国数学会从 1963 年起出版了以《斐波纳契数列季刊》为名的一份数学杂志，用于专门刊载这方面的研究成果。

想法：
- 递归
- 它是要你计算出第n项的值
*/

// 递归
function fib(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

// 循环
function fibLoop(n) {
    let x1 = 0
    let x2 = 1
    let x3
    if (n === 1) {
        return 1
    }
    if (n === 0) {
        return 0
    }
    for (let i = 0 ; i < n - 1; i ++) {
        x3 = x1 + x2
        x1 = x2
        x2 = x3
    }
    return x3
}

// console.log(fibLoop(3));

// 公式
var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    return Math.round(fib_n / sqrt_5);
};

console.log(climbStairs(5));
