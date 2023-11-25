// 定义节点结构
class Node {
  constructor(data) {
    // 节点值
    this.data = data;
    // 左子树
    this.left = null;
    // 右子树
    this.right = null;
  }
}

class BinarySerachTree {
  constructor() {
    this.root = null;
  }

  // =========================创建===============================
  // (递归-先序)根据先序序列创建二叉树的函数: 根左右,每一颗子树都是一样的递归创建，顺序是排好的
  preCreateBinaryTree(preOrder) {
    let index = 0;
    function buildTree() {
      const value = preOrder[index++];

      if (value === "#" || value === undefined) {
        return null;
      }
      // 根左右
      const newNode = new Node(parseInt(value));
      newNode.left = buildTree();
      newNode.right = buildTree();

      return newNode;
    }

    return buildTree();
  }

  // (非递归-先序): 用栈模拟递归的过程
  noRePreCreateBinaryTree(preOrder) {
    // 数组长度为0
    if (!preOrder || preOrder.length === 0) {
      return null;
    }
  }

  // (递归)先序遍历输出
  preOrderPrintf(node) {
    if (node === null) {
      return;
    }
    console.log(node.data);
    this.preOrderPrintf(node.left);
    this.preOrderPrintf(node.right);
  }

  // 非递归先序创建二叉树
}

// 非递归先序创建
const preorderTraversal = [
  "1",
  "2",
  "4",
  "#",
  "#",
  "#",
  "3",
  "5",
  "#",
  "#",
  "6",
  "#",
  "#",
];
const preTree = new BinarySerachTree();

// const preOrderNode = preTree.preCreateBinaryTree(preorderTraversal)
// console.log("✅ ~ zhuling （递归）preOrderNode,先序序列创建的树", preOrderNode)
// console.log("✅ ~ zhuling （递归）preOrderTraversalCheck:", preTree.preOrderPrintf(preOrderNode))

const nRePreOrderNode = preTree.noRePreCreateBinaryTree(preorderTraversal);

console.log("✅ ~ zhuling （非递归）nRePreOrderNode:", nRePreOrderNode);
console.log(
  "✅ ~ zhuling （非递归）preOrderTraversalCheck:",
  preTree.preOrderPrintf(nRePreOrderNode)
);
