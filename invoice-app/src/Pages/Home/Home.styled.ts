import styled from "styled-components";

export const StyledHome = styled.main`
  background-color: ${(props) => props.theme.heroBG};

  display: grid;
  grid-template-columns: 106px 11fr;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
