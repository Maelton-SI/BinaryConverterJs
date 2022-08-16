/**
 Binary to Decimal => ok
 Decimal to Binary => ok
 
 Binary to Octal => ok
 Octal to Binary

 Binary to Hexadecimal
 Hexadecimal to Binary

 Octal to Decimal
 Decimal to Octal

 Hexadecimal to Decimal
 Hexadecimal to Binary
 */

//Converts decimal numbers to binary numbers
function decimalToBinary(number) { 
    return number==0 ? "" : decimalToBinary(~~(number/2)) + String(number%2) 
}

//Converts binary numbers to decimal numbers
function binaryToDecimal(number) { 
    return number.length==1 ? Number(number) : Number(number[0]) * 2 ** (number.length-1) + binaryToDecimal(number.substring(1))
}

//Converts binary numbers to octal
function binaryToOctal(number) {
    if (number.length <= 3) {
        return String( binaryToDecimal(number) )
    } else {
        return binaryToOctal(number.slice(0, -3)) + String( binaryToDecimal(number.slice(-3)) )
    }
}

function tests() {
    let result = binaryToOctal('11110')
    console.log(result)
}

tests()