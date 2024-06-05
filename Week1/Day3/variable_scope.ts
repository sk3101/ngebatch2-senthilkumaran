let X4 = 100;

function F8(){
    let X5 = 200;

    console.log("X4 (Inside Function )= ",X4);
    if (X5 > 100)
    {
        var X6 = 300;
        console.log("X4 (Inside Function Inside If 1 )= ",X4);
        console.log("X6 = Inside IF 1 = ",X6);
    }

    if (X4 > 90)
    {
        var X7 = 400;
        console.log("X4 (Inside Function Inside If 2 )= ",X4);
        console.log("X6 = Inside IF 2 = ",X7);
    } 
}

console.log("X4 (Outside Function )= ",X4);

F8();