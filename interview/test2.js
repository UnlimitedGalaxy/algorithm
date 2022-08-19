/* 
2.合并二维有序数组成一维有序数组，归并排序的思路

想法：
- 


 */

const testData = [
    [1, 2, 3, 4],
    [5, 6, 7, 19],
    [9, 11, 13],
]

function merge2DTo1DArr(arr) {
    return arr.reduce(function (r, v, i) {
        const resArr = []
        while(r.length && v.length) {
            if (r[0] < v[0]) {
                resArr.push(r.shift())
            } else {
                resArr.push(v.shift())
            }
        }
        if (r.length) {
            resArr.push.apply(resArr, r)
        }
        if (v.length) {
            resArr.push.apply(resArr, v)
        } // 代替写法 result.concat(arr1).concat(arr2);
        return resArr
    }, [])
}

console.log(merge2DTo1DArr(testData))


