// Part 1: Averaging Score fxs start.

function getAverage(testScores) {
    let arrLength = testScores.length;
    let sum = 0;

    for (let i = 0; i < arrLength; i++) {
        sum += testScores[i];
    }
    testScoreAvg = sum / arrLength;
    return testScoreAvg;
}

function printAverage(testScoreAvg) {
    console.log("The average of the scores is " + testScoreAvg);
}

// Part 1: Averaging Score fxs end.
// Part 2: Median Score fxs begin.

function getMedian(testScoresSorted) {
    let arrLength = testScoresSorted.length;

    let testScoreMedian = Math.floor(arrLength / 2);

    if (arrLength % 2 == 1) {
        return testScoreMedian = testScoresSorted[testScoreMedian];
    } else {
        return testScoreMedian = (testScoresSorted[testScoreMedian - 1] + testScoresSorted[testScoreMedian]) / 2.0;
    }
}

function printMedian(testScoreMedian) {
    console.log("The median score is: " + testScoreMedian);
}

// Part 2: Median Score fxs end.


let testScores = [99, 65, 88, 95, 77, 91, 73, 86]; // User Inputs

let testScoresSorted = testScores.sort(function(a, b) { // Sort descends by Score, established sorted array stored in new var.
    if (a > b) {
        return -1;
    } else {
        return 1;
    }
});

console.log("The highest score in the class is: " + Math.max.apply(null, testScoresSorted));
console.log("The lowest score in the class is: " + Math.min.apply(null, testScoresSorted));

let avg = getAverage(testScores);
printAverage(avg);
let med = getMedian(testScoresSorted);
printMedian(med);