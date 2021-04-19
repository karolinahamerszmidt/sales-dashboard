import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { DefaultTheme } from "styled-components";

interface ThemeModeContextValue {
  isThemeDark: boolean;
  setIsThemeDark: Dispatch<SetStateAction<boolean>>;
}

export const ThemeModeContext = createContext({} as ThemeModeContextValue);

export const ThemeModeProvider: FC = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const contextValue = useMemo(() => ({ isThemeDark, setIsThemeDark }), [
    isThemeDark,
  ]);

  return (
    <ThemeModeContext.Provider value={contextValue}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const lightTheme: DefaultTheme = {
  colors: {
    background: "#F2F5FA",
    backgroundDark: "#DADFF2",
    menuItem: "#B7B5CC",
    cardBackground: "white",
    text: "#373773",
    label: "#B7B5CC",
    success: "#00B929",
    danger: "#FF2D2E",
    warning: "#FDB969",
    info: "#2999FF",
    chart1: "#FF6E8B",
    chart2: "#FDB969",
    chart3: "#02F3E3",
    chart4: "#8575FE",
    chart5: "#7617F9",
    chartTooltip: "#F2F5FA",
    menuItemDefault: "#B7B5CC",
    menuItemActive: "#8575FE",
  },
  shadows: {
    card: "box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.1)",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: "black",
    backgroundDark: "#0A0917",
    menuItem: "#B7B5CC",
    cardBackground: "#14142C",
    text: "white",
    label: "#89879a",
    success: "#5EFF5A",
    danger: "#FF2D2E",
    warning: "#FFA640",
    info: "#023AFF",
    chart1: "#FDA312",
    chart2: "#29D758",
    chart3: "#00F1E1",
    chart4: "#4CA1FE",
    chart5: "#A91CFB",
    chartTooltip: "#F2F5FA",
    menuItemDefault: "#7979B2",
    menuItemActive: "#AE2AFF",
  },
  shadows: {
    card: "box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.1)",
  },
};
