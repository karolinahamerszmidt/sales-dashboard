import React, { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import styled, { useTheme } from "styled-components";
import { forDesktopUp } from "../../style/media-queries";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export interface Props {
  line1Color: string;
  line2Color: string;
  line3Color: string;
  line4Color: string;
  line5Color: string;
  data: {
    name: string;
    line1: number;
    line2: number;
    line3: number;
    line4: number;
    line5: number;
  }[];
}

export const BestLineChart: VFC<Props> = ({
  line1Color,
  line2Color,
  line3Color,
  line4Color,
  line5Color,
  data,
}) => {
  const theme = useTheme();
  const isDesktopUp = useMediaQuery({ query: forDesktopUp });

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={50}
          height={50}
          data={data}
          margin={{
            top: 30,
            right: isDesktopUp ? 30 : 10,
            left: isDesktopUp ? 30 : 10,
            bottom: 10,
          }}
        >
          <Tooltip
            contentStyle={{
              border: "none",
              background: theme.colors.chartTooltip,
              borderRadius: 8,
            }}
            wrapperStyle={{
              fontSize: 10,
              color: theme.colors.text,
            }}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="transparent"
            fillRule="evenodd"
            verticalFill={[theme.colors.background, "transparent"]}
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 8 }}
            interval={isDesktopUp ? 0 : undefined}
            axisLine={false}
            tickLine={false}
          />
          <Line
            type="monotone"
            dataKey="line1"
            stroke={line1Color}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="line2"
            stroke={line2Color}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="line3"
            stroke={line3Color}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="line4"
            stroke={line4Color}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="line5"
            stroke={line5Color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
