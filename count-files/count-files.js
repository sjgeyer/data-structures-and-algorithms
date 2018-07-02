'use strict';

const countFiles = (tree) => {
  if (!tree.root) throw new Error('input must be a non-empty tree');
  let fileCount = 0;
  const traverseFolders = (node) => {
    if (!node) return undefined;
    if (!node.left && !node.right) fileCount += 1;
    traverseFolders(node.left);
    traverseFolders(node.right);
    return undefined;
  };
  traverseFolders(tree.root);
  return fileCount;
};

export default countFiles;
