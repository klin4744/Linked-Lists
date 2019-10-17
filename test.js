//  KEVIN'S SOLUTIONS BELOW, DO NOT READ BEFORE ATTEMPTING PLEASE!
let deleteNode = nodeToDelete => {
   // Given a node within a linked list, can you delete that node in place?
};
let reverse = headNode => {
   // Given the head node of a linked list, can you return the reversal of that linked list?
};
let deleteKthNodeFromEnd = (head, k) => {
   // Given the head node of a linked list and an integer k, delete the node that is k nodes from the end of the linked list. You may assume that k will always be within the range of the linkedlist, not out of bounds
};
let mergeTwoLinkedList = (head1, head2) => {
   // Given two sorted linked list, return a new linked list containing the values of the two given linked lists
};

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
// let deleteNode = nodeToDelete => {
//    // THIS WILL NOT DELETE THE LAST NODE IN JAVASCRIPT. nodeToDelete simply points to the last node in that scenario, setting nodeToDelete to null just makes us lose the pointer to the last node, it doesn't actually modify the list!
//    if (nodeToDelete.next === null) {
//       nodeToDelete = null;
//       delete nodeToDelete;
//    } else {
//       nodeToDelete.val = nodeToDelete.next.val;
//       nodeToDelete.next = nodeToDelete.next.next;
//    }
// };
// let reverse = headNode => {
//    let prev = null;
//    let currentNode = headNode;
//    while (currentNode) {
//       // Remember the next node since we're removing our only reference to it
//       const temp = currentNode.next;
//       // point our current node to the node behind it (previous)
//       currentNode.next = prev;
//       // set our previous node to the node we just reversed;
//       prev = currentNode;
//       // move our node forward
//       currentNode = temp;
//    }
//    // Prev is our new head
//    return prev;
// };
// let deleteKthNodeFromEnd = (head, k) => {
//    // we need to keep track of the node behind the node we want to remove which will be pointer1 here!
//    let prev;
//    let pointer1 = head;
//    let pointer2 = head;
//    // move our second pointer k units ahead of our first unit
//    for (let i = 0; i < k; i++) {
//       pointer2 = pointer2.next;
//    }
//    // this handles the case in which we want to remove the first node, if we don't have this line we end up skipping our while loop since pointer2 is at null, and trying to assign undefined.next (prev.next) to something else.
//    if (!pointer2) {
//       head = pointer1.next;
//       pointer1.next = null;
//       return head;
//    }
//    // move our second pointer until it reaches the end of our linked list, we then can confirm that pointer 1 is k units from the end of the list

//    while (pointer2) {
//       prev = pointer1;
//       pointer1 = pointer1.next;
//       pointer2 = pointer2.next;
//    }
//    // Now remove what's at pointer 1!
//    // Set the next of the node behind pointer 1 to point at the item after pointer 1
//    prev.next = pointer1.next;
//    // remove pointer 1's connection to pointer 2
//    pointer1.next = null;
//    return head;
// };
// let mergeTwoLinkedList = (head1, head2) => {
//    // node1 and node 2 let us keep track of the first and second linked lists
//    let node1 = head1;
//    let node2 = head2;
//    // Create a new linked list
//    let newList = new LinkedList();
//    while (node1 || node2) {
//       // If node1 isn't null and node2 exists, compare node1's value with node2's value. If node1 has a smaller value than node2, push node1 into our linked list, else push node2 into our linked list. If we push into our list, we have to move our pointer down
//       if (node1 && (!node2 || node1.val <= node2.val)) {
//          newList.push(node1.val);
//          node1 = node1.next;
//       } else {
//          newList.push(node2.val);
//          node2 = node2.next;
//       }
//    }
//    // Finally, return the head node of the list
//    return newList.head;
// };

module.exports = {
   deleteNode,
   deleteKthNodeFromEnd,
   reverse,
   mergeTwoLinkedList,
};
