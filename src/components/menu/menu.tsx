import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { darken, transparentize } from "polished";
import DarkModeToggle from "react-dark-mode-toggle";
import { forTabletPortraitUp } from "../../style/media-queries";
import { Icon } from "../icon/icon";
import { ThemeModeContext } from "../../style/theme";

export const MENU_WIDTH_PX = 96;
export const MENU_OPEN_WIDTH_PX = 300;
export const MENU_ITEM_HEIGHT_PX = 48;
export const MENU_ITEM_TABLET_HEIGHT_PX = 64;

interface MenuContextValue {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextValue>(
  {} as MenuContextValue
);

export const MenuProvider: FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
    }),
    [isMenuOpen]
  );

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

const MenuItemLabel = styled.div`
  position: absolute;
  top: 0;
  left: ${MENU_WIDTH_PX}px;
  display: flex;
  align-items: center;
  width: ${MENU_OPEN_WIDTH_PX - MENU_WIDTH_PX}px;
  height: 100%;
`;

const MenuItemIcon = styled.div`
  height: 32px;
  width: 32px;
`;

const ToggleMenuItemIcon = styled(MenuItemIcon)``;

const MenuItemIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${MENU_WIDTH_PX}px;
  height: 100%;
`;

const MenuItem = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  height: ${MENU_ITEM_HEIGHT_PX}px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.menuItemActive : theme.colors.menuItemDefault};

  @media ${forTabletPortraitUp} {
    height: ${MENU_ITEM_TABLET_HEIGHT_PX}px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.menuItemActive};
  }

  &:hover {
    background: ${({ theme }) => transparentize(0.5, theme.colors.background)};
    color: ${({ theme, isActive }) =>
      isActive
        ? darken(0.1, theme.colors.menuItemActive)
        : darken(0.1, theme.colors.menuItemDefault)};
    &::after {
      background: ${({ theme }) => darken(0.1, theme.colors.menuItemActive)};
    }
  }
`;

const LogoMenuItem = styled(MenuItem)`
  height: ${MENU_ITEM_TABLET_HEIGHT_PX}px;
  margin-bottom: 24px;

  @media ${forTabletPortraitUp} {
    margin-top: 26px;
    margin-bottom: 48px;
  }

  ${MenuItemIcon} {
    width: 48px;
    height: 48px;
  }
`;

const DarkModeToggleCMenuItem = styled(MenuItem)`
  ${MenuItemIcon} {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BottomNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 26px;
`;

const MainNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media ${forTabletPortraitUp} {
    margin-top: 48px;
  }
`;

const Container = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ isMenuOpen }) =>
    isMenuOpen ? MENU_OPEN_WIDTH_PX : MENU_WIDTH_PX}px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  transition-duration: 0.3s;
  transition-property: transform, width;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "" : `translateX(-${MENU_WIDTH_PX}px)`};

  @media ${forTabletPortraitUp} {
    transform: translateX(0);
  }

  ${MenuItemLabel} {
    transition: opacity 0.3s;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  }

  ${ToggleMenuItemIcon} {
    transition: transform 0.3s;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? "rotate(180deg)" : "")};
  }
`;

export const Menu = () => {
  const { isThemeDark, setIsThemeDark } = useContext(ThemeModeContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const toggleThemeMode = useCallback(() => setIsThemeDark((prev) => !prev), [
    setIsThemeDark,
  ]);

  const handleArrowsClick = useCallback(() => setIsMenuOpen((prev) => !prev), [
    setIsMenuOpen,
  ]);

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoMenuItem isActive={false}>
        <MenuItemIconContainer>
          <MenuItemIcon>
            <Icon type="logo" />
          </MenuItemIcon>
        </MenuItemIconContainer>
      </LogoMenuItem>
      <MenuItem isActive={false} onClick={handleArrowsClick}>
        <MenuItemIconContainer>
          <ToggleMenuItemIcon>
            <Icon type="arrows-right" />
          </ToggleMenuItemIcon>
        </MenuItemIconContainer>
        <MenuItemLabel>Close menu</MenuItemLabel>
      </MenuItem>
      <MainNavigation>
        <MenuItem isActive={true}>
          <MenuItemIconContainer>
            <MenuItemIcon>
              <Icon type="grid" />
            </MenuItemIcon>
          </MenuItemIconContainer>
          <MenuItemLabel>Main</MenuItemLabel>
        </MenuItem>
        <MenuItem isActive={false}>
          <MenuItemIconContainer>
            <MenuItemIcon>
              <Icon type="globe" />
            </MenuItemIcon>
          </MenuItemIconContainer>
          <MenuItemLabel>Global</MenuItemLabel>
        </MenuItem>
        <MenuItem isActive={false}>
          <MenuItemIconContainer>
            <MenuItemIcon>
              <Icon type="list" />
            </MenuItemIcon>
          </MenuItemIconContainer>
          <MenuItemLabel>Tasks</MenuItemLabel>
        </MenuItem>
        <MenuItem isActive={false}>
          <MenuItemIconContainer>
            <MenuItemIcon>
              <Icon type="pie-chart" />
            </MenuItemIcon>
          </MenuItemIconContainer>
          <MenuItemLabel>Statistics</MenuItemLabel>
        </MenuItem>
        <MenuItem isActive={false}>
          <MenuItemIconContainer>
            <MenuItemIcon>
              <Icon type="calendar" />
            </MenuItemIcon>
          </MenuItemIconContainer>
          <MenuItemLabel>Events</MenuItemLabel>
        </MenuItem>
      </MainNavigation>
      <BottomNavigation>
        <DarkModeToggleCMenuItem isActive={false}>
          <MenuItemIconContainer>
            <MenuItemIcon>
              <DarkModeToggle
                onChange={setIsThemeDark}
                checked={isThemeDark}
                size={48}
              />
            </MenuItemIcon>
          </MenuItemIconContainer>
          <MenuItemLabel onClick={toggleThemeMode}>Toggle theme</MenuItemLabel>
        </DarkModeToggleCMenuItem>
        <MenuItem isActive={false}>
          <MenuItemIconContainer>
            <MenuItemIcon>
              <Icon type="user" />
            </MenuItemIcon>
          </MenuItemIconContainer>
          <MenuItemLabel>Profile</MenuItemLabel>
        </MenuItem>
      </BottomNavigation>
    </Container>
  );
};
