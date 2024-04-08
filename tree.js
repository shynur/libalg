/* 把二叉树转化为稀疏数组.  E.g.,
 *      0
 *   +--+--+
 *   1     2     =>  [0, 1, 2, ,,, 6]
 *         +--+
 *            6
 */
function binaryTree2Array(node /* {value: any, left: node, right: node} */) {
    'use strict'

    const last_node = function(node) {
        while (true)
            if (node.right)
                node = node.right
            else if (node.left)
                node = node.left
            else
                return node
    }(node), fake_node = function(node) {
        return node.left = node.right = node
    }({})

    let idx = 0
    for (const arr = [], queue_nodes = [node]; queue_nodes.length; ++idx) {
        if ((node = queue_nodes.shift()) != fake_node)
            arr[idx] = node.value
        if (node === last_node)
            return arr
        else
            queue_nodes.push(node.left ?? fake_node),
                queue_nodes.push(node.right ?? fake_node)
    }
}
