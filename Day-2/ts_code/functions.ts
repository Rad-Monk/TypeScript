// named
function horny(time: number, age: number): "yes"|"no"{
    if(time > 22 && age > 18){
        return "yes";
    }
    return "no";
}


// anonymous
let horny2 = function(time: number, age: number): "yes"|"no"{
    if(time > 22 && age > 18){
        return "yes";
    }
    return "no";
}

// arrow 
let horny3= (time: number, age: number): "yes" | "no" => {
    if(time > 22 && age > 18){
        return "yes";
    }
    return "no";
}