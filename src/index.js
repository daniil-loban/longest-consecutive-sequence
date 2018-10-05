module.exports = function longestConsecutiveLength(array) {

    if (array.length == 0)
        return 0

    let searchBase = new Set(array),
        maxChainLength = 1,
        startValue = 0,
        startBase = new Set();

    for (let key of searchBase) {
        if (!searchBase.has(key-1) && searchBase.has(key+1)){
            startBase.add(key)
        }
    }

    if (startBase.length == 0){
        return 1
    }

    for (let key of startBase) {
        startValue = key;                 // Test the value
        endValue   = startValue;          // Open a new chain 
        while(searchBase.has(endValue)){
            endValue++;                   // Increase length of chain
        }
        maxChainLength = (maxChainLength > endValue-startValue)
                       ? maxChainLength
                       : endValue-startValue;
    } 
    
    return maxChainLength;
}

