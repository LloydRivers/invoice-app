import styled from "styled-components";

export const StyledSideBar = styled.div`
  background: ${({ theme }) => theme.sideBar};
  border-radius: 0 20px 20px 0;
  min-height: 100vh;
`;

export const SVGContainer = styled.div`
  position: relative;
  border-radius: 0 20px 20px 0;

  svg {
    position: absolute;
    top: 10%;
    right: 0%;
  }
`;
