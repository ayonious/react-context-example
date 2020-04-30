import React, { Component } from 'react';
import { DivWrapper, H1Wrapper } from './styles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import ThemeContext from '../Context/ThemeContext';

class Dashboard extends Component<any, any> {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <DivWrapper theme={theme}>
            <Header />
            <H1Wrapper>Cool dashboard</H1Wrapper>
            <Footer />
          </DivWrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Dashboard;
