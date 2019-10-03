# Sample Test Suite

## To use this, follow the following steps:

1. run npm install;
2. run npm run test;
3. write all code in test.js

## Three sum

Write a function called threeSum that takes an array of unsorted integers and a target number and returns all combinations of numbers from that array that add up to the target number.

```javascript
threeSum(threeSum([0, 1, 2, 3, 3], 6)); // [ [0, 3, 3],[1, 2, 3],]
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
