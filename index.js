const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function reducer(accumulator, currentValue) {
//     return accumulator + currentValue;
// }
// Code your solution here
const totalBatteries = batteryBatches.reduce((x, y) => x + y)