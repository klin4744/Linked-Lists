# Sample Test Suite

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
