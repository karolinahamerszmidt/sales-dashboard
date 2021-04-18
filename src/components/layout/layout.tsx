import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../../style/theme";
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
`;

export const Layout = () => (
  <ThemeProvider theme={lightTheme}>
    <Container>kot</Container>
  </ThemeProvider>
);
