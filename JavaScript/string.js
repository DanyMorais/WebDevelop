let name = '';

function showString(name){
    
    for(i in name){

        console.log(name[i]);
    }
    return name.length
}

function showStringInverse(name){
    
    for(let count = name.length-1; count >= 0; count--){

        console.log(name[count]);
    }
    return name.length
}

function vowels(name){
    let count = 0;
    nameLow = name.toLowerCase();
    for(let i = 0; i <= name.length; i++){
        if(nameLow[i] == 'a' || nameLow[i] == 'e' || nameLow[i] == 'i' || nameLow[i] == 'o' || nameLow[i] == 'u'){
            count++
        }
    }
    return count;
}

function consonants(name){
    let count = 0;
    nameLow = name.toLowerCase();
    for(let i = 0; i < name.length; i++){
        if(nameLow[i] != 'a' && nameLow[i] != 'e' && nameLow[i] != 'i' && nameLow[i] != 'o' && nameLow[i] != 'u'){
            count++
        }
    }
    return count;
}