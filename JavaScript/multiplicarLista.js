
    var list = [1,2,3,4,5,6];
    var multiplier;

    console.log(list)

    function multiplyList(list, multiplier){

        for (i in list){
            
            list[i] = list[i] * multiplier
        }
        return list;
    }

    console.log(list)