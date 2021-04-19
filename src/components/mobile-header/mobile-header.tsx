import { darken, transparentize } from "polished";
import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { forTabletPortraitUp } from "../../style/media-queries";
import { Icon } from "../icon/icon";
import { MenuContext, MENU_OPEN_WIDTH_PX, MENU_WIDTH_PX } from "../menu/menu";

const MOBILE_HEADER_HEIGHT_PX = 64;

const ItemIcon = styled.div`
  width: 48px;
  height: 48px;
`;

const Item = styled.div`
  width: 64px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.menuItemDefault};

  &:hover {
    background: ${({ theme }) => transparentize(0.5, theme.colors.background)};
    color: ${({ theme }) => darken(0.1, theme.colors.menuItemDefault)};
  }
`;

const Container = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  height: ${MOBILE_HEADER_HEIGHT_PX}px;
  min-height: ${MOBILE_HEADER_HEIGHT_PX}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 0 24px;
  transition: transform 0.3s;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? `translateX(${MENU_OPEN_WIDTH_PX}px)` : ""};

  @media ${forTabletPortraitUp} {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? `translateX(${MENU_OPEN_WIDTH_PX - MENU_WIDTH_PX}px)` : ""};
  }

  ${Item} {
    transition: opacity 0.3s;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "")};
  }
`;

export const MobileHeader = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleArrowsClick = useCallback(() => setIsMenuOpen(true), [
    setIsMenuOpen,
  ]);

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Item>
        <ItemIcon>
          <Icon type="logo" />
        </ItemIcon>
      </Item>
      <Item>
        <ItemIcon onClick={handleArrowsClick}>
          <Icon type="arrows-right" />
        </ItemIcon>
      </Item>
    </Container>
  );
};
