import React, { VFC } from "react";
import styled from "styled-components";
import { BestCard } from "../best-card/best-card";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "b b b b b b"
    "e e e e e e"
    "s s s s s s"
    "t t t t t t";
  column-gap: 24px;
  row-gap: 24px;
`;

const BCard = styled(BestCard)`
  grid-area: b;
`;

const ECard = styled(BestCard)`
  grid-area: e;
`;

const SCard = styled(BestCard)`
  grid-area: s;
`;

const TCard = styled(BestCard)`
  grid-area: t;
`;

interface Props {
  className?: string;
}

export const Best: VFC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <BCard cardLetter="B" />
      <ECard cardLetter="E" />
      <SCard cardLetter="S" />
      <TCard cardLetter="T" />
    </Container>
  );
};
