import React, { VFC } from "react";
import styled from "styled-components";

const CurrentValue = styled.div``;
const PreviousValue = styled.div`
  color: ${({ theme }) => theme.colors.label};
`;
const Name = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Dot = styled.div<{ color: string }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 8px;
`;

const TD = styled.td``;

const TR = styled.tr``;

const TBody = styled.tbody``;

const Table = styled.table`
  width: 100%;
  font-size: 14px;
`;

const Container = styled.div`
  width: 100%;
`;

interface Props {
  className?: string;
  items: {
    name: string;
    previousValue: number;
    currentValue: number;
    color: string;
  }[];
}

export const BestList: VFC<Props> = ({ className, items }) => (
  <Container className={className}>
    <Table>
      <TBody>
        {items.map((item) => (
          <TR key={item.name}>
            <TD>
              <Name>
                <Dot color={item.color} /> {item.name}
              </Name>
            </TD>
            <TD>
              <PreviousValue>{item.previousValue}</PreviousValue>
            </TD>
            <TD>
              <CurrentValue>{item.currentValue}</CurrentValue>
            </TD>
          </TR>
        ))}
      </TBody>
    </Table>
  </Container>
);
