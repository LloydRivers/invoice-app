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

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10%;

  transform: translate(10%, -10%);

  justify-content: center;
  align-items: center;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding-top: 1em;
  width: 100%;
`;

export const StyledImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
`;
