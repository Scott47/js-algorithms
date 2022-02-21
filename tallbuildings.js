// 3. City Planner

// You are in charge of the city planning for your town. When new companies come to town, they often want to make a statement, 
// but the city has a height requirement on any new building. Your job is to count how many buildings currently are the highest.

// Example:

// const buildings = [ 1250, 800, 600, 1250, 750 ]

// The current maximum height buildings are 1250 meters high. There are 2 of them, so return 2 from the function.

// ## Function Description

// The function should accept an array of numbers as input.

// ## Returns

// The number of buildings that are tallest.

// ### Sample Input

// [ 1150, 3023, 2020, 3023, 3023 ]

// ### Sample Output

// 3

const tallestBuildings = (arrayOfBuildings) => {
    const tallest = Math.max( ...arrayOfBuildings )
    const buildingsToFlag = arrayOfBuildings.filter(bldg => bldg === tallest)
    console.log(buildingsToFlag.length)
}

const buildings = [ 1150, 3023, 2020, 3023, 3023 ]
tallestBuildings(buildings)