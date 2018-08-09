# Merge Two Binary Trees

## Challenge
Write a function that takes in two binary trees and returns a single merged tree.

If two nodes occupy the same space, the new node should equal the sum of the nodes.

## Example

Input:

          tree1               tree2
          
           [1]                 [6]
          /   \               /   \   
        [2]   [3]           [7]   [8]
             /   \         /         \
           [4]   [5]     [9]         [10]
     
Output:

           [7]
          /   \ 
        [9]   [11]
       /     /    \ 
     [9]   [4]   [15]
