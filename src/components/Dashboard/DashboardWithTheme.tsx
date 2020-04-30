import React, { Component } from 'react';

import ThemeProvider from '../Context/ThemeProvider';
import Dashboard from './Dashboard';

class DashboardWithTheme extends Component<any, any> {
  render() {
    return (
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    );
  }
}

export default DashboardWithTheme;
