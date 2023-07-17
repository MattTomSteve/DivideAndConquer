function sortedFrequency(arr, num) {
    const firstIndex = findFirstIndex(arr, num);
    const lastIndex = findLastIndex(arr, num);
  
    if (firstIndex === -1 || lastIndex === -1) {
      return 0;
    }
  
    return lastIndex - firstIndex + 1;
  }
  
  function findFirstIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  function findLastIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        result = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }

module.exports = sortedFrequency