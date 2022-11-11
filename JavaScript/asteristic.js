let lista = [];

function asteristic(lista){

    let max = 0;
    let aste = '';
    
    for(i in list){

        let size = lista[i].length

        if(size > max){
            
            max = size;
            aste += '*'
        }
    }

    return aste
}