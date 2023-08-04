const palindromes = function (str) {
    let strm=str.toLowerCase().replace(/[^0-9a-z]/g,"");
    let rev=strm.split('').reverse().join("");
    if(rev==strm)
    {
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
