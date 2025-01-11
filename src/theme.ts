import { createTheme } from '@mantine/core';

export const theme = createTheme({
  // White and black colors, defaults to '#fff' and '#000'
  white: '#f8f9fa',
  black: '#121212',

  colors: {
    blue: ["#e6307c", "#e6307c", "#e6307c", "#e6307c", "#e6307c", "#e6307c", "#e6307c", "#e6307c", "#e6307c", "#e6307c" ],
    yellow: ["#fff9e0", "#fff0b3", "#ffe785", "#f5dd61", "#e6cc4d", "#d7bb3a", "#b3992f", "#8f7724", "#6b5519", "#47330e"],
    orange: ["#fff1e0", "#ffd8b3", "#ffbf85", "#faa300", "#e69100", "#d08000", "#a56500", "#7a4a00", "#503000", "#261600"],
    pink: ["#ffe6ef", "#ffbfd0", "#ff99b2", "#f4538a", "#db376b", "#c11e55", "#991841", "#70122f", "#470c1d", "#1f050b"],
  },
  // Key of theme.colors
  primaryColor: 'blue',

  // Default gradient used in components that support `variant="gradient"` (Button, ThemeIcon, etc.)
  defaultGradient: { deg: 135, from: 'pink', to: 'blue' },
  fontFamily: 'Verdana',
});
