import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../style/global-style";
import {
  darkTheme,
  lightTheme,
  ThemeModeContext,
  ThemeModeProvider,
} from "../../style/theme";
import { Layout } from "../layout/layout";
import { MenuProvider } from "../menu/menu";

const AppInner = () => {
  const { isThemeDark } = useContext(ThemeModeContext);

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <MenuProvider>
        <GlobalStyle />
        <Layout />
      </MenuProvider>
    </ThemeProvider>
  );
};

export const App = () => {
  return (
    <ThemeModeProvider>
      <AppInner />
    </ThemeModeProvider>
  );
};
