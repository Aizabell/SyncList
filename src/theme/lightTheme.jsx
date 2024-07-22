import { DefaultTheme } from "@react-navigation/native";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7FAFF',
    textPrimary: '#091127',
    textSecondary: '#899688',
    iconPrimary: '#091127',
    iconSecondary: '#899688',
    minimumTintColor: '#091127',
    maximumTintColor: '#D3D7DF',
  },
};
