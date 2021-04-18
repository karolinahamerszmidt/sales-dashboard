import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../../style/theme";
import { Card } from "../card/card";
import { Menu } from "../menu/menu";
import { Performance } from "../performance/performance";
import { Best } from "../best/best";
import { GlobalStyle } from "../../style/global-style";
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-areas: "performance performance performance performance performance performance best best best best best best";
  width: 100%;
  margin: 20px 64px 56px 56px;
`;

const StyledPerformance = styled(Performance)`
  grid-area: performance;
`;

const StyledBest = styled(Best)`
  grid-area: best;
`;

export const Layout = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Container>
      <Menu />
      <Content>
        <StyledPerformance />
        <StyledBest />
      </Content>
    </Container>
  </ThemeProvider>
);
