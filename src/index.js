module.exports = function longestConsecutiveLength(array) {

    let searchBase     = new Set()
    let maxChainLength = 0

    for (let i=0; i< array.length; ++i){
        searchBase.add(array[i])
    }

    let startValue;
    for (let i=0; i<array.length; ++i) {
        startValue =array[i]; // Test the value

        // If chain for it is not exist         
        if (!searchBase.has(startValue-1)){  
            
            endValue = startValue;  // Open a new chain 
            while(searchBase.has(endValue)){
                endValue++;         // Increase length of chain
            }
            // Compare an select max result 
            maxChainLength = (maxChainLength > endValue-startValue)? 
                               maxChainLength
                             : endValue-startValue;
        }   
    } 
           
    return maxChainLength;
}

