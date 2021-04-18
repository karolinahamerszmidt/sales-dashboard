import React, { VFC } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";
import { Icon } from "../icon/icon";

const LabelIcon = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 12px;
  color: ${({ color }) => color};
  margin-bottom: 2px;
`;
const LabelValueSign = styled.div`
  font-size: 10px;
  margin-top: 1px;
`;
const LabelValueNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const LabelValueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;
const LabelContainer = styled.div`
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

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`;

interface Props {
  percentage: number;
  color: string;
}

export const BestPieChart: VFC<Props> = ({ percentage, color }) => {
  const theme = useTheme();

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie
            data={[
              { name: "name1", value: percentage },
              { name: "name1", value: 100 - percentage },
            ]}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius="80%"
            outerRadius="100%"
            paddingAngle={5}
            dataKey="value"
            cornerRadius="50%"
          >
            <Cell fill={color} />
            <Cell fill={theme.colors.background} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <LabelContainer>
        <LabelIcon color={color}>
          <Icon type="bar-chart" />
        </LabelIcon>
        <LabelValueContainer>
          <LabelValueNumber>{percentage}</LabelValueNumber>
          <LabelValueSign>%</LabelValueSign>
        </LabelValueContainer>
      </LabelContainer>
    </Container>
  );
};
