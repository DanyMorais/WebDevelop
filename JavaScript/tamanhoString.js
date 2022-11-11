let list = [];

function longestString(list){

    let max = 0;
    
    for(i in list){

        let size = list[i].length

        if(size > max){
            
            max = size;
        }
    }
    return max;
}