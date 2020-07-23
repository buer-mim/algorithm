/*
* 二分查找
*
* 重要条件 有序数组
* */
const baseArr = [2,1,5,3,6,9,7,8,10,4];

// 冒泡
const sort = function(array){
    const arr = JSON.parse(JSON.stringify(array));
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let s = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = s;
            }
        }
    };
    return arr;
};

const arr = sort(baseArr);

const seek = function(array, key){
    let min = 0, max = array.length;
    while(min <= max){
        let mid = parseInt((min+max)/2);
        if(array[mid] == key){
            return mid;
        } else if(array[mid] > key) {
            max = mid - 1;
        } else if(array[mid] < key){
            min = mid + 1;
        } else {
            return -1;
        }
    }
};

console.log(seek(arr, 11));

