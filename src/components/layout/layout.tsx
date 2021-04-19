import React, { useContext } from "react";
import styled from "styled-components";
import {
  Menu,
  MenuContext,
  MENU_OPEN_WIDTH_PX,
  MENU_WIDTH_PX,
} from "../menu/menu";
import { Performance } from "../performance/performance";
import { Best } from "../best/best";
import {
  forPhoneOnly,
  forTabletLandscapeUp,
  forTabletPortraitUp,
} from "../../style/media-queries";
import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "../mobile-header/mobile-header";

const StyledBest = styled(Best)`
  grid-area: best;
`;

const StyledPerformance = styled(Performance)`
  grid-area: performance;
`;

const Content = styled.div<{ isMenuOpen: boolean }>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-areas:
    "performance performance performance performance performance performance performance performance performance performance performance performance"
    "best best best best best best best best best best best best";
  width: 100%;
  padding: 20px 24px 20px 24px;
  overflow-x: hidden;
  overflow-y: auto;

  transition: transform 0.3s;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? `translateX(${MENU_OPEN_WIDTH_PX}px)` : ""};

  @media ${forTabletPortraitUp} {
    padding: 20px 24px 20px calc(${MENU_WIDTH_PX}px + 24px);
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? `translateX(${MENU_OPEN_WIDTH_PX - MENU_WIDTH_PX}px)` : ""};
  }

  @media ${forTabletLandscapeUp} {
    grid-template-areas: "performance performance performance performance performance performance best best best best best best";
    padding: 20px 64px 56px calc(${MENU_WIDTH_PX}px + 56px);
  }
`;

const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Layout = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const isPhoneOnly = useMediaQuery({ query: forPhoneOnly });
  return (
    <Container>
      {isPhoneOnly ? <MobileHeader /> : null}
      <Menu />
      <Content isMenuOpen={isMenuOpen}>
        <StyledPerformance />
        <StyledBest />
      </Content>
    </Container>
  );
};
