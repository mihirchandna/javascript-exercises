const sumAll = function(n1,n2) {
    let sum=0;
    const a=typeof(n1);
    const b=typeof(n2);
    if(a!='number' || b!='number' || n1<0 || n2<0)
    {
        return "ERROR";
    }
    if(n1<n2)
    {
        for(let i=n1;i<=n2;i++)
        {
            sum+=i;
        }
    return sum;
    }
    else{
        for(let i=n2;i<=n1;i++)
        {
            sum+=i;
        }
    return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
