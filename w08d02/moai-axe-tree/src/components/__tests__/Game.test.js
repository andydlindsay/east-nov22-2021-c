import React from 'react';
import Game from '../Game';
import {render, fireEvent} from '@testing-library/react';

describe('tests for the Game component', () => {

  test('it can toggle the cheating boolean by clicking on the robot head', () => {
    const {getByTestId} = render(<Game />);

    const robotHead = getByTestId('robot-head');

    fireEvent.click(robotHead);
    
    expect(robotHead).toHaveClass('cheating');
    
    fireEvent.click(robotHead);
    
    expect(robotHead).not.toHaveClass('cheating');
  });

});
