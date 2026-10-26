import 'styled-components';
import type { ThemeDetails } from './components/Context/ThemeContext';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDetails {}
}
