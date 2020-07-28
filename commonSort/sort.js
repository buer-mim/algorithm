const arr = [10,1,0,9,2,3,6,4,7,5];

/**
 * 选择排序
 * 稳定性：不稳定
 * 时间复杂度：O(n^2)
 * 实现原理：每次都选择最小的，然后交换位置
 * @param {number[]} arr
 * @return {number[]}
 * */
const optSort = (arr) => {
    for(let i=0;i<arr.length - 1;i++){
        let idx = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[idx] > arr[j]){
                idx = j
            };
        };
        let temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
    }
    return arr;
};

console.log(optSort(arr));

/**
 * 插入排序
 *
 * 稳定性：不稳定
 * 时间复杂度：O(n^2)
 * 实现原理：每次都选择最小的，然后交换位置
 *
 * @param {number[]} nums
 * @return {number[]}
 * */
const insertSort = (nums) => {

};

/**
 * 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 * */
const bubbleSort = (nums) => {

};

/**
 * 快速排序
 * @param {number[]} nums
 * @return {number[]}
 * */
const quickSort = (nums) => {

};


/**
 * 归并排序
 * @param {number[]} nums
 * @return {number[]}
 * */
const mergeSort = (nums) => {

};






