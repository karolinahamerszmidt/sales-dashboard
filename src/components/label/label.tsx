import styled from "styled-components";

export const Label = styled.div`
  font-weight: bold;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.label};
  text-transform: uppercase;
`;
