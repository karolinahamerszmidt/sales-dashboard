import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: 8px;
`;
