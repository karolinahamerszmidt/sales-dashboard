import React, { VFC } from "react";
import styled, { useTheme } from "styled-components";
import { getRandomInteger } from "../../utils/get-random-integer";
import {
  BestLineChart,
  Props as BestLineChartProps,
} from "../best-line-chart/best-line-chart";
import { BestList } from "../best-list/best-list";
import { BestPieChart } from "../best-pie-chart/best-pie-chart";
import { Card } from "../card/card";

const Letter = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled(Card)`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 30px;
`;

interface Props {
  className?: string;
  cardLetter: "B" | "E" | "S" | "T";
}

export const BestCard: VFC<Props> = ({ className, cardLetter }) => {
  const theme = useTheme();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = months.reduce<BestLineChartProps["data"]>(
    (sum, month, index) => {
      return [
        ...sum,
        {
          name: month,
          line1:
            index === 0
              ? getRandomInteger(0, 500)
              : sum[index - 1].line1 + getRandomInteger(-50, 90),
          line2:
            index === 0
              ? getRandomInteger(0, 500)
              : sum[index - 1].line2 + getRandomInteger(-50, 50),
          line3:
            index === 0
              ? getRandomInteger(0, 500)
              : sum[index - 1].line3 + getRandomInteger(-50, 50),
          line4:
            index === 0
              ? getRandomInteger(0, 500)
              : sum[index - 1].line4 + getRandomInteger(-50, 50),
          line5:
            index === 0
              ? getRandomInteger(0, 500)
              : sum[index - 1].line5 + getRandomInteger(-50, 50),
        },
      ];
    },
    []
  );

  const listItems = [
    {
      name: "Business",
      previousValue: data[data.length - 2].line1,
      currentValue: data[data.length - 1].line1,
      color: theme.colors.chart1,
    },
    {
      name: "Finance",
      previousValue: data[data.length - 2].line2,
      currentValue: data[data.length - 1].line2,
      color: theme.colors.chart2,
    },
    {
      name: "Travel",
      previousValue: data[data.length - 2].line3,
      currentValue: data[data.length - 1].line3,
      color: theme.colors.chart3,
    },
    {
      name: "Presentation",
      previousValue: data[data.length - 2].line4,
      currentValue: data[data.length - 1].line4,
      color: theme.colors.chart4,
    },
    {
      name: "Startup",
      previousValue: data[data.length - 2].line5,
      currentValue: data[data.length - 1].line5,
      color: theme.colors.chart5,
    },
  ];

  const pieChartPercentage = getRandomInteger(0, 100);

  const pieChartColor =
    cardLetter === "B"
      ? theme.colors.chart1
      : cardLetter === "E"
      ? theme.colors.chart2
      : cardLetter === "S"
      ? theme.colors.chart3
      : theme.colors.chart4;

  return (
    <Container className={className}>
      <Letter>{cardLetter}</Letter>
      <BestPieChart percentage={pieChartPercentage} color={pieChartColor} />
      <BestLineChart
        line1Color={theme.colors.chart1}
        line2Color={theme.colors.chart2}
        line3Color={theme.colors.chart3}
        line4Color={theme.colors.chart4}
        line5Color={theme.colors.chart5}
        data={data}
      />
      <BestList items={listItems} />
    </Container>
  );
};
