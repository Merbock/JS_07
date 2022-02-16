'use strict';

let arr = [];
const n = 1;
const m = 100;

const getRandomElementsArray = (count) => {
    for (let i = 0; i < count; i++) {
        arr.push(Math.round(n - 0.5 + Math.random() * (m - n) + 1));
    }

    return console.log(arr);
}

getRandomElementsArray(10);
