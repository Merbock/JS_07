'use strict';

let arr = [];

const getRandomElementsArray = (count, n, m) => {
    for (let i = 0; i < count; i++) {
        arr.push(Math.round(n - 0.5 + Math.random() * (m - n) + 1));
    }

    return console.log(arr);
}

getRandomElementsArray(10, 20, 10);