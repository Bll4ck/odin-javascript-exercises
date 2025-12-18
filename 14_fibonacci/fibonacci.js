const fibonacci = function(index) {

    if (index < 0) return "OOPS";
    if (index == 0) return 0;

    let fibArray = [1,1];

    if(index>2)
    {
        for(let i = 2;i < index;i++)
        {
            fibArray[i] = fibArray[i-2] + fibArray[i-1];
        }
    }

    return fibArray[index-1];
    
};

// Do not edit below this line
module.exports = fibonacci;
