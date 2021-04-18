import React, { FC, SVGProps } from "react";
import { ReactComponent as LogoSVG } from "./logo.svg";
import { ReactComponent as ArrowsRight } from "./arrows-right.svg";
import { ReactComponent as Grid } from "./grid.svg";
import { ReactComponent as Globe } from "./globe.svg";
import { ReactComponent as List } from "./list.svg";
import { ReactComponent as PieChart } from "./pie-chart.svg";
import { ReactComponent as Calendar } from "./calendar.svg";
import { ReactComponent as Bell } from "./bell.svg";
import { ReactComponent as User } from "./user.svg";

const iconComponents = {
  logo: LogoSVG,
  arrowsRight: ArrowsRight,
  grid: Grid,
  globe: Globe,
  list: List,
  "pie-chart": PieChart,
  calendar: Calendar,
  bell: Bell,
  user: User,
};
export type IconName = keyof typeof iconComponents;

export type Props = SVGProps<SVGSVGElement> & {
  type: IconName;
};

export const Icon: FC<Props> = ({ type, ...rest }) => {
  const Component = iconComponents[type];

  return <Component width="100%" height="100%" {...rest} />;
};
