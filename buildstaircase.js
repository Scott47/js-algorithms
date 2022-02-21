// 2. Staircase detail
// This is a staircase of size :

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to 3. It is drawn using `#` symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size _n_.

// ## Function Description

// The function should accept a number as input. This number is the height and width of the staircase.

// Print a staircase as described above.

// ### Function Constraints

// The number specified for height and width should be greater than 0 and less than 100.

// ## Output Format

// Print a staircase of size  using # symbols and spaces.

// #### Sample Input

// 6

// #### Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

const staircase = (heightWidth) => {

    let steps = ""

    for (let i = 1; i <= heightWidth; i++) {
        for (let j = i - 1; j >= i; j--) {
            steps += " "
        }
        for (let s = 1; s <= i; s++) {
            steps += "#"
        }
        steps += "\n"
    }
    console.log(steps)
    
}

staircase(6)