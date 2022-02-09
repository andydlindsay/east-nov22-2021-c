let username: string | number | boolean = 'Alice';

username = 'Bob';
username = 42;
username = false;

const numbers: (string | number)[] = [];
numbers.push(4);
numbers.push('hello');
// numbers.push(true);

const result = numbers.pop();
