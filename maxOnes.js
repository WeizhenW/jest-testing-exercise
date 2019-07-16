const maxOnes = (array) => {
    let maxCount = 0;
    let currentCount = 0;
    array.forEach(number => {
        if(number != 1 && number != 0) {
            return -1;
        } else if(number == 1) {
            currentCount += 1;
        } else if(number == 0) {
             maxCount = Math.max(currentCount, maxCount);
             currentCount = 0;
        }
    })
    return Math.max(currentCount, maxCount);
}

module.exports = maxOnes;