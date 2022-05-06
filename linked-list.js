/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.head === null) this.head = newNode;
    if(this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    
    if(this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.head != null) {
      if(this.head == this.tail){
        this.tail = this.head;
      }
      newNode.next = this.head;
        this.head.next = this.head;
        this.head = newNode;
    }
    
    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    let ans = this.tail;
    let current = this.head;
    if(JSON.stringify(this.head) === JSON.stringify(this.tail)) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return ans.val;
    }

    while(current){

      if(JSON.stringify(current.next) === JSON.stringify(this.tail)){
        current.next = null;
        this.tail = current;
        break;
      }
      current = current.next;
    }
    this.length -= 1;
    return ans.val;
    
  }

  /** shift(): return & remove first item. */

  shift() {
    let ans = this.head;
    let current = this.head;
    if(JSON.stringify(this.head) === JSON.stringify(this.tail)) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return ans.val;
    }
    else{
      this.head = current.next;
      this.length -= 1;
      return ans.val;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;
    while(current){
      if(count == idx){
        return current.val;
      }
      current = current.next;
      count += 1;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let count = 0;
    while(current){
      if(count == idx){
        current.val = val;
      }
      current = current.next;
      count += 1;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head;
    let count = 0;
    if(this.length == 0) {
      let newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;

    }
    else{
      while(current){
        count += 1;
        if(count == idx){
          if(current == this.tail){
            this.push(val);
            this.length += 1;
            break;
          }

          let d = current.next;

          current.next= new Node(val);
          current.next.next = d;
          this.length += 1;
          break;
        }
        current = current.next;
        
      }
    }

    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;
    let count = 0;
    if(idx == 0){
      let ans = current;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return ans.val;
    }
    while(current){
      count += 1;
      if(count == idx){
        let ans = current.next;
        current.next = current.next.next;
        this.length -= 1;
        return ans.val;
      }
      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let count = 0;
    let total = 0;
    if(this.length == 0) return 0;
    while(current){
      total += current.val;
      current = current.next;
      count += 1;
    }    
    let avg = (total/count);
    return avg;
  }
}

module.exports = LinkedList;
