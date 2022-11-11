
function stringConcat(string, num = 1) {
    let str = string;
    for (let i = 1; i < num; i++) {
        str = str.concat(string)
    }
    return console.log(str);
}

function stringConcat2(string, num = 1) {
    return string.repeat(num);
}

function deleteSimbol(string) {

    string = string.replaceAll(/&/g, '');
    string = string.replaceAll(/</g, '');
    string = string.replaceAll(/>/g, '');
    string = string.replaceAll(/\"/g, '');
    string = string.replaceAll(/\'/g, '');
    return string;    
}

function devideString(string, num = 1) {
    let stringArray = [];
    if (num == 1) {
        stringArray.push(string);
        return stringArray;
    }
    let stringArray2 = '';
    for (let i = 0; i < string.length; i++) {
        stringArray2 = stringArray2 + string[i];
        if (stringArray2.length == num) {
            stringArray.push(stringArray2);
            stringArray2 = '';
        }
    }
    if (stringArray2.length > 0) {
        stringArray.push(stringArray2);
    }
    return stringArray;
}

function devideString2(string, num = 1) {
    let stringArray = [];
    if (num == 1) {
        stringArray.push(string);
        return stringArray;
    }
    for (let i = 0; i < string.length; i = i + num) {
        stringArray.push(string.slice(i, i + num));
    }
    return stringArray;
}