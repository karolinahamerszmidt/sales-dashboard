import React, { VFC } from "react";
import styled, { useTheme } from "styled-components";
import { Header } from "../header/header";
import { Icon } from "../icon/icon";
import { Label } from "../label/label";
import { Space } from "../space/space";

const TD = styled.td`
  font-size: 14px;
`;

const TH = styled.th``;

const TR = styled.tr``;

const TBody = styled.tbody``;

const THead = styled.thead``;

const Table = styled.table`
  width: 100%;

  & > ${THead} > ${TR} > ${TH} {
    padding-bottom: 18px;
    text-align: left;

    &:last-child {
      text-align: right;
    }
  }

  & > ${TBody} > ${TR} > ${TD} {
    padding-bottom: 12px;
    text-align: left;

    &:last-child {
      text-align: right;
    }
  }
`;

const Container = styled.div`
  padding: 30px;
`;

const Dot = styled.div<{ color: string }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 8px;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const RankContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface RankItemProps {
  active: boolean;
  color: string;
}

const RankItem = styled.div<RankItemProps>`
  width: 18px;
  height: 6px;
  background: #ff6e8b;
  margin-right: 4px;
  background: ${({ active, color, theme }) =>
    active ? color : theme.colors.backgroundDark};
`;

interface RankProps {
  level: number;
  color: string;
}

const Rank = ({ level, color }: RankProps) => (
  <RankContainer>
    <RankItem active={level > 0} color={color} />
    <RankItem active={level > 1} color={color} />
    <RankItem active={level > 2} color={color} />
    <RankItem active={level > 3} color={color} />
    <RankItem active={level > 4} color={color} />
  </RankContainer>
);

const TriangleUp = styled(Icon).attrs({ type: "triangle-up" })`
  width: 8px;
  height: 8px;
  margin-right: 4px;
`;

const TriangleDown = styled(Icon).attrs({ type: "triangle-down" })`
  width: 8px;
  height: 8px;
  margin-right: 4px;
`;

const DynamicsContainer = styled(FlexBox)<{ isSuccess: boolean }>`
  justify-content: flex-end;
  color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.colors.success : theme.colors.danger};
`;

interface DynamicsProps {
  dynamics: number;
}

const Dynamics: VFC<DynamicsProps> = ({ dynamics }) => (
  <DynamicsContainer isSuccess={dynamics >= 0}>
    {dynamics >= 0 ? <TriangleUp /> : <TriangleDown />} {dynamics}%
  </DynamicsContainer>
);

const ItemName = styled.div`
  width: 100%;
  font-weight: 600;
`;

interface ItemProps {
  parameter: string;
  total: string;
  today: string;
  status: number;
  dynamics: number;
  dotType: "danger" | "warning" | "info" | "success";
  rankType: 1 | 2 | 3 | 4 | 5;
}

const Item = ({
  parameter,
  total,
  today,
  status,
  dynamics,
  dotType,
  rankType,
}: ItemProps) => {
  const theme = useTheme();

  const dotColor = theme.colors[dotType];
  const rankColor =
    rankType === 1
      ? theme.colors.chart1
      : rankType === 2
      ? theme.colors.chart2
      : rankType === 3
      ? theme.colors.chart3
      : rankType === 4
      ? theme.colors.chart4
      : theme.colors.chart5;

  return (
    <TR>
      <TD>
        <ItemName>
          <FlexBox>
            <Dot color={dotColor} />
            {parameter}
          </FlexBox>
        </ItemName>
      </TD>
      <TD>{total}</TD>
      <TD>{today}</TD>
      <TD>
        <Rank level={status} color={rankColor} />
      </TD>
      <TD>
        <Dynamics dynamics={dynamics} />
      </TD>
    </TR>
  );
};

const items: ItemProps[] = [
  {
    parameter: "Views",
    total: "195 934",
    today: "49 557",
    status: 3,
    dynamics: 10,
    dotType: "success",
    rankType: 1,
  },
  {
    parameter: "Sales",
    total: "564 056",
    today: "678 453",
    status: 2,
    dynamics: 1,
    dotType: "info",
    rankType: 2,
  },
  {
    parameter: "Users",
    total: "33 045",
    today: "6 054",
    status: 5,
    dynamics: -25,
    dotType: "danger",
    rankType: 3,
  },
  {
    parameter: "Product",
    total: "302 505",
    today: "122 043",
    status: 4,
    dynamics: -3,
    dotType: "warning",
    rankType: 4,
  },
  {
    parameter: "Views 2",
    total: "195 934",
    today: "49 557",
    status: 3,
    dynamics: 10,
    dotType: "success",
    rankType: 1,
  },
  {
    parameter: "Sales 2",
    total: "564 056",
    today: "678 453",
    status: 2,
    dynamics: 1,
    dotType: "info",
    rankType: 2,
  },
  {
    parameter: "Users 2",
    total: "33 045",
    today: "6 054",
    status: 5,
    dynamics: -25,
    dotType: "danger",
    rankType: 3,
  },
  {
    parameter: "Product 2",
    total: "302 505",
    today: "122 043",
    status: 4,
    dynamics: -3,
    dotType: "warning",
    rankType: 4,
  },
  {
    parameter: "Views 3",
    total: "195 934",
    today: "49 557",
    status: 3,
    dynamics: 10,
    dotType: "success",
    rankType: 1,
  },
  {
    parameter: "Sales 3",
    total: "564 056",
    today: "678 453",
    status: 2,
    dynamics: 1,
    dotType: "info",
    rankType: 2,
  },
  {
    parameter: "Users 3",
    total: "33 045",
    today: "6 054",
    status: 5,
    dynamics: -25,
    dotType: "danger",
    rankType: 3,
  },
  {
    parameter: "Product 3",
    total: "302 505",
    today: "122 043",
    status: 4,
    dynamics: -3,
    dotType: "warning",
    rankType: 4,
  },
];

export const PerformanceList = () => (
  <Container>
    <Header>Summary</Header>
    <Space size={22} />

    <Table>
      <THead>
        <TR>
          <TH>
            <Label>Parameter</Label>
          </TH>
          <TH>
            <Label>Total</Label>
          </TH>
          <TH>
            <Label>Today</Label>
          </TH>
          <TH>
            <Label>Status</Label>
          </TH>
          <TH>
            <Label>Dynamics</Label>
          </TH>
        </TR>
      </THead>
      <TBody>
        {items.map((item) => (
          <Item key={item.parameter} {...item} />
        ))}
      </TBody>
    </Table>
  </Container>
);
