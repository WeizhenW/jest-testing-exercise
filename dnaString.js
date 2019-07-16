const dnaString = (string) => {
    const canonicalBase = ['C', 'T', 'A', 'G'];
    let newString = '';
    for(let i = 0; i < string.length; i ++) {
        // console.log(canonicalBase.indexOf(string[i]))
        if(canonicalBase.indexOf(string[i]) !== -1) {
            newString = newString + string[i];
        }
    }
    return newString;
}

module.exports = dnaString;