'use strict';

let arr = [];

const getRandomElementsArray = (count, n, m, str) => {

    for (let i = 0; i < count; i++) {
        arr.push(Math.round(n - 0.5 + Math.random() * (m - n) + 1));
    }

    if (str === 'odd') {
        const oddItems = arr.filter(item => !(item % 2 === 0));
        return console.log(oddItems);
    }
    if (str === 'even') {
        const evenItems = arr.filter(item => item % 2 === 0);
        return console.log(evenItems);
    }

    return console.log(arr);
}

getRandomElementsArray(10, -10, 10, 'odd');