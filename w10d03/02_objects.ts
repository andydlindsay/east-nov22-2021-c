interface ITreat {
  name: string;
  tastiness: number;
}

interface IDog {
  id?: number;
  name: string;
  breed: string;
  age: number;
  treats: ITreat[];

  getTreat: (treat: ITreat) => boolean 
};

const dog: IDog = {
  getTreat: (treat: ITreat) => { return false },
  name: 'Benji',
  breed: 'Labrador Retriever',
  age: 10,
  treats: [
    {
      name: 'kibbles and bits',
      tastiness: 7
    }
  ]
};

const dogs: IDog[] = [];
dogs.push(dog);
// dogs.push('');
