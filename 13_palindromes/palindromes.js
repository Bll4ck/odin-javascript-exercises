const palindromes = function (input) {
    input = input.toLowerCase();
    input = input.replaceAll(" ","");
    input = input.replaceAll(".","");
    input = input.replaceAll("!","");
    input = input.replaceAll("?","");
    input = input.replaceAll(",","");


    let reverseInput = "";

    for(i=input.length-1;i>=0;i--)
    {
        reverseInput += input[i]; 
    }

    if(input == reverseInput)
    {
        return true;
    }
    else
    {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
