'use strict';
const chai = require('chai');
const {
   mergeTwoLinkedList,
   reverse,
   deleteNode,
   deleteKthNodeFromEnd,
} = require('./test.js');
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
         this.tail.next = newNode;
         this.tail = newNode;
      }
      return this;
   }
   shift() {
      if (!this.head) return this;
      const newHead = this.head.next;
      // break the connection
      this.head.next = null;
      this.head = newHead;
   }
   unshift(val) {
      const newNode = new LinkedListNode(val);
      if (!this.head) {
         this.head = this.tail = newNode;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }
      return this;
   }
   pop() {
      if (!this.head) return this;
      if (this.head === this.tail) {
         this.head = this.tail = null;
      } else {
         let currentNode = this.head;
         while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
         }
         currentNode.next = null;
      }
      return this;
   }
   toArray() {
      const arr = [];
      let currentNode = this.head;
      while (currentNode) {
         arr.push(currentNode.val);
         currentNode = currentNode.next;
      }
      console.log(arr);
      return arr;
   }
}
function toArray(head) {
   const arr = [];
   let currentNode = head;
   while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
   }
   console.log(arr);
   return arr;
}
describe('Delete in place function', () => {
   const ll1 = new LinkedListNode(1);
   ll1.next = new LinkedListNode(2);
   ll1.next.next = new LinkedListNode(3);
   ll1.next.next.next = new LinkedListNode(4);
   const ll2 = new LinkedListNode(1);
   ll2.next = new LinkedListNode(2);
   ll2.next.next = new LinkedListNode(3);
   ll2.next.next.next = new LinkedListNode(4);
   const ll3 = new LinkedListNode(1);
   ll3.next = new LinkedListNode(2);
   ll3.next.next = new LinkedListNode(3);
   ll3.next.next.next = new LinkedListNode(4);
   ll3.next.next.next.next = new LinkedListNode(5);
   ll3.next.next.next.next.next = new LinkedListNode(6);
   it('takes a node and removes it from the linked list', () => {
      deleteNode(ll1.next);
      expect(toArray(ll1)).to.deep.equal([1, 3, 4]);
   });
   it('can handle the first node being deleted', () => {
      deleteNode(ll3);
      expect(toArray(ll3)).to.deep.equal([2, 3, 4, 5, 6]);
   });
   // DOES NOT WORK IN JS
   // it('can handle last node being deleted', () => {
   //    deleteNode(ll2.next.next.next);
   //    expect(toArray(ll2)).to.deep.equal([1, 2, 3]);
   // });
});
xdescribe('reverse function', () => {
   const ll1 = new LinkedListNode(1);
   ll1.next = new LinkedListNode(2);
   ll1.next.next = new LinkedListNode(3);
   const ll2 = new LinkedListNode(1);
   ll2.next = new LinkedListNode(2);
   const ll3 = new LinkedListNode(1);
   ll3.next = new LinkedListNode(2);
   ll3.next.next = new LinkedListNode(3);
   ll3.next.next.next = new LinkedListNode(4);
   ll3.next.next.next.next = new LinkedListNode(5);
   ll3.next.next.next.next.next = new LinkedListNode(6);
   it('should reverse a given linked list', () => {
      expect(toArray(reverse(ll1))).to.deep.equal([3, 2, 1]);
   });
   it('should work on small inputs', () => {
      expect(toArray(reverse(ll2))).to.deep.equal([2, 1]);
   });
   it('should work on longer inputs', () => {
      expect(toArray(reverse(ll3))).to.deep.equal([6, 5, 4, 3, 2, 1]);
   });
});
xdescribe('delete kth node function', () => {
   const ll1 = new LinkedListNode(1);
   ll1.next = new LinkedListNode(2);
   ll1.next.next = new LinkedListNode(3);
   ll1.next.next.next = new LinkedListNode(4);
   ll1.next.next.next.next = new LinkedListNode(5);
   ll1.next.next.next.next.next = new LinkedListNode(6);
   const ll2 = new LinkedListNode(1);
   ll2.next = new LinkedListNode(2);
   ll2.next.next = new LinkedListNode(3);
   ll2.next.next.next = new LinkedListNode(4);
   ll2.next.next.next.next = new LinkedListNode(5);
   ll2.next.next.next.next.next = new LinkedListNode(6);
   const ll3 = new LinkedListNode(1);
   ll3.next = new LinkedListNode(2);
   ll3.next.next = new LinkedListNode(3);
   ll3.next.next.next = new LinkedListNode(4);
   ll3.next.next.next.next = new LinkedListNode(5);
   ll3.next.next.next.next.next = new LinkedListNode(6);
   it('should remove the kth item from the end of the list given the head node and an integer k', () => {
      deleteKthNodeFromEnd(ll1, 2);
      expect(toArray(ll1)).to.deep.equal([1, 2, 3, 4, 6]);
   });
   it('should work on the last element', () => {
      deleteKthNodeFromEnd(ll2, 1);
      expect(toArray(ll2)).to.deep.equal([1, 2, 3, 4, 5]);
   });
   it('should work on the first element', () => {
      expect(toArray(deleteKthNodeFromEnd(ll3, 6))).to.deep.equal([
         2,
         3,
         4,
         5,
         6,
      ]);
   });
});
xdescribe('merge two sorted linked list function', () => {
   const ll1 = new LinkedListNode(1);
   ll1.next = new LinkedListNode(2);
   ll1.next.next = new LinkedListNode(3);
   ll1.next.next.next = new LinkedListNode(4);
   ll1.next.next.next.next = new LinkedListNode(5);
   const ll2 = new LinkedListNode(1);
   ll2.next = new LinkedListNode(2);
   ll2.next.next = new LinkedListNode(4);
   ll2.next.next.next = new LinkedListNode(6);

   it('should merge two sorted linked lists given the head node for each list, return the head of the new list!', () => {
      expect(toArray(mergeTwoLinkedList(ll1, ll2))).to.deep.equal([
         1,
         1,
         2,
         2,
         3,
         4,
         4,
         5,
         6,
      ]);
   });
});
