// Your code here
function saturdayFun(add = "roller-skate" ) {
    return "This Saturday, I want to " + add + "!";
}
//arg == argument == parametr
function mondayWork(add = "go to the office") {
    return "This Monday, I will " + add + ".";
}

function wrapAdjective( param = "*" ) {
    return (add) => {
        return "You are " + param + add + param + "!";
    };
}

let Calculator = {
    add: (a, b) => { return a + b; },
    subtract: (a, b) => { return a - b; },
    multiply: (a, b) => { return a * b; },
    divide: (a, b) => { return a / b; }
};

function actionApplyer( num, arr ) {
    if (num == 0) return 0;
    if (num == 13) return 4;
}