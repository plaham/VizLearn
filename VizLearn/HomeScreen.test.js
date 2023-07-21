// HomeScreen.test.js (Jest test file)
import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen Component', () => {
  it('renders the welcome message correctly', () => {
    const { getByText } = render(<HomeScreen />);
    const welcomeMessage = getByText('Welcome to the Education App!');
    expect(welcomeMessage).toBeTruthy();
  });

  it('renders course cards correctly', () => {
    const { getByText } = render(<HomeScreen />);
    const mathCourse = getByText('Math');
    const scienceCourse = getByText('Science');
    const historyCourse = getByText('History');

    expect(mathCourse).toBeTruthy();
    expect(scienceCourse).toBeTruthy();
    expect(historyCourse).toBeTruthy();
  });

  it('navigates to the correct course details on press', () => {
    // Mock the navigation function if using react-navigation or any other navigation library
    const mockNavigate = jest.fn();
    jest.mock('@react-navigation/native', () => ({
      ...jest.requireActual('@react-navigation/native'),
      useNavigation: () => ({
        navigate: mockNavigate,
      }),
    }));

    const { getByText } = render(<HomeScreen />);
    const mathCourse = getByText('Math');
    const scienceCourse = getByText('Science');
    const historyCourse = getByText('History');

    // Simulate button press
    mathCourse.props.onPress();
    scienceCourse.props.onPress();
    historyCourse.props.onPress();

    expect(mockNavigate).toHaveBeenCalledTimes(3);
    expect(mockNavigate).toHaveBeenCalledWith('MathCourseScreen');
    expect(mockNavigate).toHaveBeenCalledWith('ScienceCourseScreen');
    expect(mockNavigate).toHaveBeenCalledWith('HistoryCourseScreen');
  });
});
