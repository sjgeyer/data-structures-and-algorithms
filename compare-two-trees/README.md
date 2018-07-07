# Compare Two Trees

Write two functions that takes in two trees and checks that the two trees are the same.

## Challenge

First function: Nodes must have the same value and be in the same location.
Second function: Nodes must have the same value but can be in different locations.

## Examples

1. 
          tree1               tree2
          
           [1]                 [1]
          /   \               /   \             // => true
        [2]   [3]           [2]   [3]
             /   \               /   \
           [4]   [5]           [4]   [5]

2.
          tree1               tree2
          
           [1]                 [1]
          /   \               /   \             // => false
        [2]   [3]           [2]   [3]
             /   \         /         \
           [4]   [5]     [4]         [5]
