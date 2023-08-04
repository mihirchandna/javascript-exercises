const reverseString = function(string) {
    let str=string.split('');
    let rev='';
    for(let index=str.length-1;index>=0;index--)
    {
        rev+=str[index];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
