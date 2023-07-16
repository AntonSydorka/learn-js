function fib(l) {
    if(l < 1 || typeof(l) != 'number' || l % 1 != 0) {
        return "";
    }

    if(l === 1) {
        return "0";
    }

    let temp = 1;
    let priviusTemp = 0;
    let result = 1;

    let returnString = `${priviusTemp} ${temp}`;

    for(let i = 1; i < l - 1; i++) {
        result = temp + priviusTemp;
        returnString += ` ${result}`;
        priviusTemp = temp;
        temp = result;
    }

    return returnString;
}

console.log(fib(1));
console.log(fib(7));
console.log(fib(10));
console.log(fib(8));
console.log(fib(-1));
console.log(fib('asd'));
console.log(fib('1'));
console.log(fib(0));