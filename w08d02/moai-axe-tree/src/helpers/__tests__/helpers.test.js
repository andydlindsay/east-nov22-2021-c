import { announceResult, cheatingOrNah } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('cheatingOrNah function', () => {

  test('if cheating is false, returns a valid choice', () => {
    const cheating = false;
    const playerSelection = 'Axe';

    const actual = cheatingOrNah(playerSelection, cheating);

    const items = ['Moai', 'Axe', 'Tree'];

    // expect(items.includes(actual)).toBe(true);
    expect(items).toContain(actual);
  });

  test('if cheating is true, returns the winning choice', () => {
    const cheating = true;
    const playerSelection = 'Axe';

    const actual = cheatingOrNah(playerSelection, cheating);

    expect(actual).toBe('Moai');
  });

});
