/// <reference types="styled-components/cssprop"/>
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: Record<
      | "background"
      | "backgroundDark"
      | "menuItem"
      | "cardBackground"
      | "text"
      | "label"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "chart1"
      | "chart2"
      | "chart3"
      | "chart4"
      | "chart5",
      string
    >;
  }
}
