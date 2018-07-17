# Remove Mext
Due to a code typo, a linked list has some nodes that have both properties `next` and `mext`. All `mext` properties need to be be merged with the `next` properties on each node, such that no information is lost.

## Challenge
Flatten the linked list so that all `mext` properties are combined into the `next` properties.

## Example

Input:

    List: head->[1]-(next)->[2]-(next)->[3]-(next)->[4]-(next)->[5]
                   -(mext)->[0]                        -(mext)->[9]
     

Output:

    head->[1]->[0]->[2]->[3]->[4]->[9]->[5]