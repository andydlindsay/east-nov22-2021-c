export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const genFeedbackMessage = (status) => {
  const lookup = {
    Waiting: 'Waiting for your choice!',
    Won: 'You win!!',
    Lost: 'Too bad! Better luck next time.',
    Tied: 'Tie game'
  };
  return lookup[status];
};

export const cheatingOrNah = (playerSelection, cheating) => {
  if (cheating) {
    const winningChoices = {
      Axe: 'Moai',
      Tree: 'Axe',
      Moai: 'Tree',
    };

    return winningChoices[playerSelection];
  }

  const items = ['Moai', 'Axe', 'Tree'];
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};
