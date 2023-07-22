// SignUpScreen.test.js (Jest test file)
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from './RegisterScreen';

describe('SignUpScreen Component', () => {
  it('displays the sign-up form correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SignUpScreen />);

    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email/Username');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const signUpButton = getByText('Sign Up');

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmPasswordInput).toBeTruthy();
    expect(signUpButton).toBeTruthy();
  });

  it('registers a user successfully on valid sign-up details', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<SignUpScreen />);

    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email/Username');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const signUpButton = getByText('Sign Up');

    // Enter valid sign-up details
    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'john.doe@example.com');
    fireEvent.changeText(passwordInput, 'strongPassword123');
    fireEvent.changeText(confirmPasswordInput, 'strongPassword123');

    // Click on the sign-up button
    fireEvent.press(signUpButton);

    // Expect success message
    const successMessage = queryByText('Sign-up successful! Welcome, John Doe!');
    expect(successMessage).toBeTruthy();
  });

  it('displays an error message on invalid sign-up details', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<SignUpScreen />);

    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email/Username');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const signUpButton = getByText('Sign Up');

    // Enter invalid sign-up details (missing required fields)
    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(passwordInput, 'strongPassword123');
    fireEvent.changeText(confirmPasswordInput, 'strongPassword123');

    // Click on the sign-up button
    fireEvent.press(signUpButton);

    // Expect error message
    const errorMessage = queryByText('Please fill in all required fields.');
    expect(errorMessage).toBeTruthy();
  });
});
