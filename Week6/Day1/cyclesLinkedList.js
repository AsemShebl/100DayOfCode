/**
 * Input : Linked List
 * Output: true/false
 * Constraints: -
 * Edge Cases :-
 **/

const hasCycle = (head) => {
  // track 2 pointers to be references to the head
  let slow = head;
  let fast = head;

  // while none of them points to null
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    //if the fast and slow pointers point to the same node.
    if (slow === fast) {
      return true;
    }
  }

  // if the end of the alg. without founding the cycle return false
  return false;
};
