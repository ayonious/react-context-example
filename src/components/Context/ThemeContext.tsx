import React from 'react';

export interface ThemeDetails {
  themeName: Themes;
  mainGrey: string;
  mainWhite: string;
  mainBlack: string;
  darkGrey: string;
}

export enum Themes {
  dark = 'dark',
  white = 'white',
}

const whiteTheme: ThemeDetails = {
  themeName: Themes.white,
  mainGrey: '#ecececc0',
  mainWhite: 'rgb(255, 255, 255)',
  mainBlack: '#302f2f',
  darkGrey: '#8e8e8e',
};

export const darkTheme: ThemeDetails = {
  themeName: Themes.dark,
  mainGrey: '#8e8e8e',
  mainWhite: '#302f2f',
  mainBlack: 'rgb(255, 255, 255)',
  darkGrey: '#ecececc0',
};

export const revertThemes = {
  [Themes.dark]: whiteTheme,
  [Themes.white]: darkTheme,
};

const ThemeContext = React.createContext({
  theme: darkTheme,
  setTheme: (_theme: ThemeDetails) => {},
});

export default ThemeContext;
