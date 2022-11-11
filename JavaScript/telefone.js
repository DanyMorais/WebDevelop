
let phoneBook = {
    Abel: 5802943,
    Laura: 9761405,
    Lisa: 5850628,
    Adilson: 92409121,
    Victor: 9519228,
}

function searchNumber(name) {

    let phoneNumber;

         
    if(phoneBook[name] == undefined){
        return 'The name: ' +name+ ' is not registered';
    }
    return phoneBook[name];
}
function addName(name, number){
    phoneBook[name] = number;
    return phoneBook;
}
function removeName(name){
    delete phoneBook[name];
    return phoneBook;
}



function func(operador, name, number){
    if(operador == 'search'){
        searchNumber(name);
        return phoneBook[name];
    }
    else if(operador == 'add'){
        addName(name, number);
    }
    else if(operador == 'delete'){
        removeName(name);
    }
    return phoneBook;
}

function search(phoneBook2, name){
    return phoneBook2[name];
}
function add(phoneBook2, name, number){
    phoneBook2[name] = number;
    return phoneBook2;
}
function del(phoneBook2, name){
    delete phoneBook2[name];
    return phoneBook2;
}

function func2(operador, name, number){
    if(operador == 'search'){
        search(name);
        return phoneBook[name];
    }
    else if(operador == 'add'){
        add(name, number);
    }
    else if(operador == 'delete'){
        del(name);
    }
    return phoneBook;
}
