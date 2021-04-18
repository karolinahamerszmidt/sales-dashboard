import React, { VFC } from "react";
import styled, { useTheme } from "styled-components";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { Icon } from "../icon/icon";

const data = [
  {
    name: "Page A",
    sales: 2400,
    feedback: 1000,
  },
  {
    name: "Page B",
    sales: 1398,
    feedback: 3000,
  },
  {
    name: "Page C",
    sales: 9800,
    feedback: 2000,
  },
  {
    name: "Page D",
    sales: 3908,
    feedback: 8000,
  },
  {
    name: "Page E",
    sales: 4800,
    feedback: 1890,
  },
  {
    name: "Page F",
    sales: 3800,
    feedback: 5000,
  },
  {
    name: "Page G",
    sales: 4300,
    feedback: 3490,
  },
];

const ListItemChart = styled.div``;

const ListItemCount = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.label};
`;

const ListItemName = styled.div`
  font-size: 12px;
  font-weight: 600;
  width: 45%;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const TriangleUp = styled(Icon).attrs({ type: "triangle-up" })`
  width: 8px;
  height: 8px;
  margin-right: 2px;
`;

const TriangleDown = styled(Icon).attrs({ type: "triangle-down" })`
  width: 8px;
  height: 8px;
  margin-right: 2px;
`;

const DynamicsContainer = styled(FlexBox)<{ isSuccess: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.colors.success : theme.colors.danger};
  font-size: 12px;
`;

interface DynamicsProps {
  dynamics: number;
}

const Dynamics: VFC<DynamicsProps> = ({ dynamics }) => (
  <DynamicsContainer isSuccess={dynamics >= 0}>
    {dynamics >= 0 ? <TriangleUp /> : <TriangleDown />} {dynamics}%
  </DynamicsContainer>
);

const Price = styled.div`
  font-weight: bold;
  margin-right: 8px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  white-space: nowrap;
  line-height: 1;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const SmallChartContainer = styled.div`
  width: 70px;
  height: 24px;
  background: ${({ theme }) => theme.colors.background};
`;

const BigChartContainer = styled.div`
  width: 100%;
  height: 80px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px 30px;
`;

const BigChart = () => {
  const theme = useTheme();

  return (
    <BigChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={50} height={50} data={data}>
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
          <Line
            type="monotone"
            dataKey="sales"
            stroke={theme.colors.chart4}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="feedback"
            stroke={theme.colors.chart2}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </BigChartContainer>
  );
};

interface SmallChartProps {
  data: any[];
  color: string;
}

const SmallChart: VFC<SmallChartProps> = ({ data, color }) => (
  <SmallChartContainer>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={70} height={24} data={data}>
        <Line
          type="monotone"
          dataKey="line"
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </SmallChartContainer>
);

export const PerformanceLineChart = () => {
  const theme = useTheme();

  return (
    <Container>
      <BigChart />
      <Title>Total earning</Title>
      <PriceContainer>
        <Price>$12 875</Price>
        <Dynamics dynamics={16} />
      </PriceContainer>
      <ListContainer>
        <ListItem>
          <ListItemName>Presentation</ListItemName>
          <ListItemCount>862</ListItemCount>
          <ListItemChart>
            <SmallChart
              data={data.map(({ name, sales }) => ({ name, line: sales }))}
              color={theme.colors.chart1}
            />
          </ListItemChart>
        </ListItem>
        <ListItem>
          <ListItemName>Development</ListItemName>
          <ListItemCount>654</ListItemCount>
          <ListItemChart>
            <SmallChart
              data={data.map(({ name, feedback }) => ({
                name,
                line: feedback,
              }))}
              color={theme.colors.chart3}
            />
          </ListItemChart>
        </ListItem>
        <ListItem>
          <ListItemName>Research</ListItemName>
          <ListItemCount>114</ListItemCount>
          <ListItemChart>
            <SmallChart
              data={data.map(({ name, sales }) => ({ name, line: sales }))}
              color={theme.colors.chart5}
            />
          </ListItemChart>
        </ListItem>
      </ListContainer>
    </Container>
  );
};
