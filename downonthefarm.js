// # Animal Legs

// Start with this example problem.

// > A quarter of the animals on a farm have four legs. The remaining three quarters of the animals have two legs. 
// If there are 60 legs overall, how many animals are there on the farm?

// Write some JavaScript functions that will allow you to calculate the number of animals when any of the following parameters change.

// * Total number of legs
// * Percentage of animals with a certain number of legs
// * The number of legs for each group

// For example, your functions should be able to solve this variation.

// > Forty percent of the animals on a farm have three legs. The remaining 60 percent of the animals have four legs. 
// If there are 180 legs overall, how many animals are there on the farm?


// <details>
//     <summary>Answer to examples</summary>
// <ol>
// <li>Answer is 24</li>
// <li>Answer is 50</li>
// </ol>
// </details>
// 4(.25a) + 2(.75a) = 60
// a + 1.5a = 60
// 2.5a = 60
// 2.5a/2.5a = 60/2.5a
// 24
const animalLegs = (totalLegs, percentOfLegs1, numOfLegs1, numOfLegs2) => {
    const percent2 = 100 - percentOfLegs1
    const legCalc = numOfLegs1 * (percentOfLegs1/100) + numOfLegs2 * (percent2/100)
    const animalsOnFarm = totalLegs/legCalc

    console.log(`The total number of animals on the farm is ${animalsOnFarm}.`)
}
animalLegs(180, 40, 3, 4)