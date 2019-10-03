'use strict';
const chai = require('chai');
const {
   threeSum,
   isCircular,
   largestContinuousSum,
   findStart,
   maxProfit,
} = require('./test.js');
let sinon = require('sinon');
const expect = chai.expect;
let sinonChai = require('sinon-chai');
chai.use(sinonChai);
class LinkedListNode {
   constructor(value) {
      this.next = null;
      this.val = value;
   }
}
class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
   }
   push(val) {
      const newNode = new LinkedListNode(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         let currentNode = this.head;
         while (currentNode.next) {
            currentNode = currentNode.next;
         }
         currentNode.next = newNode;
         this.tail = currentNode.next;
      }
      return this;
   }
}
describe('Three sum function', () => {
   it('should take an array and an integer and return an array', () => {
      expect(Array.isArray(threeSum([1, 2, 3], 6))).to.equal(true);
   });
   it('should return a 2d array of results containing all triplets that add to the target', () => {
      expect(threeSum([1, 2, 3], 6)).to.deep.equal([[1, 2, 3]]);
   });
   it('should work for longer arrays', () => {
      expect(threeSum([0, 1, 2, 3, 3], 6)).to.deep.equal([
         [0, 3, 3],
         [1, 2, 3],
      ]);
   });
   it('should work on an unsorted array', () => {
      expect(threeSum([2, 3, 1, 0, 3], 6)).to.deep.equal([
         [0, 3, 3],
         [1, 2, 3],
      ]);
   });
});
describe('isCircular', () => {
   const circularList = new LinkedListNode(1);
   circularList.next = new LinkedListNode(2);
   circularList.next.next = new LinkedListNode(3);
   circularList.next.next.next = new LinkedListNode(4);
   circularList.next.next.next.next = circularList;
   it('should return a boolean', () => {
      expect(typeof isCircular(circularList)).to.equal('boolean');
   });
   it('should return true if given a circularly linked list', () => {
      expect(isCircular(circularList)).to.equal(true);
   });
   it('should return false if given a non-circular list', () => {
      circularList.next.next.next.next = null;
      expect(isCircular(circularList)).to.equal(false);
   });
});
describe('largest contiguous sum function', () => {
   it('it should take an array of integers and return a number', () => {
      expect(typeof largestContinuousSum([10, 12, 13])).to.equal('number');
   });
   // Enable by removing the x;
   it('returns the largest continuous sum', () => {
      expect(largestContinuousSum([-10, 3, 2, -9, 20, 1, -20])).to.equal(21);
   });
   it('works on an array of all negative integers', () => {
      expect(largestContinuousSum([-10, -3, -2, -9, -20, -1, -20])).to.equal(
         -1,
      );
   });
   it('works even if the array starts with a negative number', () => {
      expect(largestContinuousSum([-1, 2, 3, -10, 3])).to.equal(5);
   });
});
describe('semi sorted dictionary function', () => {
   const words = [
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
   ];
   const words1 = ['grape', 'orange', 'plum', 'radish', 'apple'];
   const words2 = ['apple', 'orange', 'plum', 'radish', 'grape'];

   it('takes an array of strings and returns the index (integer) of the smallest string (alphabetically)', () => {
      expect(typeof findStart(words)).to.equal('number');
   });
   it('should return the index or real start point of the dictionary/array', () => {
      expect(findStart(words)).to.equal(5);
   });
   it('should pass on edges', () => {
      expect(findStart(words1)).to.equal(4);
      expect(findStart(words2)).to.equal(0);
   });
   xit("If you can do this in O(log(n)) time you're solid!");
});
describe('BONUS: Best time to buy and sell stock function', () => {
   const stockPrices = [10, 7, 5, 8, 11, 9];
   xit('takes an array of integers and returns an integer', () => {
      expect(typeof maxProfit(stockPrices)).to.equal('number');
   });
   xit('should return the maximum profit you can make', () => {
      expect(maxProfit(stockPrices)).to.equal(5);
   });
   xit('should work if the prices do down all day, you MUST buy and sell, here you should minimize losses instead of maximizing gains', () => {
      expect(maxProfit([9, 7, 4, 1])).to.equal(-2);
   });
});
