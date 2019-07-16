const repeatingChar = (string) => {
    for(let i = 0; i < string.length - 1; i ++) {
        if(string[i] !== ' ' && string[i].toUpperCase() === string[i+1].toUpperCase()) {
            return i+1;
        }
    }
    return -1;
}

module.exports = repeatingChar;