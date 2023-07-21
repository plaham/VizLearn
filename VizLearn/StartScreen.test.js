// WelcomePage.test.js (Jest test file)
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StartScreen from './StartScreen';

describe('WelcomePage Component', () => {
  it('displays the welcome message correctly', () => {
    const { getByText } = render(<WelcomePage />);

    const welcomeMessage = getByText('Welcome to our App!');
    expect(welcomeMessage).toBeTruthy();
  });

  it('calls the onStartButtonPress function on pressing the start button', () => {
    // Mock the onStartButtonPress function
    const mockOnStartButtonPress = jest.fn();

    const { getByText } = render(<WelcomePage onStartButtonPress={mockOnStartButtonPress} />);

    const startButton = getByText('Start');
    fireEvent.press(startButton);

    expect(mockOnStartButtonPress).toHaveBeenCalledTimes(1);
  });
});
