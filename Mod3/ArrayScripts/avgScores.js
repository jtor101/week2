function getAverage(testScores) {
    let arrLength = testScores.length
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

let testScores = getAverage([95, 91, 88, 85, 82, 77, 73]);

printAverage(testScores);