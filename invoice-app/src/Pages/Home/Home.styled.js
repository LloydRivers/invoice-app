import styled from "styled-components";

export const StyledHome = styled.main`
  display: grid;
  grid-template-columns: 1fr 11fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
