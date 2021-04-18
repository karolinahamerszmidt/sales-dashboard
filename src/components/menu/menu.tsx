import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/icon";

const Container = styled.div`
  width: 96px;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  height: 48px;
  width: 48px;
  margin-top: 27px;
`;

const ArrowsRight = styled.div`
  height: 32px;
  width: 32px;
  margin-top: 60px;
  color: ${({ theme }) => theme.colors.menuItem};
`;

const Grid = styled.div`
  height: 32px;
  width: 32px;
  margin-top: 100px;
  color: ${({ theme }) => theme.colors.menuItem};
`;

const Globe = styled.div`
  height: 32px;
  width: 32px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.menuItem};
`;

const List = styled(Globe)``;

const PieChart = styled(Globe)``;

const Calendar = styled(Globe)``;

const Bell = styled.div`
  height: 32px;
  width: 32px;
  color: ${({ theme }) => theme.colors.menuItem};
  margin-top: auto;
`;

const User = styled.div`
  height: 32px;
  width: 32px;
  color: ${({ theme }) => theme.colors.menuItem};
  margin-top: 32px;
  margin-bottom: 27px;
`;

export const Menu = () => (
  <Container>
    <Logo>
      <Icon type="logo" />
    </Logo>
    <ArrowsRight>
      <Icon type="arrowsRight" />
    </ArrowsRight>
    <Grid>
      <Icon type="grid" />
    </Grid>
    <Globe>
      <Icon type="globe" />
    </Globe>
    <List>
      <Icon type="list" />
    </List>
    <PieChart>
      <Icon type="pie-chart" />
    </PieChart>
    <Calendar>
      <Icon type="calendar" />
    </Calendar>
    <Bell>
      <Icon type="bell" />
    </Bell>
    <User>
      <Icon type="user" />
    </User>
  </Container>
);
