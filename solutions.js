const threeSum = (arr, target) => {
   const results = [];
   // First sort the array
   arr.sort((a, b) => a - b);
   for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1;
      let right = arr.length - 1;
      while (left < right) {
         const sum = arr[left] + arr[i] + arr[right];
         if (sum === target) {
            results.push([arr[i], arr[left], arr[right]]);
            left++;
            right--;
         } else if (sum < target) {
            left++;
         } else {
            right--;
         }
      }
   }
   return results;
};
const isCircular = node => {
   // If a node doesn't exist, or if the node's next property doesn't exist just return null
   if (node === null || node.next === null) return false;
   // Create two pointers, one at the head node we're given and another one node ahead of it
   let currentNode = node;
   let endNode = node.next;
   // We want to loop until we either 1. reach the end of the linked list via hitting a null (return false) or 2. have a scenario in which our second pointer hits our first, this is possible if our second pointer is both ahead of our first node and grows faster than our first node
   while (currentNode !== endNode) {
      // we will get an error if we don't check if our end node has a next property, we can't for example get .next of null so we do our checks here and return null if there is a null/end to the linked list
      if (endNode === null || endNode.next === null) return false;
      currentNode = currentNode.next;
      endNode = endNode.next.next;
   }
   return true;
};
const largestContinuousSum = arr => {
   // Keep track of two variables, the current sum and a maximum sum
   let currentSum = arr[0];
   let currentMax = arr[0];
   // Since we instantiated with index 0, we can start at 1
   for (let i = 1; i < arr.length; i++) {
      const currentNum = arr[i];
      // Our current sum is the largest number between the current number in the array, or the sum of the current number and the current sum. For example, if the current number is 4, and our current sum is -2, since 4 is greater than 4+-2, we want current sum to be 4, [-2,4] => our accumulator's start point now becomes 4 instead of -2
      currentSum = Math.max(currentNum, currentNum + currentSum);
      // We want our maximum value to be the maximum between our currentSum and current max value because we essentially reset current sum multiple times
      currentMax = Math.max(currentSum, currentMax);
   }
   return currentMax;
};
function findStart(words) {
   // Start off by instantiating end points, we will use binary search to approach this problem
   let currentRight = words.length - 1;
   let currentLeft = 0;
   let currentMiddleIdx = Math.floor(words.length / 2);
   // Since we don't have a target value, I'm instead deciding to split the array based on the values of our end points. If the left most value of our subarray is less than the rightmost value, then divide the array to the left side, else divide it to the right side.
   while (currentRight !== currentLeft) {
      if (
         words[currentLeft] < words[currentMiddleIdx] &&
         words[currentLeft] < words[currentRight]
      ) {
         currentRight = currentMiddleIdx;
      } else if (
         words[currentRight] < words[currentMiddleIdx] &&
         words[currentRight] < words[currentLeft]
      ) {
         currentLeft = currentMiddleIdx;
      } else {
         return currentMiddleIdx;
      }
      currentMiddleIdx =
         currentRight - Math.floor((currentRight - currentLeft) / 2);
   }
   return currentMiddleIdx;
}
function maxProfit(stockPrices) {
   // if we can't buy and sell (only one stock price), throw an error
   if (stockPrices.length <= 1)
      throw new Error('Stock prices is empty or has only one price');
   // Set a variable that counts the maximum profit we can possibly have and make it a really small number
   let maxProfit = -Infinity;
   // Keep trap of the cheapest stock as well
   let minPrice = stockPrices[0];
   // Since we used the first item to store min price, we don't have to start our loop at 1!
   for (let i = 1; i < stockPrices.length; i++) {
      let currentStockPrice = stockPrices[i];
      // Calculate the current difference or profit by subtracting the current minimum stock price we have from the current stock price
      let currentDifference = currentStockPrice - minPrice;
      // Our maximum profit is the maximum value between our current difference/profit and our previous maximum profit
      maxProfit = Math.max(currentDifference, maxProfit);
      // Our minimum stock price is also changed to be the smallest of our current min price and our current stock price
      minPrice = Math.min(minPrice, currentStockPrice);
   }

   return maxProfit;
}
// From interview cake
function findRepeat(numbers) {
   let floor = 1;
   let ceiling = numbers.length - 1;

   while (floor < ceiling) {
      // Divide our range 1..n into an upper range and lower range
      // (such that they don't overlap)
      // lower range is floor..midpoint
      // upper range is midpoint+1..ceiling
      const midpoint = Math.floor(floor + (ceiling - floor) / 2);
      const lowerRangeFloor = floor;
      const lowerRangeCeiling = midpoint;
      const upperRangeFloor = midpoint + 1;
      const upperRangeCeiling = ceiling;

      const distinctPossibleIntegersInLowerRange =
         lowerRangeCeiling - lowerRangeFloor + 1;

      // Count number of items in lower range
      let itemsInLowerRange = 0;
      numbers.forEach(item => {
         // Is it in the lower range?
         if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
            itemsInLowerRange += 1;
         }
      });

      if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
         // There must be a duplicate in the lower range
         // so use the same approach iteratively on that range
         floor = lowerRangeFloor;
         ceiling = lowerRangeCeiling;
      } else {
         // There must be a duplicate in the upper range
         // so use the same approach iteratively on that range
         floor = upperRangeFloor;
         ceiling = upperRangeCeiling;
      }
   }

   // Floor and ceiling have converged
   // We found a number that repeats!
   return floor;
}
