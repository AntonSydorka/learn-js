const endingForHour = [
    'часов', //0
    'час', //1
    "часа", //2
    "часа", //3
    "часа", //4
    "часов",  //5
    "часов",  //6
    "часов",  //7
    "часов",  //8
    "часов",  //9
    "часов"  //10
];

function getTimeFromMinutes(minutes) {
    if(minutes < 0 || minutes > 600 || minutes % 1 != 0) {
         return 'Ошибка, проверьте данные';
    }

    let outMin = minutes % 60;
    let outHour = (minutes - outMin) / 60;

    return `Это ${outHour} ${endingForHour[outHour]} и ${outMin} минут`;
}

console.log(getTimeFromMinutes(null));
console.log(getTimeFromMinutes(0.2));
console.log(getTimeFromMinutes(620));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(120));
console.log(getTimeFromMinutes(1));
console.log(getTimeFromMinutes(600));

function findMaxNumber() {
    let arg = arguments;
    if(arg.length != 4) {
        return 0;
    }

    let max = 0;

    for(let i = 0; i < arg.length; i++) {
        if(typeof(arg[i]) != 'number') {
            max = 0;
            break;
        }

        if(max < arg[i]) {
            max = arg[i];
        }
    }

    return max;
}

console.log(findMaxNumber(1,2,3,4));
console.log(findMaxNumber(1,2.3,3,4));
console.log(findMaxNumber(1,2,'3',4));
console.log(findMaxNumber(1,12,3,4));