const arr = [10,1,0,9,2,3,6,4,7,5];

/**
 * 选择排序
 * 稳定性：不稳定
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
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

/**
 * 插入排序
 * 稳定性：稳定
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 实现原理：在已排序序列中从后向前扫描，找到相应位置并插入
 * @param {number[]} arr
 * @return {number[]}
 * */
const insertSort = (arr) => {
    for(let i = 1;i<arr.length;i++) {
        let j = i - 1;
        let key = arr[i];
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        };
        arr[j + 1] = key;
    };
    return arr;
};

/**
 * 冒泡排序
 * 稳定性：稳定
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 实现原理：比较每相邻两个元素，如果前者大于后者，就把两个数交换位置
 * @param {number[]} arr
 * @return {number[]}
 * */
const bubbleSort = (arr) => {
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    };
    return arr;
};

/**
 * 快速排序
 * 稳定性：不稳定
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(logn)
 * 实现原理：分治的思想；选出一个基准值，比基准值大的数放在右边，所有比基准值小的数放在左边，分界线就是该基准值，
 *          对基准值左右两边的两组数使用同样的方式排序，不断递归，直到所有数据排序完成。
 * @param {number[]} arr
 * @return {number[]}
 * */
const quickSort = (arr) => {
    function partition(arr, left, right) {
        let temp = arr[left];
        let p = left + 1;
        let q = right;
        while(p <= q) {
            while(p <= q && arr[p] < temp)  p++;
            while(p <= q && arr[q] > temp)  q--;
            if(p <= q) {
                [arr[p], arr[q]] = [arr[q], arr[p]];
                // 交换值后两边各向中间推进一位
                p++;
                q--;
            }
        }
        // 修改基数的位置
        [arr[left], arr[q]] = [arr[q], arr[left]];
        return q;
    }
    function recursive(arr, left, right) {
        if(left >= right)  return;
        let index = partition(arr, left, right);
        recursive(arr, left, index - 1);
        recursive(arr, index + 1, right);
        return arr;
    }
    return recursive(arr, 0, arr.length-1);
};

/**
 * 归并排序
 * 稳定性：稳定
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 * 实现原理：先递归的分解数列，再合并数列
 * @param {number[]} nums
 * @return {number[]}
 * */
const mergeSort = (nums) => {
    // 有序合并两个数组
    function merge(l1, r1, l2, r2) {
        let arr = [];
        let index = 0;
        let i = l1, j = l2;
        while(i <= r1 && j <= r2) {
            arr[index++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
        };
        while(i <= r1)  arr[index++] = nums[i++];
        while(j <= r2)  arr[index++] = nums[j++];
        // 将有序合并后的数组修改回原数组
        for(let t=0; t<index; t++) {
            nums[l1 + t] = arr[t];
        }
    };
    // 递归将数组分为两个序列
    function recursive(left, right) {
        if(left >= right)  return;
        // 比起(left+right)/2，更推荐下面这种写法，可以避免数溢出
        let mid = parseInt((right - left) / 2) + left;
        recursive(left, mid);
        recursive(mid+1, right);
        merge(left, mid, mid+1, right);
        return nums;
    };
    return recursive(0, nums.length-1);
};
console.log(mergeSort(arr));






