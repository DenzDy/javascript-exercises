const sumAll = function(startNum, endNum) {
    if(Number.isInteger(startNum) != 1 || Number.isInteger(endNum) != 1 || startNum < 0 || endNum < 0){
        return 'ERROR';
    }
    if(startNum > endNum){
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }
    var sum = 0;
    for(let i = startNum; i <= endNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
