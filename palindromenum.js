// # Palindrome Numbers

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Notes: Largest product of 3 digit numbers is 998001, lowest is 10100. Find largest num in that range that matches palindrome pattern
// Regex positive integer: /^\d+$/, starts and ends with: ^...$, line end with number: \\d$” or [0-9]$, line starts with a number: ^\\d or ^[0-9]

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

const palindrome = (numStr) => {  
    if (numStr === numStr.split("").reverse().join("")) {  
        return true; 
    }   
    return false;  
}  
const max3DigitPalindromeProduct = () => {
    const factorRange = range(100, 999, 1)
    const factorRange2 = range(999, 100, -1)
    const productsArray = []
    const arrayBoolDump = []
    factorRange.forEach(factor1 => {
        factorRange2.forEach(factor2 => productsArray.push(factor1 * factor2))
    })
    const productsAsStrings = productsArray.map(String)
    const arrayofStringsSplit = productsAsStrings.map(numStr => {
        const palindromeCheck = palindrome(numStr)
        if (palindromeCheck) {
            return +numStr
        } else {
            arrayBoolDump.push(numStr)
        }
    })
    const numbersOnly = arrayofStringsSplit.filter(num => num !== undefined)
    console.log(Math.max(...numbersOnly))
}

max3DigitPalindromeProduct()













// Regex for matching text avoiding starting and ending spaces: ^[\s]*(.*?)[\s]*$

