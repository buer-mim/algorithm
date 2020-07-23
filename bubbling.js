/*
* 冒泡
* 原理，比较相邻两个元素的大小，
**/
const bubbSort = function(array){
    const arr = JSON.parse(JSON.stringify(array));
    for(let i = 0;i<arr.length-1;i++){
        for(let j = 0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let s = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = s;
            }
        }
    };
    return arr;
};
const arr = [5,6,1,2,4,3,7,10,8,9];

console.log(bubbSort(arr));
