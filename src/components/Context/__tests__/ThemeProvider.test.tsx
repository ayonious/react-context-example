import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeProvider from '../ThemeProvider';
import ThemeContext, { Themes, revertThemes } from '../ThemeContext';

describe('ThemeProvider', () => {
  test('provides initial dark theme to children', () => {
    const TestChild = () => {
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div data-testid="theme-name">{theme.themeName}</div>
          )}
        </ThemeContext.Consumer>
      );
    };

    render(
      <ThemeProvider>
        <TestChild />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-name')).toHaveTextContent('dark');
  });

  test('allows theme switching through setTheme', () => {
    const TestChild = () => {
      return (
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <div>
              <div data-testid="theme-name">{theme.themeName}</div>
              <button 
                data-testid="switch-theme"
                onClick={() => setTheme(revertThemes[theme.themeName])}
              >
                Switch Theme
              </button>
            </div>
          )}
        </ThemeContext.Consumer>
      );
    };

    render(
      <ThemeProvider>
        <TestChild />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-name')).toHaveTextContent('dark');
    
    fireEvent.click(screen.getByTestId('switch-theme'));
    
    expect(screen.getByTestId('theme-name')).toHaveTextContent('white');
  });

  test('theme values are correctly passed through context', () => {
    const TestChild = () => {
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div>
              <div data-testid="main-grey">{theme.mainGrey}</div>
              <div data-testid="main-white">{theme.mainWhite}</div>
              <div data-testid="main-black">{theme.mainBlack}</div>
            </div>
          )}
        </ThemeContext.Consumer>
      );
    };

    render(
      <ThemeProvider>
        <TestChild />
      </ThemeProvider>
    );

    expect(screen.getByTestId('main-grey')).toHaveTextContent('#8e8e8e');
    expect(screen.getByTestId('main-white')).toHaveTextContent('#302f2f');
    expect(screen.getByTestId('main-black')).toHaveTextContent('rgb(255, 255, 255)');
  });
});