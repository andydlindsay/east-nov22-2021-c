console.log('hello there');

interface IUser {
  username: string;
  password: string;
}

const login = (user: IUser): boolean => {
  // user.moreStuff
  return true;
}

const user = {
  username: 'jstamos',
  password: '1234',
  moreStuff: true
};

login(user);
