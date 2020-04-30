import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from 'react';

import ThemeContext, { revertThemes, Themes } from '../Context/ThemeContext';

import { NavBar, NavCenter, NavHeader } from './styles';

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <NavBar>
          <NavCenter theme={theme}>
            <NavHeader>
              <FormControlLabel
                control={
                  <Switch
                    size="medium"
                    checked={theme.themeName === Themes.dark}
                    onClick={() => {
                      setTheme(revertThemes[theme.themeName]);
                    }}
                  />
                }
                label={
                  theme.themeName === Themes.dark
                    ? '🌚 Dark Theme'
                    : '🌞 Light Theme'
                }
              />
            </NavHeader>
          </NavCenter>
        </NavBar>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
