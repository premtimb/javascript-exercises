const sumAll = function(min, max) { 
    if(min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)){
        return 'ERROR';
    }
    const maxNumber = Math.max(min,max);
    const minNumber = Math.min(min,max);

    let sum=0;
    for(let i=minNumber;i<=maxNumber;i++){
        sum+=i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
