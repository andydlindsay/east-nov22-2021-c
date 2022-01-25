import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('creating fake functions', () => {
  const fakeFunction = jest.fn(); // creates fake callback () => {}

  const result = fakeFunction();
  expect(fakeFunction).toHaveBeenCalled();
  expect(fakeFunction).toHaveBeenCalledTimes(1);

  const moreElaborateFake = jest.fn(() => {
    return 'whatever';
  });

  const resultTwo = moreElaborateFake();
  expect(resultTwo).toBe('whatever');
});

test('it can display the results of an api call', () => {
  // render the component
  const {getByTestId, findByText, container, debug} = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));
  debug();

  // find the fetch high scores button
  const highScoreButton = getByTestId('high-scores');

  // click on the fetch high scores button
  fireEvent.click(highScoreButton);

  // find Carol in the DOM
  return findByText('Carol', { exact: false });
});
