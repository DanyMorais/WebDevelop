
function dateFunc(separator){
    let date = new Date();
    month = date.getMonth()+1;
    day = date.getDay()-1;
    year = date.getFullYear();
    if(separator == '/'){
        let showDate = month+'/'+day+'/'+year;
        return showDate;
    }
    if(separator == '-'){
        let showDate = month+'-'+day+'-'+year;
        return showDate;
    }
}

function dateFunc(separator){
    let date = new Date();
    let showDate =  date.getDay()-1 + separator + (date.getMonth()+1) + separator + date.getFullYear();
    return showDate;
}

function dateFunc2(separator){
    let date = new Date();
    let writeMonth = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let month = writeMonth[date.getMonth()];
    return date.getDate() + separator + month + separator + date.getFullYear();
}


//function that compare two dates
function dateFunc3(dt1, dt2){
    if(dt1 > dt2)
        return 'date1 maior'
    else if(dt1 < dt2)
        return 'date1 menor'
    else
        return 'date1 igual a date2';
}
 //function that add a hour to a given date
function dateFunc4(date, hour){
    date.setMonth(date.getMonth() - 1);
    date.setHours(date.getHours() + hour);
    return date;
}

//function that receive a date and say if is weekend or week day 
function dateFunc5(date){
    date.setMonth(date.getMonth() - 1);
    if(date.getDay() == 6 || date.getDay() == 0)
        return 'Fim de semana';
    else
        return 'Dia de semana';
}

//function that receive a date and return the previous date
function dateFunc6(date){
    date.setMonth(date.getMonth() - 1);
    date.setDate(date.getDate() - 1);
    return date;
}

//function that receive a list of dates and return the major
function dateFunc7(dateArray = []){
    let majorDate;
    for(let i = 0; i < dateArray.length; i++){
        if(i == 0){
            majorDate = dateArray[i];
        }else
        if(majorDate < dateArray[i]){
            majorDate = dateArray[i];
        }
    }
    return majorDate;
}

//function that receive a list of dates and return the minor
function dateFunc8(dateArray = []){
    let minorDate;
    for(let i = 0; i < dateArray.length; i++){
        if(i == 0){
            minorDate = dateArray[i];
        }else
        if(minorDate > dateArray[i]){
            minorDate = dateArray[i];
        }
    }
    return minorDate;
}

//function that receive a date and return the week day in full
function dateFunc9(date){
    date.setMonth(date.getMonth() - 1);   
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    return weekDay[date.getDay()];
} 