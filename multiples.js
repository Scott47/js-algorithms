// 1. Find the sum of all the multiples of 3 or 5 below 1000.
const sumOfMultiples35 = () => {
    const rangeOfMultiples = range(0, 1000, 1)
    const multiplesOf3 = rangeOfMultiples.filter(threes => threes % 3)
    const multiplesOf5 = rangeOfMultiples.filter(fives => fives % 3)
    const arrayOfMultiples = multiplesOf3.concat(multiplesOf5)
    const sumOfMultiples = arrayOfMultiples.reduce(add, 0)
    console.log(sumOfMultiples)
}

const add = (accumulator, num) => accumulator + num;
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
sumOfMultiples35()

