import React, { Component } from 'react';
import { DivWrapper, H1Wrapper } from './styles';

import ThemeContext, { revertThemes, Themes } from '../Context/ThemeContext';

class Footer extends Component<any, any> {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <DivWrapper theme={theme}>
            <H1Wrapper>Making it work in footer</H1Wrapper>
          </DivWrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Footer;
