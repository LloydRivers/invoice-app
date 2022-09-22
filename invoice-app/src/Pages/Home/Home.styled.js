import styled from "styled-components";

export const StyledHome = styled.main`
  background-color: ${(props) => props.theme.heroBG};
  max-width: 1200px;

  display: grid;
  grid-template-columns: 1fr 11fr;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
