interface IContainer<T, Anything> {
  name: string;
  contents: T;
  arr?: Anything[];
};

const strContainer: IContainer<string, string> = {
  name: 'string container',
  contents: 'hello there'
};

const numContainer: IContainer<number, boolean> = {
  name: 'num container',
  contents: 42
};
