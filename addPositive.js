const addPositive = (array) => {
    let sum = 0;
    array.forEach(number => {
        if(number > 0) {
            sum += Number(number);
        }
    })
    return sum;
};

module.exports = addPositive;