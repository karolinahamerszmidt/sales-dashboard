import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
