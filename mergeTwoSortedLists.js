/* var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let head = new ListNode();

    head.mergeList = [];
    head.tmp = [];

    while (list1 != null && list2 != null) {
        head.node = null;
        if (list1.val < list2.val) {
            node = list1;
            list1 = list1.next;
        } else {
            node = list2;
            list2 = list2.next;
        }

        if (mergeList == null) {
            mergeList = node;
            tmp = node;
        } else {
            tmp.next = node;
            tmp = node;
        }
    }
} */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(); // Dummy node
    let tmp = dummy; // Pointer สำหรับเชื่อมลิงก์ลิสต์ใหม่

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tmp.next = list1;
            list1 = list1.next;
        } else {
            tmp.next = list2;
            list2 = list2.next;
        }
        tmp = tmp.next;
    }

    tmp.next = list1 !== null ? list1 : list2;

    return dummy.next;
};

// ทดสอบฟังก์ชัน
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

let mergedList = mergeTwoLists(list1, list2);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
