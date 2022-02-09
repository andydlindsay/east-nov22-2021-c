// parameters, return value

const sayHello = (name: string, age: number = 50, treat?: ITreat): void => {
  console.log(age);
  // return `hello there ${name}`;
};

sayHello('Alice', 42);

const returningPromise = (num: number): Promise<number> => {
  return Promise.resolve(num);
}

returningPromise(7).then((data) => {});

const higherOrderFunction = (num: number, callback: (anyNum: number) => string): void => {
  const returnVal = callback(num);
};

// const get = (req: IRequest, res: IResponse) => void 

higherOrderFunction(42, (num: number) => { return 'hello' });
