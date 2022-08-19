/* 
1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal
想法：
- 使用setTimeout
- 写三个setTimeout
- 使用递归
 */

// function callTimeout(fn, time) {
//   setTimeout(function() {
//     fn.call(this)
//     callTimeout.call(this, fn, time)
//   }, time)
// }

// function mySetInterVal(fn, a, b) {
//   callTimeout.call(this, fn, a);
//   callTimeout.call(this, fn, b);
//   callTimeout.call(this, fn, a + 2 * b);
// }

// mySetInterVal(function () {
//   console.log('hello');
// }, 1000, 2000)
// 问题在于用不了clear

function mySetInterVal(fn, a, b) {
  this.a = a;
  this.b = b;
  this.time = 0;
  this.handle = -1;
  this.start = () => {
    this.handle = setTimeout(() => {
      fn();
      this.time++;
      this.start();
      console.log(this.a + this.time * this.b);
    }, this.a + this.time * this.b);
  }

  this.stop = () => {
    clearTimeout(this.handle);
    this.time = 0;
  }
}

var a = new mySetInterVal(() => { console.log('123') }, 1000, 2000);
a.start();
a.stop();

