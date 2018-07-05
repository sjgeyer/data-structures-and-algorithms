# Eeney Meeney Miney Moe

## Challenge
Write a function called `EeneyMeeneyMineyMoe()` that accepts a list of strings and an integer `n`. Start at the beginning of the list and count up to `n` and remove the person at the current index from the list. Keep counting from that index and count up to n over and over until only one person is left in the list. Return a string with the name of the last person left in the list.

## Example

Input:

    list: ['John', 'Emily', 'Dan', 'Jen', 'Carl']
    n: 4
    

Iterations: 

    1: ['John', 'Emily', 'Dan', 'Carl']
    2: ['John', 'Emily', 'Carl']
    3: ['John', 'Emily']
    4: ['John']
    
Output:

    'John' 