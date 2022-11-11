let calc = [];


function calcular(calc, operador){
    let total = calc[0];

    if(operador == '+'){
        total = 0
        for(value of calc){
            total = total + value
        }
    }else if(operador == '-'){
        for(pos in calc){
            if(pos == 0)
            continue;
            total = total - calc[pos]
        }

    }else if(operador == '*'){
        for(pos in calc){
            if(pos == 0)
            continue;
            total = total * calc[pos]
        }

    }else if(operador == '/'){
        for(pos in calc){
            if(pos == 0)
            continue;
            total = total / calc[pos]
        }

    }
    return total;
}