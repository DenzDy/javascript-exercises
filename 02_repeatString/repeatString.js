const repeatString = function(string, num) {
    if(num >= 0){
        var finalString = '';
        for(let i = 0; i < num; i++){
            finalString += string;
        }
        return finalString;
    }
    return 'ERROR';
    
};

// Do not edit below this line
module.exports = repeatString;
