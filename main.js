//Converts decimal numbers to binary numbers
function decimalToBinary(number) { 
    return number==0 ? "" : decimalToBinary(~~(number/2)) + String(number%2) 
}

//Converts binary numbers to decimal numbers
function binaryToDecimal(number) { 
    return number.length==1 ? Number(number) : Number(number[0]) * 2 ** (number.length-1) + binaryToDecimal(number.substring(1))
}
