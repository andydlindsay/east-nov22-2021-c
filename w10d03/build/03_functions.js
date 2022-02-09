"use strict";
// parameters, return value
const sayHello = (name, age = 50, treat) => {
    console.log(age);
    // return `hello there ${name}`;
};
sayHello('Alice', 42);
const returningPromise = (num) => {
    return Promise.resolve(num);
};
returningPromise(7).then((data) => { });
const higherOrderFunction = (num, callback) => {
    const returnVal = callback(num);
};
// const get = (req: IRequest, res: IResponse) => void 
higherOrderFunction(42, (num) => { return 'hello'; });
