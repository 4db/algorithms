function reverseStrRecurstion(str) {
    return str === '' ? '' : reverse_str_recurstion(str.substr(1)) + str[0];
}

function reverseStrArr(str) {
    return [...str].reverse().join('');
}

function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}