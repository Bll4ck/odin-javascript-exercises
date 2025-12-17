const leapYears = function(year) 
{
    const yearByFour = year / 4
    const yearByHundred = year / 100
    const yearByFourHundred = year / 400

    let isLeapYear = false;
    
    if((yearByFour == Math.floor(yearByFour)) && (!(yearByHundred == Math.floor(yearByHundred)) || (yearByFourHundred == Math.floor(yearByFourHundred))))
    {
        return true;
    }
    else
    {
        return false;
    }


};

// Do not edit below this line
module.exports = leapYears;
