import styled from "styled-components";

export const StyledSideBar = styled.div`
  border-radius: 0 25px 25px 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.sideBar};
`;

export const SVGContainer = styled.div`
  position: relative;
  border-radius: 0 25px 25px 0;
  width: 100%;

  svg {
    position: absolute;
    top: 10%;
    right: 0%;
  }
`;
