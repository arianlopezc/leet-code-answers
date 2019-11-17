function calculateNeededRotations(listA, listB, dominoNumber) {
    let movementsOnA = 0;
    let movementsOnB = 0;
    let loop = true;
    for (let itemIndex = 0; itemIndex < listA.length && loop; itemIndex++) {
        if (listA[itemIndex] === dominoNumber && listB[itemIndex] !== dominoNumber) {
            movementsOnB++;
        } else if (listA[itemIndex] !== dominoNumber && listB[itemIndex] === dominoNumber) {
            movementsOnA++;
        } else if (listA[itemIndex] !== dominoNumber && listB[itemIndex] !== dominoNumber) {
            movementsOnA = -1;
            movementsOnB = -1;
            loop = false;
        }
    }
    if (movementsOnA <= movementsOnB) {
        return movementsOnA;
    }
    return movementsOnB;
}

function minimunDominoRotations(A, B) {
    if (A.length !== B.length || A.length === 0) {
        return -1;
    }
    let upperNumber = A[0];
    let lowerNumber = B[0];
    let upperTotalMovements = calculateNeededRotations(A, B, upperNumber);
    let lowerTotalMovements = calculateNeededRotations(B, A, lowerNumber);
    if (upperTotalMovements === -1 && lowerTotalMovements > -1) return lowerTotalMovements;
    else if (lowerTotalMovements === -1 && upperTotalMovements > -1) return upperTotalMovements;
    else if (upperTotalMovements <= lowerTotalMovements) return upperTotalMovements;
    else if (lowerTotalMovements <= upperTotalMovements) return lowerTotalMovements;
    else return -1;
}

let A = [1,2,1,1,1,2,2,2];
let B = [2,1,2,2,2,2,2,2];
console.log(minimunDominoRotations(A, B));