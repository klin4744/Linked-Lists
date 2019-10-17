# An introduction to linked lists

A linked list is a special datastructure that represents a list of data. It's a collection of things called nodes which contain a value and a property called next that points to the next item in the list. Here is a visualization of a linked list

```javascript
`
 1 ➝ 2 ➝ 3 ➝ 4 ➝ 5
`;
```

Here you can imagine the numbers as nodes, they contain a value and they point to another node. The arrows here represent their next property which points to another node. Many languages have implementations of linked lists, but javascript doesn't have one. We instead have to create our own linked list if we want to use it in javascript.

Here's how you'd implement a simple linked list in javascript

```javascript
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
```

Notice how we have two classes here: a node class and an actual linked list class. The node refers to a single item in a linked list, it contains a next property which can point to another node and a val property which holds a value. The linked list class holds our nodes and keeps track of two very important points in our linked list: the start of it (the head) and the end of it (the tail). The reason why we want to keep track of these two points is because doing so makes it very easy to remove and add information to the ends of our linked list.

For example, if we wanted to remove a node from the front of our linked list, all we'd have to do is access it through the head property head, store a reference to the item directly after the head using head.next, remove head's connection to our current linked list via head.next = null. Then move our head pointer to the second node. Here's how that would look like:

```javascript
`
h = head, t = temp

 STEP 1, create a variable called temp and make it point to the node next to head
 h   t                            code: 
 1 ➝ 2 ➝ 3 ➝ 4 ➝ 5                 let temp = head.next;
 STEP 2, remove head's connection to the linked list by setting it's next property to null
 h   t                            code: 
 1   2 ➝ 3 ➝ 4 ➝ 5                 head.next = null
 STEP 3, make head now point at where temp is
     h
     t                            code: 
 1   2 ➝ 3 ➝ 4 ➝ 5                 head = temp;
`;
```

Notice this operation takes O(1) time, we follow the same number of steps for removal everytime. This also applies to adding to the front and ends of the list!

### Disadvantages

The disadvantage of a linked list is that it is not great for lookups, since we only have access to the head and tail of a linked list, if we want to look anything up we'd have to go through the entire list, traversing it through the .next properties until we hit the node we're looking for or hit the end of the list. On the contrary, with arrays, we can easily access items in the middle in O(1) time simply by specifying an index.

## Linked List Algorithms

### Setting up the test suite

First clone this repo by running the following command in your terminal:

```
git clone https://github.com/klin4744/Linked-Lists.git
```

Next, install dependencies by running npm install inside the Linked List Repository

```
npm install
```

Finally, run the test suite by running npm run test in the terminal

```
npm run test
```

**Write ALL of your solutions in test.js, Please try not to look at solutions.js until you have atleast attempted the problems**

### Delete a node in place

Given a node within a linked list, write a function called deleteNode() that deletes that node in place (mutates original linked list). Here are some examples:

```javascript
deleteNode(node2)`
In this case, we want to delete the node with value 2
    *
1 ➝ 2 ➝ 3 ➝ 4 ➝ 5 
Our final linked list should look like this

1 ➝ 3 ➝ 4 ➝ 5 
`;
```

### Reverse a linked list

Given the head of a linked list, write a function called reverse() that reverses the given linked list in place and returns the new head of the linked list. Here is an example:

```javascript
reverse(head); // returns Node(5), the head of our linked list
`
1 ➝ 2 ➝ 3 ➝ 4 ➝ 5 
Our final linked list should look like this

5 ➝ 4 ➝ 3 ➝ 2 ➝ 1 
`;
```

### Delete Kth Node From the End of a Linked List

Given the head of a linked list and an integer k, write a function called deleteKthNodeFromEnd() that removes the Kth's element from the end of a linked list and returns the head of the same linked list

```javascript
deleteKthNodeFromEnd(head, 2); // returns Node(1), the head of our linked list
`
1 ➝ 2 ➝ 3 ➝ 4 ➝ 5 

We want to remove the second item from the end of this linked list since k=2, counting from the end:
5   4   3   2   1
1 ➝ 2 ➝ 3 ➝ 4 ➝ 5 

The second item from the end of this list is 4, so our function should return this linked list given an input of 2:
1 ➝ 2 ➝ 3 ➝ 5 
`;
```

### Merge two sorted linked lists

Given the head nodes of two different sorted linked lists, write a function called mergeTwoLinkedLists() that returns a new sorted linked list containing all the nodes of the two merged lists. Here's an example:

```javascript
mergeTwoLinkedLists(head1, head2); // returns Node(1), the head of our merged linked list
`
List 1
1 ➝ 2 ➝ 3 
List 2
4 ➝ 5 

Returns this new merged linked list:
1 ➝ 2 ➝ 3 ➝ 4 ➝ 5
`;
```
