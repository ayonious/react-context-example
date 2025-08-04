import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeContext, { Themes, darkTheme, revertThemes } from '../ThemeContext';

describe('ThemeContext', () => {
  test('should have correct dark theme values', () => {
    expect(darkTheme.themeName).toBe(Themes.dark);
    expect(darkTheme.mainGrey).toBe('#8e8e8e');
    expect(darkTheme.mainWhite).toBe('#302f2f');
    expect(darkTheme.mainBlack).toBe('rgb(255, 255, 255)');
    expect(darkTheme.darkGrey).toBe('#ecececc0');
  });

  test('should have correct theme enums', () => {
    expect(Themes.dark).toBe('dark');
    expect(Themes.white).toBe('white');
  });

  test('should have correct revert themes mapping', () => {
    expect(revertThemes[Themes.dark].themeName).toBe(Themes.white);
    expect(revertThemes[Themes.white].themeName).toBe(Themes.dark);
  });

  test('context provides theme and setTheme function', () => {
    const TestComponent = () => {
      return (
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <div>
              <span data-testid="theme-name">{theme.themeName}</span>
              <span data-testid="set-theme-type">{typeof setTheme}</span>
            </div>
          )}
        </ThemeContext.Consumer>
      );
    };

    render(<TestComponent />);
    
    expect(screen.getByTestId('theme-name')).toHaveTextContent('dark');
    expect(screen.getByTestId('set-theme-type')).toHaveTextContent('function');
  });
});