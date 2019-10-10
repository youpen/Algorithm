function getMaxWindow(arr, w) {
  const recordQueue = []
  const ans = []
  for (let i = 0; i < arr.length; i++) {
    // 过期策略， i-w代表
    if (recordQueue[0] <= i-w) {
      recordQueue.shift()
    }
    while (recordQueue.length !== 0 && arr[recordQueue[0]] <= arr[i]) {
        recordQueue.shift()
    }
    recordQueue.push(i)
    // 记录当前窗最大值
    if (i >= w-1) {
      ans.push(arr[recordQueue[0]])
    }
  }
}

const arr = [1,2,3,4,5,6,7]
const a = getMaxWindow(arr, 3)
      
