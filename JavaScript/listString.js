console.log("exercicio") 

let str = "";

function myFunction(list, str){
    for(i in list){
        list[i] = list[i].concat(str);
    }
    return list;
}

