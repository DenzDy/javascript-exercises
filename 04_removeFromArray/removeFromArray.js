const removeFromArray = function(array, ...numberArgs) {
    var finalArray = array;
    for(let arg of numberArgs){
        console.log(arg);
        for(let i = 0; i < finalArray.length; i++){
            if(arg === array[i]){
                finalArray.splice(i, 1);
            }
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
