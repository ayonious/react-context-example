import React from 'react';
import { createRoot } from 'react-dom/client';

import DashboardWithTheme from './components/Dashboard/DashboardWithTheme';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(<DashboardWithTheme />);
