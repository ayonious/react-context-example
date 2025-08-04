import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';
import ThemeProvider from '../../Context/ThemeProvider';

// Mock the styled components
jest.mock('../styles', () => ({
  DivWrapper: ({ children, theme, ...props }: any) => (
    <div data-testid="div-wrapper" data-theme={theme?.themeName} {...props}>
      {children}
    </div>
  ),
  H1Wrapper: ({ children, ...props }: any) => (
    <h1 data-testid="h1-wrapper" {...props}>
      {children}
    </h1>
  ),
}));

// Mock Header component
jest.mock('../../Header/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

// Mock Footer component
jest.mock('../../Footer/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer Component</div>;
  };
});

describe('Dashboard', () => {
  test('renders with theme context', () => {
    render(
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    );

    expect(screen.getByTestId('div-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('div-wrapper')).toHaveAttribute('data-theme', 'dark');
    expect(screen.getByTestId('h1-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('h1-wrapper')).toHaveTextContent('Cool dashboard');
  });

  test('includes Header and Footer components', () => {
    render(
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('passes theme to styled components', () => {
    render(
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    );

    const wrapper = screen.getByTestId('div-wrapper');
    expect(wrapper).toHaveAttribute('data-theme', 'dark');
  });
});