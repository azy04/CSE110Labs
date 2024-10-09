import React from 'react';

export const themes = {
  light: {
    body: '#D3D3D3',
    background: '#eeeeee',
    text: '#000000',
    inputbackground: '#ffffff',
  },
  dark: {
    body: '#222222',
    background: '#333333',
    text: '#ffffff',
    inputbackground: '#555555',
  },
};

export const ThemeContext = React.createContext(themes.light);