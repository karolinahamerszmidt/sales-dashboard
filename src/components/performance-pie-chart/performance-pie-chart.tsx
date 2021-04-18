import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";
import { Icon } from "../icon/icon";

const Progress = styled.div<{ percentage: number; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  border-radius: 2px;
  background: ${({ color }) => color};
`;

const ProgressContainer = styled.div`
  position: relative;
  width: 100px;
  height: 4px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 2px;
`;

const TD = styled.td``;

const TR = styled.tr``;

const TBody = styled.tbody``;

const Table = styled.table`
  width: 100%;
  max-width: 250px;
  font-size: 10px;

  & > ${TBody} > ${TR} {
    line-height: 1;

    & > ${TD} {
      padding-bottom: 2px;

      &:last-child {
        width: 100px;
      }
    }
  }
`;

const PieChartLabelIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 4px;
  margin: 0 auto;
  margin-bottom: 6px;
  background: ${({ theme }) => theme.colors.backgroundDark};
  border-radius: 50%;
`;

const PieChartLabelValueSign = styled.div`
  font-size: 16px;
  margin-top: 3px;
`;

const PieChartLabelValueNumber = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const PieChartLabelValueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;

const PieChartText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 6px;
  font-weight: bold;
  text-transform: uppercase;
`;

const PieChartLabelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: cetner;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1;
`;

const PieChartLegendItemName = styled.div`
  width: 50px;
  margin-right: 4px;
`;

const PieChartLegendItemDot = styled.div<{ color: string }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid ${({ color }) => color};
  margin: 1px 4px 0 8px;
`;

const PieChartLegendItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 8px;
  margin-top: 0.8px;
`;

const PieChartLegend = styled.div`
  position: absolute;
  width: 50%;
  bottom: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
`;

const PieChartContainer = styled.div`
  position: relative;
  width: 176px;
  height: 176px;
  margin-bottom: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 30px;
`;

export const PerformancePieChart = () => {
  const theme = useTheme();

  const pies = [
    {
      name: "Sales",
      percentage: 100,
      color: theme.colors.chart1,
    },
    {
      name: "Sales plan",
      percentage: 80,
      color: theme.colors.chart2,
    },
    {
      name: "Weekly limit",
      percentage: 60,
      color: theme.colors.chart3,
    },
    {
      name: "Monthly limit",
      percentage: 40,
      color: theme.colors.chart4,
    },
    {
      name: "Annual limit",
      percentage: 20,
      color: theme.colors.chart5,
    },
  ];

  const tableItems = [
    {
      name: "Sales",
      value1: 1540,
      value2: 786,
      percentage: 40,
      color: theme.colors.info,
    },
    {
      name: "Users",
      value1: 878,
      value2: 539,
      percentage: 70,
      color: theme.colors.warning,
    },
    {
      name: "Products",
      value1: 356,
      value2: 112,
      percentage: 10,
      color: theme.colors.danger,
    },
  ];

  return (
    <Container>
      <PieChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart
            width={100}
            height={100}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            {pies.map((pie, index) => (
              <Pie
                key={index}
                data={[
                  {
                    name: "data",
                    value: pie.percentage * (7 / 8) * (1 - 0.01 * index),
                  },
                  {
                    name: "data",
                    value: 100 - pie.percentage * (7 / 8) * (1 - 0.015 * index),
                  },
                ]}
                cx="50%"
                cy="50%"
                startAngle={-90}
                endAngle={-90 + -360}
                innerRadius={`${54 + index * 10}%`}
                outerRadius={`${60 + index * 10}%`}
                paddingAngle={5}
                dataKey="value"
                cornerRadius="50%"
              >
                <Cell fill={pie.color} />
                <Cell fill={theme.colors.background} />
              </Pie>
            ))}
          </PieChart>
        </ResponsiveContainer>
        <PieChartLabelContainer>
          <PieChartLabelIcon>
            <Icon type="award" />
          </PieChartLabelIcon>
          <PieChartText>Dynamics today</PieChartText>
          <PieChartLabelValueContainer>
            <PieChartLabelValueNumber>
              {pies.reduce((sum, { percentage }) => sum + percentage, 0) /
                pies.length}
            </PieChartLabelValueNumber>
            <PieChartLabelValueSign>%</PieChartLabelValueSign>
          </PieChartLabelValueContainer>
        </PieChartLabelContainer>
        <PieChartLegend>
          {pies.map((pie) => (
            <PieChartLegendItem>
              <PieChartLegendItemDot color={pie.color} />
              <PieChartLegendItemName>{pie.name}</PieChartLegendItemName>
              {Math.floor((2354 * pie.percentage) / 100)}
            </PieChartLegendItem>
          ))}
        </PieChartLegend>
      </PieChartContainer>
      <Table>
        <TBody>
          {tableItems.map((tableItem, index) => (
            <TR key={index}>
              <TD>{tableItem.name}</TD>
              <TD>{tableItem.value1}</TD>
              <TD>{tableItem.value2}</TD>
              <TD>
                <ProgressContainer>
                  <Progress
                    percentage={tableItem.percentage}
                    color={tableItem.color}
                  />
                </ProgressContainer>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </Container>
  );
};
