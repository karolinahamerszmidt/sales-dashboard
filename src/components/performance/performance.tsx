import React, { VFC } from "react";
import styled from "styled-components";
import { Card } from "../card/card";
import { PerformanceLineChart } from "../performance-line-chart/performance-line-chart";
import { PerformanceList } from "../performance-list/performance-list";
import { PerformancePieChart } from "../performance-pie-chart/performance-pie-chart";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 3fr 7fr;
  grid-template-areas:
    "pieChart pieChart pieChart lineChart lineChart lineChart"
    "list list list list list list";
  column-gap: 24px;
  row-gap: 24px;
`;

const PieChartCard = styled(Card)`
  grid-area: pieChart;
`;

const LineChartCard = styled(Card)`
  grid-area: lineChart;
`;

const ListCard = styled(Card)`
  grid-area: list;
`;

interface Props {
  className?: string;
}

export const Performance: VFC<Props> = ({ className }) => (
  <Container className={className}>
    <PieChartCard>
      <PerformancePieChart />
    </PieChartCard>
    <LineChartCard>
      <PerformanceLineChart />
    </LineChartCard>
    <ListCard>
      <PerformanceList />
    </ListCard>
  </Container>
);
