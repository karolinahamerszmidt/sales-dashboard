import styled from "styled-components";

export const Space = styled.div<{ size: number }>`
  margin: ${({ size }) => `${size}px ${size}px 0 0`};
`;
