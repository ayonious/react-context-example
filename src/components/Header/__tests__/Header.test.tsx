import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import ThemeProvider from '../../Context/ThemeProvider';

// Mock Material-UI components
jest.mock('@material-ui/core/FormControlLabel', () => {
  return function MockFormControlLabel({ control, label, ...props }: any) {
    return (
      <div data-testid="form-control-label" {...props}>
        {control}
        <span data-testid="label">{label}</span>
      </div>
    );
  };
});

jest.mock('@material-ui/core/Switch', () => {
  return function MockSwitch({ checked, onClick, ...props }: any) {
    return (
      <input
        type="checkbox"
        data-testid="switch"
        checked={checked}
        onChange={onClick}
        {...props}
      />
    );
  };
});

// Mock styled components
jest.mock('../styles', () => ({
  NavBar: ({ children, ...props }: any) => (
    <nav data-testid="nav-bar" {...props}>
      {children}
    </nav>
  ),
  NavCenter: ({ children, theme, ...props }: any) => (
    <div data-testid="nav-center" data-theme={theme?.themeName} {...props}>
      {children}
    </div>
  ),
  NavHeader: ({ children, ...props }: any) => (
    <div data-testid="nav-header" {...props}>
      {children}
    </div>
  ),
}));

describe('Header', () => {
  test('renders with dark theme initially', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
    expect(screen.getByTestId('nav-center')).toHaveAttribute('data-theme', 'dark');
    expect(screen.getByTestId('switch')).toBeChecked();
    expect(screen.getByTestId('label')).toHaveTextContent('🌚 Dark Theme');
  });

  test('toggles theme when switch is clicked', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const switchElement = screen.getByTestId('switch');
    
    // Initially dark theme
    expect(switchElement).toBeChecked();
    expect(screen.getByTestId('label')).toHaveTextContent('🌚 Dark Theme');

    // Toggle to light theme
    fireEvent.click(switchElement);
    
    expect(switchElement).not.toBeChecked();
    expect(screen.getByTestId('label')).toHaveTextContent('🌞 Light Theme');
    expect(screen.getByTestId('nav-center')).toHaveAttribute('data-theme', 'white');
  });

  test('contains all navigation elements', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
    expect(screen.getByTestId('nav-center')).toBeInTheDocument();
    expect(screen.getByTestId('nav-header')).toBeInTheDocument();
    expect(screen.getByTestId('form-control-label')).toBeInTheDocument();
  });
});