class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [3, 5, 6, 9, 10, 20]
//          6
//      5       10
//  3         9    20
function threeToTwenty() {
  let twenty = new Node(20)
  let nine = new Node(9)
  let ten = new Node(10, nine, twenty)
  let three = new Node(3)
  let five = new Node(5, three, null)
  let six = new Node(6, five, ten)
  return six
}

// list = [10, 11, 30, 100, 200]
//          30
//      11      100
//  10              200
function tenToTwoHundred() {
  let twoHundred = new Node(200)
  let oneHundred = new Node(100, null, twoHundred)
  let ten = new Node(10)
  let eleven = new Node(11, ten, null)
  let thirty = new Node(30, eleven, oneHundred)
  return thirty
}

if (require.main === module) {
  // add tests in here if you need them
}

module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred
};

// Please add your pseudocode to this file
// And a written explanation of your solution
