# Problem Solving Strategies for Algorithms 
Algorithms can be really intimidating, especially if you don't know how to approach them. This article will cover some common problem solving strategies that you can use to solve alot of common algorithms, please note that these problem solving strategies won't work for every algorithm and may not produce the best efficiencies for ones they do work on

### Multiple Pointers
One of the best approaches to solving a problem that involves some kind of looping is creating multiple pointers for that particular loop, this is a fantastic strategy for not only simplifying the problem at hand, but also tends to make problems more efficient.

To show how we can use multiple pointers, here's a very basic example of a common problem where multiple pointers can be used: reversing an array

```javascript
function reverseArr(arr){
  let right = arr.length - 1;
  let left = 0;
  while(left < right){
    const temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    right--;
    left++
  }
  return arr;
}
```

Here we create two pointers, one that points to the beginning of the array and another that points to the end. This is great because it lets us essentially keep track of multiple portions of the array at one time, saving us from having to loop more than once. 

Here's another example:
Merging two sorted arrays
```javascript
function mergeArrs(arr1,arr2){
  let pt1 = 0;
  let pt2 = 0;
  let mergedArr = new Array(arr1.length+arr2.length);
  while(pt1 < arr1.length || pt2 < arr2.length){
    const num1 = arr1[pt1];
    const num2 = arr2[pt2];
    if(pt2 >= arr2.length || num1 <= num2){
      mergedArr[pt1+pt2] = num1;
      pt1++;
    }else{
      mergedArr[pt1+pt2] = num2;
      pt2++;
    }
  }
  return mergedArr;
}
```
Here we have a pointer that points at a number in the first array and another that points at a number in the second array. We compare the numbers each pointer is pointing at and add them to our merged array based on which one is less than the other. In the case a pointer reaches the end of one array, we simply add the other number into our array. This lets us keep track of both arrays and do comparisons between them in the same loop iterations. 

### Shifting Frames
A common theme that comes up with algorithms are problems that require a "frame" of solutions. For example, lets say we're given an array and we want to retrieve the maximum subarray sum, for example:
```javascript
maxSubSum([1,2,-10,9,-3]) // Returns 9 because the maximum subarray sum is [9]
maxSubSum([1,2,-10,2,-3]) // Returns 3 because the maximum subarray sum is [1,2]
```
 Notice in this problem, our solution relies on maximizing a contiguous portion of our input. These problems can be solved with shifting frame in which we keep track of a frame of the input that can grow or shorten accordingly for example: 
 
For the input: [1,2,-10,-3], we can have a pointer which marks the start of our frame and another that marks the end, each would start at the origin point since our answer could theoretically just be one number from our subarray like so:
```javascript
`st 
end 
[1,2,-10,3]`
```
In this first iteration, since both of our pointers are at 1, our current maximum subarray is [1] which has a sum of 1, we can now look ahead at the next value and see if expanding our frame and including that value will increase our current maximum value. In this case, [1,2] equals 3 which is greater than [1], so we move our end pointer forwards: 
```javascript
`st 
  end 
[1,2,-10,3]`
```
We can continue this process until we reach the end of our array to return 3. Our shifting frame ends up being [1,2]. What if our example was a bit more complicated? For example, what if we have to move our head pointer as well? Here's a problem where that scenario would be the case:
```javascript
`st 
end 
[-1,2,3,-10,3]`
```
In our first iteration, our max sum is -1, we look ahead to 2, since 2+-1 is greater than 1, we move our end pointer forwards <br>
```javascript
`st 
   end 
[-1,2,3,-10,3]`
```
In our next iteration, adding 3 also increases our max sum of 1, so we move our pointer again and end with a max sum of 4
```javascript
`st 
      end 
[-1,2,3,-10,3]`
```
If we continue to the end, we'll notice no more additions will make 4 greater, so we return [-1,2,3] => 4, however 4 isn't our largest sum, [2,3] => 5 is. How do we move our start pointer forwards? We can do so by simply comparing our start number to the next number in the frame; we can check if the start number + the next number in the frame is less than the next number in the frame (is -1+2 < 2?); if it fits this, we simply move the start pointer forwards.

```javascript
`  st 
      end 
[-1,2,3,-10,3]`
```

## Video series here

<a href="https://www.youtube.com/watch?v=8jNQmMSZdcA&feature=youtu.be">Youtube Series</a>


# Setting up the tests

## To use this, follow the following steps:

1. run npm install;
2. run npm run test;
3. write all code in test.js

## Three sum

Write a function called threeSum that takes an array of unsorted integers and a target number and returns all combinations of numbers from that array that add up to the target number.

```javascript
threeSum([0, 1, 2, 3, 3], 6); // [ [0, 3, 3],[1, 2, 3],]
```

The time complexity of the solution should be O(n^2) maximum

## Is circular

Write a function that takes a linked list node and returns true if the linked list is a circular linked list; a list that has a node that points to another node resulting in no possible tail. This function should return false if the linked list does not have a loop.

```javascript
`    5 ← 4   
     ↓   ↑     => return TRUE 
 1 → 2 → 3`;
```

## Largest continuous sum

Write a function that takes an array and returns the largest contiguous sum

```javascript
largestContinuousSum([-1, 2, 3, -10, 3]); // 5, largest sequence is [2,3]
```

## Find start

Imagine being given a dictionary that was split in half and restacked so that it is now partially ordered, i.e. the first word in the dictionary is now in a new place. Write a function that returns the new starting index of the dictionary. Try doing this in N(log(N)) time

```javascript
findStart([
   'ptolemaic',
   'retrograde',
   'supplant',
   'undulate',
   'xenoepist',
   'asymptote',
   'babka',
   'banoffee',
   'engender',
   'karpatka',
   'othellolagkage',
]); // returns 5 because the smallest word is "asymptote" at index 5,
```

## Max profit

Say I was buying stocks and wanted to maximize my profits for the day. Luckilly, I can see into the future and see the price of the stock for every hour of the day. Write a function that takes an array of numbers where the numbers represent the stock prices and their index within the array represents the time of day. For example, the stock price at the begining of the day would correspond to the first item in the array and so on

```javascript
maxProfit([5, 1, 9, 2, 3]); // Returns 8, if we imagine the indexes as hours of the day, I can buy the stock at hour 1 (index 1) at a price of 1, then sell the stock at hour 2 (index 2) at a price of 9, making a profit of 8
maxProfit([1, 2, 3, 4, 5]); // returns -1, unfortunately in this case, I have to buy the stock at some point of the day even if it ends in a net lost in money. Here to minimize my losses, I'll but the stock at hour 0 then sell it at hour 1 only losing 1.
maxProfit([1, 2, 3, 4, 9, 2]); // returns 8, I buy at hour/index 0 and sell at hour/index 4 resulting in a (9-1) profit. YOU MUST BUY BEFORE YOU SELL!!
```

## Find Repeat

Given an array of unsorted integers, can you find the repeated number ? You can assume that there will only be one repeated number. Furthermore, can you do this in less than O(n^2) time?

```javascript
findRepeat([1, 1]); // Returns 1
findRepeat([1, 2, 3, 4, 1]); // Returns 1
```
