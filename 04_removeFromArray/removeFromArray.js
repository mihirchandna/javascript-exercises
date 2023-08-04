const removeFromArray = function(arr,...args) {
    let newarray=[];
    let i=0;
    arr.forEach(item => {
        if(!args.includes(item))
        {
            newarray.push(item);
            i++;
        }
    });
    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
