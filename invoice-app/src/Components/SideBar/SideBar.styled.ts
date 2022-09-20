import styled from "styled-components";

export const StyledSideBar = styled.div`
  background: ${({ theme }) => theme.sideBar};
  border-radius: 0 20px 20px 0;

  min-height: 100vh;
`;

export const SVGContainer = styled.div`
  position: relative;
  /* width: 100%; */
  /* height: 120px;
  width: 120px; */
  /* min-width: 100%; */
  /* border: 1px solid white; */
  border-radius: 0 20px 20px 0;
  svg {
    width: 100%;
    /* width: 107px; */
    position: absolute;
    top: 0;
    left: 0;
  }
`;
